var button1Clicked = false;
var button2Clicked = false;
var button3Clicked = false;

var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");

button1.addEventListener("click", function(){ 
    button1Clicked = true;
    button1.remove();

});

button2.addEventListener("click", function(){ 
    button2Clicked = true;
    button2.remove();

});

button3.addEventListener("click", function(){ 
    if (button1Clicked && button2Clicked) {
        button3Clicked = true;
        button3.remove();
    }
});