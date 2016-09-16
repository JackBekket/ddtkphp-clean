<?php

// include the class file
require 'ethereum.php';

// create a new object
$ethereum = new Ethereum('127.0.0.1', 8545);

// do your thing
echo $ethereum->net_version();
echo "</br>";
//echo $ethereum->eth_getBalance('0x07a7030633f02ad86d2dbd31ff96e4c7e056c944');
echo "</br>";
echo $accounts[1]=1;
//echo $accounts=$this->eth->eth_accounts();
echo "</br>";
echo "accounts";
echo "</br>";
echo $accountsArr=$ethereum->eth_accounts();
echo "</br>";
print_r($accountsArr);
echo "</br>";
echo "coinbase";
echo "</br>";
echo $coinbase=$ethereum->eth_coinbase();
echo "</br>";
echo "rewardAdress?";
echo "</br>";
//$reward_con=Reward.at(Reward.deployed_address);
//echo $reward_con;
echo "</br>";

echo "Get ABI Definition for Array?";
echo "</br>";
//$sha3hash=$ethereum->web3_sha3('0x07a7030633f02ad86d2dbd31ff96e4c7e056c944');
//print_r($sha3hash);
echo "test";
echo "</br>";
//b7221a6e01b068ac77c55a54ccfd7552d8806d3ca62d72afd9c0964c354c6ee5
$sha3MemberRaw='b7221a6e01b068ac77c55a54ccfd7552d8806d3ca62d72afd9c0964c354c6ee5';
$data_sha3='0xb7221a6e000000000000000000000000000000000000000000000000000000000000000';
echo $sha3MemberRaw;
echo "</br>";
echo $data_sha3;
echo "</br>";
echo "adress of contract";
$contract_address = '0x2fc9a11e3b3ca9849b687dea929f1800609a0fa0';
echo $contract_address;
echo "</br>";

//$call = $ethereum->eth_call($contract_address,'MemberDepo');

//$call = $ethereum->eth_call($data_sha3,$contract_address);
echo $call;
echo "</br>";




//echo $ethereum->eth_call(


//See test/test.php for a complete example.

phpinfo();
?>
