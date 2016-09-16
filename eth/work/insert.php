<?php
 
    include ('db.php');
mysqli_query('SET NAMES UTF8');
$query="SELECT balance FROM users WHERE wallet" . $_POST['wallet'];
$result1=mysqli_query($db,$query);
$balance=$result1;

//вычисляем баланс после выплаты
$change=$_POST['amount'];

//отнимаем выплаченную сумму
$new_balance=$balance-$change;


//проверяем очки
$query="SELECT points FROM users WHERE wallet" . $_POST['wallet'];
$result2=mysqli_query($db,$query);
$points=$result2;

//правило перевода
$rule='1000';

$points=$points/$rule;

$balance=$points;

//если кол-во очков не изменилось, то баланс остается прежним, в противном случае перерассчет
$change=$balance-$new_balance;



//сохраняем выплаченные средства
$sql="UPDATE users SET balance=".$change." WHERE wallet=".$_POST['wallet'];
$result3=mysqli_query($db,$sql);
 // Проверяем, есть ли ошибки
    if ($result3=='TRUE')
    {
    echo "Баланс Обновлен";
    }
 else {
    echo "Ошибка! История не сохранилась";
	echo $result3;
 }









?>
