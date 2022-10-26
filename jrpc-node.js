#! /usr/bin/env node
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
let JRPCServer = require('@flatmax/jrpc-oo/JRPCServer');

// get a class to expose over the network
let TestClass = require('./TestClass').TestClass;

// note TestClass2 inherits TestClass
tc=new TestClass; // this class will be used over js-JRPC

// start the server and add the class.
var JrpcServer=new JRPCServer.JRPCServer(9000); // start a server on port 9000
JrpcServer.addClass(tc); // setup the class for remote use over the network

// Note: as we are using a secure connection (private cert) on port 9000,
// the browser will have a privacy alert because it doesn't recognise the private
// cert. Look in the browser console on how to clear that privacy concern.
// Alternatively, don't use secure websockets
