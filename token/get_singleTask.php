<?php

 include('db.php');
$query="SELECT cpid,wallet,amount FROM tasks WHERE id=" . $_POST['id'];
//echo $query;
$result=mysqli_query($db,$query);
$arr['err']=0;
while($myrow = mysqli_fetch_array($result))
{

	 $arr['wallet']= $myrow['wallet'];

	 $arr['amount']= $myrow['amount'];

   $arr['cpid']= $myrow['cpid'];


}
print_r($arr);
$query="SELECT balance FROM users WHERE cpid=" . $arr['cpid'];
$result=mysqli_query($db,$query);

while($myrow = mysqli_fetch_array($result))
{

	$arr['balance']=$myrow['balance'];


}

if ($arr['amount']>$arr['balance']) {

  $arr['err']='error - amount>balance!';
  echo "error - amount>balance!";
}
if ($arr['amount']==0){

  $arr['err']='error - amount=0!';
}

header('Content-type: application/json');
die(json_encode($arr));
//echo json_encode($arr);

?>
