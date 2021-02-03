const container = document.querySelector(`div.container`);
const card = document.querySelector(`div.card`);
const title = document.querySelector(`h1.title`);
const sneaker = document.querySelector(`.sneaker img`);
const info = document.querySelector(`.info`);
const sizes = document.querySelector(`.sizes`);
const purchase = document.querySelector(`.purchase`);

container.addEventListener(`mousemove`, (ev) => {
  let xAxis = (window.innerWidth / 2 - ev.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - ev.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
container.addEventListener(`mouseenter`, (ev) => {
  card.style.transition = `none`;
  title.style.transform = `translateZ(50px)`;
  sneaker.style.transform = `translateZ(80px) rotateZ(-35deg)`;
  info.style.transform = `translateZ(50px)`;
  sizes.style.transform = `translateZ(50px)`;
  purchase.style.transform = `translateZ(50px)`;
});
container.addEventListener(`mouseleave`, (ev) => {
  card.style.transition = `all 0.5s ease`;
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = `translateZ(0px)`;
  sneaker.style.transform = `translateZ(0px) rotateZ(0deg)`;
  info.style.transform = `translateZ(0px)`;
  sizes.style.transform = `translateZ(0px)`;
  purchase.style.transform = `translateZ(0px)`;
});
