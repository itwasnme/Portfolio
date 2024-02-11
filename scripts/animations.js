//FADE IN
const fadeIns = document.querySelectorAll(".about_Me");
const fadeIns1 = document.querySelectorAll(".projects a");
const fadeIns2 = document.querySelectorAll(".project");

const combinedFadeIns = [...fadeIns, ...fadeIns1, ...fadeIns2];

window.addEventListener("scroll", () => {
  combinedFadeIns.forEach((fadeIn) => {
    const rect = fadeIn.getBoundingClientRect();
    const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isInViewport) {
      fadeIn.classList.add("in-viewport");
    } else {
      fadeIn.classList.remove("in-viewport");
    }
  });
});

//NAVBAR
let lastScrollPosition = window.scrollY;
const header = document.querySelector("header");
const toggleBtn = document.querySelectorAll(".toggle_btn")[0];

const scrollThreshold = 770;

function handleScroll() {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition < lastScrollPosition) {
    header.classList.remove("hidden"); // Show the header when scrolling up
  } else if (currentScrollPosition > scrollThreshold && !toggleBtn.checked) {
    header.classList.add("hidden"); // Hide the header when scrolling down
  }

  lastScrollPosition = currentScrollPosition;
}
window.addEventListener("scroll", handleScroll);

//Popup images
document.querySelectorAll(".media-element img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-img").style.display = "block";
    document.querySelector(".popup-img img").src = image.getAttribute("src");
  };
});

document.querySelector(".popup-img span").onclick = () => {
  document.querySelector(".popup-img").style.display = "none";
};

//Information images
document.querySelectorAll(".information span").forEach((span, index) => {
  span.onclick = () => {
    document.querySelector(".popup-img").style.display = "block";
    switch (index) {
      case 0:
        document.querySelector(".popup-img img").src = "assets/me/hiking.PNG";
        break;
      case 1:
        document.querySelector(".popup-img img").src = "assets/me/kayak.PNG";
        break;
      case 2:
        document.querySelector(".popup-img img").src = "assets/me/camping.PNG";
        break;
      default:
        document.querySelector(".popup-img img").src = "assets/me/me.jpg";
    }
  };
});
