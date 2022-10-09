function playVideo (n) {
  let div = document.createElement(`<video src="./assets/img/${n}.mp4" class="d-block"></video>`)
  console.log(div)
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