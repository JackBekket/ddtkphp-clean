<?php

 include('db.php');
$query='SELECT wallet,balance FROM users WHERE id=' . $_POST["id"];
$result=mysqli_query($db,$query);

while($myrow = mysqli_fetch_array($result))
{
	
	 $arr['wallet']= $myrow['wallet'];

	 $arr['amount']= $myrow['balance'];  
}

header('Content-type: application/json');
die(json_encode($arr));
//echo json_encode($arr);

?>
