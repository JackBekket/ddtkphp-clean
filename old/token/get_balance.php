<?php  


include ('db.php');
mysqli_query('SET NAMES UTF8');
//$quote=$_POST['wallet'];
$query='SELECT balance FROM users WHERE wallet="' . $_POST["wallet"].'"';
//echo $query;
$result1=mysqli_query($db,$query);
//$balance=$result1;
//echo $balance;
//$arr= array();

while($myrow = mysqli_fetch_array($result1))
{
	
	 $arr['balance']= $myrow['balance'];
 
}
//echo $balance;



header('Content-type: application/json');
die(json_encode($arr));


?>
