// Ngăn chặn cuộn trang khi có overlay
const checkOverlay = document.getElementById("checkOverlay");
const body = document.body;

checkOverlay.addEventListener("change", function () {
  if (this.checked) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
});
const imgArr = ["./assets/img/neyma.svg", "./assets/img/neyma3.png"];
const textArr = [
  [
    "Our experienced team will provide you with practical and professional training in a safe and friendly environment. Join us on a spring break adventure through the world of Higher Education.",
    "Miles Esther",
    "Designer",
  ],
  [
    "Experience practical, professional training delivered by a dedicated team within a safe, welcoming setting—embark on your spring break journey into the world of Higher Education today.",
    "Esther Kim",
    "Curriculum Lead",
  ],
];

const textContainer = document.querySelector(".people-content-text-item");
const textContainerMobile = document.querySelector(
  ".people-banner-content-mobile-text"
);
const imgContainer = document.querySelector(".people-banner-img-item");
const authorContainer = document.querySelector(".people-content-info-1-author");
const authorContainerMobile = document.querySelector(
  ".people-banner-content-mobile-author-name"
);
const jobContainer = document.querySelector(".people-content-info-1-job");
const jobContainerMobile = document.querySelector(
  ".people-banner-content-mobile-author-job"
);
const btnNext = document.querySelector(".banner-right");
const btnPrev = document.querySelector(".banner-left");
let currentImg = 0;
imgContainer.src = imgArr[currentImg];
textContainer.innerHTML = textArr[currentImg];
function addText(currentImg) {
  textContainer.innerHTML = textArr[currentImg][0];
  authorContainer.innerHTML = textArr[currentImg][1];
  jobContainer.innerHTML = textArr[currentImg][2];
  textContainerMobile.innerHTML = textArr[currentImg][0];
  authorContainerMobile.innerHTML = textArr[currentImg][1];
  jobContainerMobile.innerHTML = textArr[currentImg][2];
}
btnNext.addEventListener("click", () => {
  console.log("next");
  imgContainer.style.opacity = 1;
  imgContainer.style.transform = "translateX(-50%)";
  imgContainer.style.transition =
    "transform 0.2s ease-in-out, opacity 0.2s ease-in-out";
  setTimeout(() => {
    imgContainer.style.opacity = 0;
    imgContainer.style.transform = "translateX(calc(-50% + 50px))";

    setTimeout(() => {
      imgContainer.style.transform = "translateX(calc(-50% + 0px))";
      currentImg = (currentImg - 1 + imgArr.length) % imgArr.length;
      imgContainer.src = imgArr[currentImg];
      imgContainer.style.opacity = 0;
      imgContainer.style.transform = "translateX(calc(-50% -50px))";
      addText(currentImg);
      setTimeout(() => {
        imgContainer.style.opacity = 1;
        imgContainer.style.transform = "translateX(calc(-50% + 0px))";
      }, 20);
    }, 200);
  }, 100);
});

btnPrev.addEventListener(
  "click",
  () => {
    console.log("prev");
    imgContainer.style.opacity = 1;
    imgContainer.style.transform = "translateX(-50%)";
    imgContainer.style.transition =
      "transform 0.2s ease-in-out, opacity 0.2s ease-in-out";

    setTimeout(() => {
      imgContainer.style.opacity = 0;
      imgContainer.style.transform = "translateX(calc(-50% -  50px))";
      setTimeout(() => {
        imgContainer.style.transform = "translateX(calc(-50% + 0px))";
        currentImg = (currentImg - 1 + imgArr.length) % imgArr.length;
        imgContainer.src = imgArr[currentImg];
        imgContainer.style.opacity = 0;
        imgContainer.style.transform = "translateX(calc(-50% + 50px))";
        addText(currentImg);
        setTimeout(() => {
          imgContainer.style.opacity = 1;
          imgContainer.style.transform = "translateX(calc(-50% + 0px))";
        }, 20);
      }, 200);
    }, 100);
  },
  500
);

const activeText = document.querySelector(".people-banner-img");
const bannerText = document.querySelector(".people-banner-content-mobile");
activeText.addEventListener("click", () => {
  bannerText.classList.toggle("active");
});
