var counter = 10;
var intervalId = null;

document.getElementById('start').onclick = function () {
function finish() {
  clearInterval(intervalId);
  document.getElementById("bip").innerHTML = "TERMINE!";	
}
function bip() {
    counter--;
    if(counter == 0) finish();
    else {	
        document.getElementById("bip").innerHTML = counter + " secondes restantes";
    }	
}
function start(){
  intervalId = setInterval(bip, 1000);
}	}