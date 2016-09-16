<?php

/**
 *
 */
class Form
{

var $opt=array();
var $processor;
var $submit= "exec";
var $fields=array();
var $Nfields=0;

//private Nfields=0;

  function __construct($processor, $submit)
  {
    # code...
    $this->processor= $processor;
    $this->submit= $submit;
  }

function displayForm()
{
echo "<div class='section'>";
echo "<h2>Введите данные</h2></br>";
echo "<input type='text' id='{$this->fields[0]}' value='2'/></br>";
echo "<select required id='{$this->fields[1]}'><option value='1'>*</option><option value='2'>/</option>";
echo "<option value='3'>+</option><option value='4'>-</option></select></br>";
echo "<input type='text' id='{$this->fields[2]}' value='3' /></br>";
echo "<button id='{$this->fields[3]}'>{$this->submit}</button>";
echo "<span id='{$this->fields[4]}'></span></br>";
}

public function addFieldName($name)
{

  $this->fields[$this->Nfields]=$name;
  $this->Nfields=$this->Nfields + 1;
  # code...
}





}





















 ?>
