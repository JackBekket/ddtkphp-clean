<?php

 include('db.php');
$query='SELECT id FROM users WHERE wallet != "null"';
$result=mysqli_query($db,$query);

while($myrow = mysqli_fetch_array($result))
{
	
	 $arr[]= $myrow['id'];
	   
}

header('Content-type: application/json');
die(json_encode($arr));
//echo json_encode($arr);
//echo $arr;

?>
