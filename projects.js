var myIndex1 = 0;
var myIndex2 = 0;
carousel();

function carousel() {
  var i;
  var x1 = document.getElementsByClassName("mySlides");
  var x2 = document.getElementsByClassName("mySlidesport");
  
  for (i = 0; i < x1.length; i++) {
    x1[i].style.display = "none";  
  }
  
  for (i = 0; i < x2.length; i++) {
    x2[i].style.display = "none";  
  }
  
  myIndex1++;
  myIndex2++;
  
  if (myIndex1 > x1.length) {
    myIndex1 = 1;
  }
  
  if (myIndex2 > x2.length) {
    myIndex2 = 1;
  }
  
  x1[myIndex1 - 1].style.display = "block";  
  x2[myIndex2 - 1].style.display = "block";  
  
  setTimeout(carousel, 1500); // Change image every 1.5 seconds
}
