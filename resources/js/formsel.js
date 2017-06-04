$("#formulario1").click(function() {
  document.getElementById("form1").reset();
  document.getElementById("form2").reset();
  document.getElementById("form3").reset();
  $("#form1").toggle();
  $("#form2").hide();
  $("#form3").hide();
});

$("#formulario2").click(function() {
  document.getElementById("form1").reset();
  document.getElementById("form2").reset();
  document.getElementById("form3").reset();
  $("#form2").toggle();
  $("#form1").hide();
  $("#form3").hide();
});

$("#formulario3").click(function() {
  document.getElementById("form1").reset();
  document.getElementById("form2").reset();
  document.getElementById("form3").reset();
  $("#form3").toggle();
  $("#form2").hide();
  $("#form1").hide();
});
