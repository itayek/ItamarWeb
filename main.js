//console.log("Hello World!");
//setupCounter();

// Array of image paths
const images = [
  "https://raw.githubusercontent.com/dohliam/html5-sample-media/master/Coloured%2C_textured_craft_card_edit.jpg",
  "https://raw.githubusercontent.com/dohliam/html5-sample-media/master/Opening_chess_position_from_black_side.jpg",
  "https://raw.githubusercontent.com/dohliam/html5-sample-media/master/Colouring_pencils.jpg"
  // Add more images as needed
];

let currentIndex = 0;

const imgElement = document.getElementById("counter-image");
const changePictureButton = document.getElementById("change-picture");

// Function to update the image
function updateImage() {
  imgElement.src = images[currentIndex];
}

// Event listener to change the picture on button click
changePictureButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

window.addEventListener("load", () => {
  const introText = document.getElementById("intro-text");
  introText.classList.add("slide-in");
});

const counterImage = document.getElementById("counter-image");

counterImage.addEventListener("click", () => {
  counterImage.classList.toggle("rotate");
});


// function setupCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     document.querySelector("#count").innerHTML = count;
//   }

//   function decrement() {
//     count--;
//     document.querySelector("#count").innerHTML = count;
//   }

//   document.querySelector("#increment").addEventListener("click", increment);
//   document.querySelector("#decrement").addEventListener("click", decrement);
// }
