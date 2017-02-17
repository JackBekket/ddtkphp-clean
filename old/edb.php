<?php

include('db.php');
//echo "test1";
$query="SELECT balance FROM users WHERE id = '2'";
$result2=mysqli_query($db,$query);
while($myrow = mysqli_fetch_array($result2))
{
	
	 echo $myrow['balance'];
	   
}

?>
