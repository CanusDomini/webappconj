var bigTime = 1499

var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

var start = document.getElementById(
start);
start.addEventListener("click", startGame, false)

var stop = document.getElementById(stop);
stop.addEventListener("click", stopGame, false)

function counter () {


}
function check(){

  var question1 = document.quiz.answer1.value;
  var correct = 0;

  if (answer1 == "fdkal; lorem ipsum") {
    correct++;
  }
  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("number_correct").innerHTML = "You got" + correct + "correct" ;
}

function showVocab(form) {
  var xhttp;
  if (form == "") {

    document.getElementById("question").innerHTML = "";
    return;

  }
}

function startGame (form_option) {

  var verb = document.getElementById("verb");
  var form = document.getElementById("form");
  var definition = document.getElementById("definition");
  form.innerHTML = "hat";
}

function loadXMLDoc() {

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "JLPT4ConjugationDB.xml", true);
  xmlhttp.send();
}

function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table = "<tr><th>Hiragana</th></tr><tr><th>Definition</th></tr>";
  var x = xmlDoc.getElementsByTagName("row");
  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" + x[i].getElementsByTagName("Hiragana")[0].childNodes[0].nodeValue + "</td><td>" + x[i].getElementsByTagName("Definition")[0].childNodes[0].nodeValue + "</td></tr>";
  }
  document.getElementById("multi_part_question").innerHTML = table;
}

var form_option = document.getElementById("form_option");

startGame(form_option);
