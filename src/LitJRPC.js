/**
 # Copyright (c) 2016-2018 The flatmax-elements Authors. All rights reserved.
 #
 # Redistribution and use in source and binary forms, with or without
 # modification, are permitted provided that the following conditions are
 # met:
 #
 #    * Redistributions of source code must retain the above copyright
 # notice, this list of conditions and the following disclaimer.
 #    * Redistributions in binary form must reproduce the above
 # copyright notice, this list of conditions and the following disclaimer
 # in the documentation and/or other materials provided with the
 # distribution.
 #    * Neither the name of Flatmax Pty Ltd nor the names of its
 # contributors may be used to endorse or promote products derived from
 # this software without specific prior written permission.
 #
 # THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 # "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 # LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 # A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 # OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 # SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 # LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 # DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 # THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 # (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 # OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import {JRPCClient} from '@flatmax/jrpc-oo/jrpc-client.js';
import '@material/mwc-button';

/** This class inherits from JrpcElement and implements
the response functions. i.e. when a function is called on the server
the functions defined in this element are called in response.

The base of JRPCClient is Lit
*/
export class LitJRPC extends JRPCClient {
  constructor() {
    super();
    this.remoteTimeout = 300;
  }

  /** Overloading JRPCCLient::serverChanged to print out the websocket address
  */
  serverChanged(){
      console.log('Make sure ws url = '+this.serverURI+' has browser serurity clearance');
      console.log('to do this, goto '+this.serverURI.replace('wss','https')+' in a new browser tab replacing the wss for https\n do this each time the local cert changes or times out');
      super.serverChanged();
  }

  /** JRPCClient::setupSkip calls this overload on websocket connection errors
  */
  setupSkip(){
    super.setupSkip();
    console.log('is JRPC-OO.node.js running ?')
    console.log('is the ws url cleared with the browser for access ?')
  }

  /** server variable is ready to use.
  Create a button for each of the available functions.
  */
  setupDone() {
    Object.keys(this.server).forEach(fn => {
      if (fn.indexOf('.server')<0 && fn.indexOf('.dual-batch')<0){
        let btn=document.createElement('mwc-button');
        btn.raised=true; btn.elevation=10;
        btn.onclick=this.server[fn];
        btn.textContent=fn;
        this.shadowRoot.appendChild(btn);
      }
    });
  }

  remoteIsUp(){
    console.log('LitJRPC::remoteIsUp')
    this.addClass(this); // do this for the remote to be able to call us - not necessary if execution is one way
  }

  /** This method test passing arguments to the server
  */
  testArgPass() {
    var lj = document.querySelector('lit-jrpc');
    if (lj.server['TestClass.fn2']!=null)
      lj.server['TestClass.fn2'](1, {0: 'test', 1: [ 1 ,2], 2: 'this function'});
    else
      console.log('expected the server to expose a class TestClass with function fn2 but couldn\'t find it');
  }

  /** This method test no passing arguments to the server
  */
  testNoArgPass() {
    var lj = document.querySelector('lit-jrpc');
    if (lj.server['TestClass.fn1']!=null)
      lj.server['TestClass.fn1']();
    else
      console.log('expected the server to expose a class TestClass with function fn1 but couldn\'t find it');
  }

  /** This function is defined on the server, when we call
  this.server['TestClass.fn1']()
  This function will be called to process the server's response.
  */
  'TestClass.fn1'(params) {
    console.log('local-client : response from the server :')
    console.log('lit-jrpc : TestClass.fn1 : params = '+JSON.stringify(params, null, 2))
  }

  // Don't define this function to force jrpc-client to react to a missing function
  // 'TestClass.fn2'(params){
  //   console.log('local-client : response from the server :')
  //   console.log('lit-jrpc : TestClass.fn2 : params = '+JSON.stringify(params, null, 2))
  // }

  /** This function is defined on the server, when we call
  this.server['TestClass.fn1']()
  This function will be called to process the server's response.
  */
  'TestClass2.fn3'(params) {
    console.log('local-client : response from the server :')
    console.log('lit-jrpc : TestClass.fn3 : params = '+JSON.stringify(params, null, 2))
  }


  /** This function is defined on the server, when we call
  this.server.system.listComponents()
  This function will be called to process the server's response.
  */
  'system.listComponents'(params) {
    console.log('lit-jrpc : system.listComponents : params = '+JSON.stringify(params, null, 2))
  }
}
