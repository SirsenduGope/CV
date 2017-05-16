var slideIndex=1;
showSlide(slideIndex);

function plusSlides(n){
	showSlide(slideIndex += n);
}

function currentSlides(n){
	showSlide(slideIndex = n);
}

function showSlide(n){
	var i;
	var slide = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");
	if (n>slide.length) {slideIndex=1}
	if (n<1) {slideIndex = slide.length}

	for(i=0;i<slide.length;i++){
		slide[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  	}

	slide[slideIndex-1].style.display ="block";
	dots[slideIndex-1].className += " active";
}

