
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}




var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.cssText = "display:none; width:100%; transition:2s;"; 
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.cssText = "display:block; width:100%; ";  
  setTimeout(carousel, 10000 ); // Change image every 2 seconds
 
  
}

var myIndex_m = 0;
carousel_m();

function carousel_m() {
  var i;
  var x = document.getElementsByClassName("mySlides_m");
  for (i = 0; i < x.length; i++) {
    x[i].style.cssText = "display:none; width:100%;"; 
  }
  myIndex_m++;
  if (myIndex_m > x.length) {myIndex_m = 1}    
  x[myIndex_m-1].style.cssText = "display:block; width:100%; ";  
  setTimeout(carousel_m, 10000 ); // Change image every 2 seconds
 
  
}
