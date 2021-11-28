var counter = 1;
var topLeft = document.getElementsById("1").value;
var topMid = document.getElementsById("2").value;
var topRight = document.getElementsById("3").value;
var midLeft = document.getElementsById("4").value;
var midMid = document.getElementsById("5").value;
var midRight = document.getElementsById("6").value;
var botLeft = document.getElementsById("7").value;
var botMid = document.getElementsById("8").value;
var botRight = document.getElementsById("9").value;
// IMPORTANT supposed to recognize a win but isn't work.
if (topLeft == "X" && topMid == "X" && topRight == "X") {
  document.getElementById("results").innerHTML = "Player X wins!!!";
  window.alert("Player X wins!!!");
}
// function for marking an X or O when clicking the boxes.
function myfnc1() {
  if (counter == 1) {
    document.getElementById("1").innerHTML = "X";
    document.getElementById("div1").onclick = null;
    counter = 2;
  } else {
    document.getElementById("1").innerHTML = "O";
    document.getElementById("div1").onclick = null;
    counter = 1;
  }
}

function myfnc2() {
  if (counter == 1) {
    document.getElementById("2").innerHTML = "X";
    document.getElementById("div2").onclick = null;
    counter = 2;
  } else {
    document.getElementById("2").innerHTML = "O";
    document.getElementById("div2").onclick = null;
    counter = 1;
  }
}

function myfnc3() {
  if (counter == 1) {
    document.getElementById("3").innerHTML = "X";
    document.getElementById("div3").onclick = null;
    counter = 2;
  } else {
    document.getElementById("3").innerHTML = "O";
    document.getElementById("div3").onclick = null;
    counter = 1;
  }
}

function myfnc4() {
  if (counter == 1) {
    document.getElementById("4").innerHTML = "X";
    document.getElementById("div4").onclick = null;
    counter = 2;
  } else {
    document.getElementById("4").innerHTML = "O";
    document.getElementById("div4").onclick = null;
    counter = 1;
  }
}

function myfnc5() {
  if (counter == 1) {
    document.getElementById("5").innerHTML = "X";
    document.getElementById("div5").onclick = null;
    counter = 2;
  } else {
    document.getElementById("5").innerHTML = "O";
    document.getElementById("div5").onclick = null;
    counter = 1;
  }
}

function myfnc6() {
  if (counter == 1) {
    document.getElementById("6").innerHTML = "X";
    document.getElementById("div6").onclick = null;
    counter = 2;
  } else {
    document.getElementById("6").innerHTML = "O";
    document.getElementById("div6").onclick = null;
    counter = 1;
  }
}

function myfnc7() {
  if (counter == 1) {
    document.getElementById("7").innerHTML = "X";
    document.getElementById("div7").onclick = null;
    counter = 2;
  } else {
    document.getElementById("7").innerHTML = "O";
    document.getElementById("div7").onclick = null;
    counter = 1;
  }
}

function myfnc8() {
  if (counter == 1) {
    document.getElementById("8").innerHTML = "X";
    document.getElementById("div8").onclick = null;
    counter = 2;
  } else {
    document.getElementById("8").innerHTML = "O";
    document.getElementById("div8").onclick = null;
    counter = 1;
  }
}

function myfnc9() {
  if (counter == 1) {
    document.getElementById("9").innerHTML = "X";
    document.getElementById("div9").onclick = null;
    counter = 2;
  } else {
    document.getElementById("9").innerHTML = "O";
    document.getElementById("div9").onclick = null;
    counter = 1;
  }
}
