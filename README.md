# Hub token-manager
DrugDiscovery token project

This repository contain a main data about ethereum token of drugdiscovery and a control system on php for it.

Control php system allow to connect ethereum token function with standart functional of any SONM hub.

This module allow to automatically proceed all transaction requests from MySQL throw Ethereum node, check it and write results in database, including updating of balance.

# How to test?
1. clone this repository
2. ```npm install```
3. ```testrpc``` or start any working node
4. ```truffle migrate --reset ```
5. ```npm run build ```
