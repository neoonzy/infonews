const carousel = document.querySelector('.carousel-container');
const imgs = document.querySelectorAll('.carousel-container img');

let counter = 0;
const interval = setInterval(() => {
  counter++;
  carousel.style.transform = `translateX(-${counter * 200}px)`;

  if (counter === imgs.length - 7) {
    setTimeout(() => {
      counter = -7;
      carousel.style.transform = `translateX(0)`;
    }, 2000);
  }
}, 2000);

startCarousel();

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  
}
