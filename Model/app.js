// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const heroBtn = document.querySelector(".modal-btn");
const modelOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

heroBtn.addEventListener("click", function () {
  //   modelOverlay.classList.add("open-modal");
  modelOverlay.classList.toggle("open-modal");
});
closeBtn.addEventListener("click", function () {
  modelOverlay.classList.remove("open-modal");
  //   modelOverlay.classList.toggle("open-modal");
});
