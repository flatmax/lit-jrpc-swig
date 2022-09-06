# lit-jrpc-node : lit-jrpc to jrpc-node
Basic microapp infrastructure for Lit web components which interface other web-components or nodejs using [jrpc-oo](https://github.com/flatmax/jrpc-oo).

This infrastructure can be easily cloned and updated for your own microapp which allows you to call objects using JRPC2 over the network between browsers, node or both.

# Local Demo with nodjes and `web-dev-server`

We will use secure websockets (although you don't have to), so first generate the certificate :
```bash
./jrpc-node.genCert.sh
```

Install the requirements :

```bash
npm i
```

## Start jrpc-node

Start the nodejs JRPC-OO side :

```
./jrpc-node.node.js
```

## Start lit-jrpc

Start the web dev server :

```bash
npm start
```

Note : for the first time, look at the console, as you have to clear the browser to use the private cert in this example due to the browser's "privacy error".

# Customise this microapp

We will clone and take ownership of the webcomponent and node class. We will use vanilla in place of lit.
* First clone the repo : ```git clone https://github.com/flatmax/lit-jrpc-node.git```
* Rename the repo : ```mv lit-jrpc-node vanilla-jrpc-node```

## Rename the webcomponent

Steps to create your own web component :
* Choose a name for your component : I will choose VanillaJRPC (vanilla-jrpc)
* Rename some files in the repo :
  * mv lit-jrpc.js vanilla-jrpc.js
  * mv src/LitJRPC.js src/VanillaJRPC.js
* Find and replace the component name :
  * Replace "LitJRPC" for "VanillaJRPC"
  * Replace "lit-jrpc" for "vanilla-jrpc"

## Customise your OO class

* Choose a name for your class : I will choose VanillaNode
* Rename the class file :
  * mv TestClass.js VanillaNode.js
* Find and replace the class name :
  * Replace "TestClass" for "VanillaNode"
