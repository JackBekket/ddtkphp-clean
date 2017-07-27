# DrugDiscovery token project

livenet address: 0xef510209f6Bc5176EAf82998f6eD6556edB51fA5

(https://etherscan.io/address/0xef510209f6bc5176eaf82998f6ed6556edb51fa5)

DrugDiscovery token project

This repository contain a main data about ethereum token of drugdiscovery and a control system on php for it.

Control php system allow to connect ethereum token function with standart functional of any SONM hub.

This module allow to automatically proceed all transaction requests from MySQL throw Ethereum node, check it and write results in database, including updating of balance.

#Setting up your enviroment
1. make sure you have nodejs installed (4.5 or higher. better 6.x)
2. install truffel globally ```npm install -g truffle ``` (may require sudo)
3. install testrpc ```npm install -g ethereumjs-testrpc```


# How to test with testrpc?
1. clone this repository
2. ```npm install``` inside project folder
3. ```testrpc```  in separate terminal
4. ```truffle migrate --reset ``` inside project folder - this will deploy drugdiscovery token contract
5. ```npm run build ``` inside project folder - this will build your frontend.
6. deploy index.html and app.js from build directory on server side and open it
7. open console in browser and press button 'process all' and wait. (and see in console)

# How to test in ethereum testnet?
1. instead of running testrpc run your local ethereum node, like parity and not forget to ```unlock``` your primary account (important!)
2. ```truffle migrate --reset``` and ```npm run build``` in separate terminals, all other operations are the same.

NOTE: if you will start this application from client side only it will throw crossdomain error.

In Ethereum Foundation wallet or Mist browser you can simply add this token from contracts tab section:
Click to 'new token' and input address of it - 0xef510209f6Bc5176EAf82998f6eD6556edB51fA5

If you are use any other ethereum wallet which support interaction with contracts -
you need to go 'watch contracts' section and input address of token - '0xef510209f6Bc5176EAf82998f6eD6556edB51fA5'
and ABI of this contract. ABI could be found in this (https://github.com/sonm-io/drugdiscovery-token/blob/master/ABI-DD) file.
