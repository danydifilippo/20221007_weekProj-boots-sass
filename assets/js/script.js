let toggleBtn = document.getElementById('toggle-btn');

toggleBtn.onclick = function () {
  document.body.classList.toggle('theme-dark');
  document.body.classList.toggle('theme-light');
};

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})