/*const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "./assets/image/me3.png") {
    myImage.setAttribute("src", "./assets/image/me4.jpg");
  } else {
    myImage.setAttribute("src", "./assets/image/me3.png");
  }
};
*/

const tile = document.querySelector(".tile");

tile.addEventListener("click", function () {
  tile.classList.toggle("is-flipped");
});