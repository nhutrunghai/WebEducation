// Ngăn chặn quận trang khi có overlay
const checkOverlay = document.getElementById("checkOverlay");
const body = document.body;

checkOverlay.addEventListener("change", function () {
  if (this.checked) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
});
