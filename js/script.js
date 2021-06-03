var white = document.getElementById("white");
var blue = document.getElementById("blue");
var purple = document.getElementById("purple");
var orange = document.getElementById("orange");
var green = document.getElementById("green");

var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];


white.addEventListener("click", function () { //when white button is clicked
  alert("Switched to white theme.");
  var elements = document.getElementsByClassName("p2ZbV"); // get all elements
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.background = "#ffffff !important";
  }

  var elements = document.getElementsByClassName("KWIIWd"); // get all elements
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.background = "#ffffff !important";
  }

  var elements = document.getElementsByClassName("xPh1xb P9KVBf"); // get all elements
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.background = "#55585a !important";
  }

  var elements = document.getElementsByClassName("zWfAib:not(zTETae):not(.n9oEIb)>.Zf0RDc"); // get all elements
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.background = "#808080 !important";
  }


  //GOOD NOW WE HAVE TO FIND A WAY TO STORE THE DATA

//   localStorage.name = 
});

blue.addEventListener("click", function () {
  alert("Switched to blue theme.");
});

purple.addEventListener("click", function () {
  alert("Switched to purple theme.");
});

orange.addEventListener("click", function () {
  alert("Switched to orange theme.");
});

green.addEventListener("click", function () {
  alert("Switched to green theme.");
});
