# \<web-lit-component>
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

# Customise your webcomponent

Steps to create your own web component based on Lit :
* Choose a name for your component : I will choose VanillaLit (vanilla-lit)
* Clone the repo : ```git clone git@github.com:flatmax/web-lit-component.git```
* Rename the repo : ```mv web-lit-component vanilla-lit```
* Rename some files in the repo :
  * mv web-lit-component.js vanilla-lit.js
  * mv src/WebLitComponent.js src/VanillaLit.js
* Find and replace the component name :
  * Replace "WebLitComponent" for "VanillaLit"
  * Replace "web-lit-component" for "vanilla-lit"

# Customise your OO class
