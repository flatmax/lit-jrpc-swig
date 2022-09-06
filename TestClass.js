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

"use strict";

/** The functions for this test class will automatically be extracted for use with jrpc*/
class TestClass {
  constructor(){
    this.test=1;
  }
  fn1(args){
    console.log('this is fn1');
    console.log('got args')
    console.log(arguments)
    console.log('args='+JSON.stringify(args, null, 2))
    return 'this is fn1';
  }

  fn2(arg1, arg2){
    console.log('fn2');
    console.log('arg1 :');
    console.log(JSON.stringify(arg1, null, 2))
    console.log('');
    console.log('arg2 :');
    console.log(JSON.stringify(arg2, null, 2))
    return arg1;
  }

  get server(){return this.getServer();}
}

class TestClass2 extends TestClass {
  fn3(args){
      console.log(args);
      return 'this is fn3';
  }
}

module.exports = {
  TestClass2:TestClass2
}
