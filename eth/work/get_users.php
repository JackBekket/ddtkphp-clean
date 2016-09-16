<?php

 include('db.php');
$query='SELECT wallet,balance FROM users WHERE balance>0';
$result=mysql_query($query,$db);

while($myrow = mysql_fetch_array($result))
{
	
	 echo   $myrow['wallet'];
         echo   $myrow['balance'];
	   
}




?>
