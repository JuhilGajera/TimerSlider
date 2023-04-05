let timeLeft = 5;

function countdown() {
  timeLeft--;
  console.log(timeLeft);
  document.getElementById("seconds").innerHTML = String(timeLeft);
  if (timeLeft === 0) {
    timeLeft = 5;
  }
}

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  let slideIndex = 1; // Initialize slideIndex to 1

  setInterval(() => {
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }, 5000);

  setInterval(countdown, 1000);
}

showSlides();
