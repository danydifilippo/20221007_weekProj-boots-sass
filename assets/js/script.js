function playVideo (n) {
  play = document.getElementById(n);
  console.log(play)
  play.classList.remove('d-none');
}


let toggleBtn = document.getElementById('toggle-btn');

toggleBtn.onclick = function () {
  document.body.classList.toggle('theme-dark');
  document.body.classList.toggle('theme-light');
};

let myCarousel = document.querySelector('#myCarousel')
let carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})