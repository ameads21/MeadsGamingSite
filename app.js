let divs = Array.from(document.querySelectorAll(".gameDisplay"));
let background_img = [
  "BackgroundImages/img1.PNG",
  "BackgroundImages/img2.PNG",
  "BackgroundImages/img3.PNG",
  "BackgroundImages/img4.PNG",
  "BackgroundImages/img5.PNG",
];
console.log(divs);

for (let i = 0; i < divs.length; i++) {
  divs[i].style.backgroundImage = `url('${background_img[i]}')`;
}
