

/*function change(color){
  c1=color;
document.getElementById("back").style.backgroundColor= c1;}
var bodyy=document.getElementByClassName("sec1");
var isRed=false;
setInterval(function(){
  if(isRed){
    body.style.background=boddy;
  }else {
    body.style.background="red";
  }
isRed = !isRed;
},1000);
-------------------------------------
var myVar = setInterval(function(){ setColor() }, 600);

function setColor() {
  var x1 = document.body.style.background-image;
  x1.body.style.background-image = x1.body.style.background-image == url("q1.jpeg") ?
   x1 : url("q1.jpeg");
}------------------------------*/
function win(){
  var myWin=window.open("index2.html","_blank",width="200",height="100",);
}
function win2(){
  var myWin2=window.open("index3.html","_blank",);
}
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    //for (i = 0; i < dots.length; i++) {
    //    dots[i].className = dots[i].className.replace(" active", "");
  //  }
    slides[slideIndex-1].style.display = "block";
  //  dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
function search(){
document.getElementById("tx").style.display='block';
}
