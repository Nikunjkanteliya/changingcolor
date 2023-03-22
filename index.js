let imgs = document.getElementById("img1");
let bodys = document.getElementById("div1");

let fun2 = () => {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  return [r, g, b];
};

let fun = () => {
  bodys.style.backgroundColor = `rgb(${fun2()})`;
};

imgs.addEventListener("click", fun);
