<?php

 include('db.php');
$query='SELECT name,wallet,balance FROM users WHERE cpid=' . $_POST["id"];
$result=mysqli_query($db,$query);


$row=mysqli_fetch_array($result);
 $balance=$row['balance'];
 $amount=$_POST["amount"];
 $wallet=$row['wallet'];
 $username=$row['name'];
 $cpid=$_POST["id"];
 $flag='TRUE';

 if ($balance<$amount) {
   echo"Balance is less then amount";
  // echo $balance;
//   echo $amount;
   # code...
 } else {
   Check();
 }



 function Check()
{
  # code...
  global $balance,$amount,$wallet,$username,$cpid,$flag,$db;
if ($flag=='TRUE'){
  $sql="SELECT COUNT(*) FROM tasks WHERE cpid=".$cpid;
  $result2=mysqli_query($db,$sql);
  $res2=mysqli_fetch_array($result2);
   // Проверяем, есть ли ошибки
      if ($res2[0]<>0)
      {
    //    echo"Ok2";
    //    $r2=print_r($res2);
    //    echo $r2;
    //    echo $result2;
      Proceed();
      }
   else {
    // $sql="UPDATE tasks SET name ='".$username."', cpid='".$cpid."', wallet='".$wallet."', amount='".$amount."'";
    // $sql="INSERT tasks SET name =".$username.", cpid=".$cpid.", wallet=".$wallet.", amount=".$amount;
    $sql="INSERT into tasks SET username ='".$username."', cpid=".$cpid.", wallet='".$wallet."', amount=".$amount;
     $result3=mysqli_query($db,$sql);

       if ($result3=='TRUE'){
      //   echo "Ok3";
      //   echo $result3;
        // echo $res2;
      //   $flag='FALSE';
      //   Check();
      echo "new record added";

       } else {
         echo "Cycle Not Okay";
         echo $sql;
         echo $result3;
         $flag='FALSE';
       }

   }

 }
}


 function Proceed()
{
  global $balance,$amount,$wallet,$username,$cpid,$db;
  $sql="UPDATE tasks SET username ='".$username."', cpid=".$cpid.", wallet='".$wallet."', amount=".$amount." WHERE cpid=".$cpid;
  $result4=mysqli_query($db,$sql);
  if ($result4=='TRUE')
  {
  echo "All procced Okay";
  }
else {
  echo "Ошибка! Task not saved!";
 echo $result4;
}

}



//while($myrow = mysqli_fetch_array($result))
#{
#
#	 $arr['wallet']= $myrow['wallet'];
#
#	 $arr['amount']= $myrow['balance'];
#}




//header('Content-type: application/json');
//die(json_encode($arr));
//echo json_encode($arr);

?>
