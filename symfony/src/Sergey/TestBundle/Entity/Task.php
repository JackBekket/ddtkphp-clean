<?php
//

//c
namespace Sergey\TestBundle\Entity;

class Task{

// public $task;

 protected $opr;

 protected $type;

protected $f1;

// public $f1;

protected $f2;

// protected $opr

 protected $res;

public function getOpr()
{
  return $this->opr;
}

public function setOpr()
{
  return $this->opr= $opr;
}

public function getF1()
{
  return $this->f1;
}

public function setF1()
{
  return $this->f1=$f1;
}

public function getF2()
{
  return $this->f2;
}

public function setF2()
{
  return $this->f2=$f2;
}

public function getRes()
{
  return $this->res;
}

public function setRes()
{
  return $this->res=$res;
}

public static function getTypes()
   {
       return [
           '*' => 'Умножить',
           '/' => 'Разделить',
           '+' => 'Сложить',
           '-' => 'Вычесть'
       ];
   }

   public static function getTypeValues()
   {
       return array_keys(self::getTypes());
   }

   public function getType()
   {
     return $this->type;
   }

   public function setType()
   {
     return $this->type=$type;
   }



}


 ?>
