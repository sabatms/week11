let clickCount = 0;

document.getElementById("load-button").addEventListener("click", function() {
const status = document.getElementById("status");
const dogImage = document.getElementById("dog-image");
const randomMessage = document.getElementById("random-message");
const clickCounter = document.getElementById("click-counter");
const alertPopup = document.getElementById("alert-popup");
const errorSound = document.getElementById("error-sound");

clickCount++;

if (clickCount <= 5) {
status.textContent = "Loading..."; 

fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(data => {
dogImage.src = data.message;
dogImage.style.display = "block";
status.textContent = ""; 
})
.catch(() => {
status.textContent = "Failed to load dog image.";
});

clickCounter.textContent = `Click Count: ${clickCount}`;

if (clickCount === 3) {
randomMessage.textContent = "Welcome to the dog lovers club!";
} else if (clickCount === 5) {
randomMessage.textContent = "That's enough! You've seen enough dogs.";
} else {
randomMessage.textContent = "";
}

} else if (clickCount === 6) {
randomMessage.textContent = "You are now a dog yourself!";

alertPopup.style.display = "block";
errorSound.play();


document.body.classList.add("show-alert");

setTimeout(() => {
alertPopup.style.display = "none";
document.body.classList.remove("show-alert");
}, 3000);
}
});
