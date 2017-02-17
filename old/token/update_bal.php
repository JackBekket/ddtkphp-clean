<?php

   include ('db.php');
mysql_query('SET NAMES UTF8');
$query="SELECT points FROM users WHERE wallet" . $_POST['wallet'];
$result1=mysql_query($query,$db);
$points=$result1;

$rule='1000';

$points=$points/$rule;

$balance=$points;

$change=$balance-$new_balance;









?>
