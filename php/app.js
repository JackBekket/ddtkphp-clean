$(document).ready(function () {

console.log("test");

$("#f1").html(3);
$("#res").html("Whoa!");
//Warmig up UI
$("#exec").click(function() {
    var f1 = $("#f1").val();
    var f2 = $("#f2").val();
    var opt = $("#opt");
    Calc(f1,f2,opt);
    console.log("test click");
  });

function Calc()
{

  console.log(f1);
  console.log(f2);
  console.log(opt);

  $.post(
  "/process.php",
  {
      f1 : f1,
      f2 : f2,
      opr : opr
  },
  onAjaxSuccess

  );
  function onAjaxSuccess (data) {

      var r=data;
      console.log(data);
      result=r.result;
      console.log(result);
  }
}

});
