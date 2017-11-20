<!-- <!DOCTYPE html> -->
<html>
<head>

<title>Conjugationer</title>
<link href = "style.css" rel="stylesheet">
  <link href ="https://fonts.google.com/?selection.family=Roboto" rel="stylesheet">
  <script src = "main.js"></script>

</head>

<body>

  <h1>Japanese</h1>
  <div id = "timer">
    <span id = "minutes">25 </span>
    <span id = "middle">:</span>
    <span id = "seconds">00 </span>
  </div>

  <div id = "buttons">
    <button id = "start" onclick = "loadXMLDoc()">START </button>
    <button id = "stop" onclick = "stopGame()">STOP</button>
  </div>

  <div id = "multi_part_question">
    <p id = "verb">Sugaru-ipsum</p>
    <p id = "form">-masu-ipsum</p>
    <p id = "definition">lean on-ipsum</p>
  </div>



  <form id = "form_option" name = "form_option" action = "">
  <select name = "form" onchange ="chooseForm(this.value)">
    <option value = ""> Select a form: </option>
    <option value = "2-5">non-past </option>
    <option value = "6-9">plain past </option>
    <option value = "10-14">te form </option>
    <option value = "15-15">i form </option>
    <option value = "16-27">ifs </option>
    <option value = "28-31">potential </option>
    <option value = "32-35">passive </option>
    <option value = "36-42">causative </option>
    <option value = "43-46">causative passive </option>
    <option value = "47-50">volitional </option>
    <option value = "51-54">conjectural </option>
    <option value = "55-58">alternative </option>
    <option value = "59-62">imperative </option>
    <option value = "63-66">honorific </option>


    <input id = "answer" type = "text" name = 'answer1'>

    <input id = "button" type = "button" value = "Check!" onclick = "check();">
   </form>

<div id = "after_submit">
  <p id = "number_correct"></p>
</div>


<!-- <a href="#" onclick="this.style.backgroundColor='#990000'">Paint it red</a>

<a href="#" onclick="this.style.backgroundColor='#009900';this.style.color='#FFFFFF';">Paint it green</a> -->

  </html>


</body>
</head>
