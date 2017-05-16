var slideIndex1=1;
showSlide1(slideIndex1);

function plusSlides1(n){
	showSlide1(slideIndex1 += n);
}

function currentSlides1(n){
	showSlide1(slideIndex1 = n);
}

function showSlide1(n){
	var i;
	var slides = document.getElementsByClassName("slide1");
	var dots = document.getElementsByClassName("dot1");
	if (n>slides.length) {slideIndex1=1}
	if (n<1) {slideIndex1 = slides.length}

	for(i=0;i<slides.length;i++){
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  	}

	slides[slideIndex1-1].style.display ="block";
	dots[slideIndex1-1].className += " active";
}