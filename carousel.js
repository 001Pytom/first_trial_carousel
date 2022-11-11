let currentSlide = 1;
const slides = document.getElementsByClassName("slide");
const totalSlide = slides.length;

function show() {
  const slide = document.getElementById("c" + currentSlide);
  slide.style.display = "block";
}

function displayMe() {
  document.getElementById("displayme").style.display = "flex";
  document.getElementById("displayme2").style.display = "flex";
}

function nextSlide() {
  var nextSlideCount = currentSlide + 1;
  if (nextSlideCount <= 6) {
    document.getElementById("c" + currentSlide).style.display = "none";
    document.getElementById(`c${nextSlideCount}`).style.display = "block";
    currentSlide = nextSlideCount;
  } else {
    return;
  }
}

function previousSlide() {
  var prevSlideCount = currentSlide - 1;
  document.getElementById("c" + currentSlide).style.display = "none";
  document.getElementById(`c${prevSlideCount}`).style.display = "block";
  currentSlide = prevSlideCount;
}
