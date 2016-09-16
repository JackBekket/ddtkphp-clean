<?php  


include ('db.php');
mysql_query('SET NAMES UTF8');
$query="SELECT balance FROM users WHERE wallet" . $_POST['wallet'];
$result1=mysql_query($query,$db);
$balance=$result1;
echo $balance;



?>
