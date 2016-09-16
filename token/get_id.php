<?php

 include('db.php');
$query="SELECT COUNT(*) FROM tasks";
$result=mysqli_query($db,$query);

$myrow=mysqli_fetch_array($result);
$arr=$myrow[0];


//while($myrow = mysqli_fetch_array($result))
//{

//	 $arr[]= $myrow['id'];

//}

header('Content-type: application/json');
die(json_encode($arr));
//echo json_encode($arr);
//echo $arr;

?>
