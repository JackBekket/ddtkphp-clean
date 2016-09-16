<?php

 include('db.php');
$query='SELECT id FROM users WHERE wallet != null';
$result=mysql_query($query,$db);

while($myrow = mysql_fetch_array($result))
{
	
	 print   $myrow;
	   
}



?>
