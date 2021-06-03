
var white = document.getElementById("white");
var blue = document.getElementById("blue");
var purple = document.getElementById("purple");
var orange = document.getElementById("orange");
var green = document.getElementById("green");

white.addEventListener("click", function() { 
    alert("Switched to white theme.") 
    var elements = document.getElementsByClassName('p2ZbV'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.background = "#ffffff !important";
	}

    var elements = document.getElementsByClassName('KWIIWd'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.background = "#ffffff !important";
	}

    var elements = document.getElementsByClassName('p2ZbV'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.background = "#ffffff !important";
	}

    var elements = document.getElementsByClassName('p2ZbV'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.background = "#ffffff !important";
	}
});

blue.addEventListener("click", function() { 
    alert("Switched to blue theme.") 
});

purple.addEventListener("click", function() { 
    alert("Switched to purple theme.") 
});

orange.addEventListener("click", function() { 
    alert("Switched to orange theme.") 
});

green.addEventListener("click", function() { 
    alert("Switched to green theme.") 
});


