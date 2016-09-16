<?php

require_once("class.php");

echo "test";
echo "
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
  <title>Test Alphabetics</title>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,300' rel='stylesheet' type='text/css'>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .section {
      margin: 20px;
    }
    button {
      padding: 5px 16px;
      border-radius: 4px;
    }
    button#changeQuota { background-color: yellow; }
    button#transfer { }

    button#buyTicket { background-color: #98fb98; }
    button#refundTicket { background-color: pink; }


  </style>
  <script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js'></script>


<link href='./app.css' rel='stylesheet' type='text/css'>

<script type='text/javascript' src='./app.js'></script>







</head>
<body>
";

$task = new Form("process.php", "Отправить данные");
$task->addFieldName("f1");
$task->addFieldName("opt");
$task->addFieldName("f2");
$task->addFieldName("exec");
$task->addFieldName("res");
$task->displayForm();

 //echo "<script type='text/javascript' src='./app.js'></script>";



echo "
</body>
</html>
";
?>
