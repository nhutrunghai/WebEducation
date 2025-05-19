// SignIn
const closeToast = document.querySelector(".close");
const Toast = document.querySelector(".toast");

closeToast.addEventListener("click", () => {
  Toast.style = "display : none";
});
const emailInput = document.querySelector(".Email");
const passwordInput = document.querySelector(".Password");
const signInButton = document.querySelector(".btn-signt");
const printToast = (status, mess) => {
  const titleMessTitle = document.querySelector(".toast-message-text-title");
  const toastMessText = document.querySelector(".toast-message-text-content");
  const toastCol = document.querySelector(".toast-col");
  const toatIcon = document.querySelector(".toast-message-img");
  if (status == "susscess") {
    Toast.style = "display: block";
    setTimeout(() => {
      Toast.style = "display: none";
    }, 5000);
  } else if (status == "error") {
    titleMessTitle.innerHTML = "Error";
    toastMessText.innerHTML = mess;
    toastCol.style = "background-color: #FF355B";
    Toast.style = "display: block";
    toatIcon.src = "./assets/img/error.png";
    setTimeout(() => {
      Toast.style = "display: none";
    }, 5000);
  }
};
console.log(localStorage);
signInButton.onclick = () => {
  if (emailInput.value == "") {
    printToast("error", "Không được bỏ trống Email");
    return;
  }
  if (passwordInput.value == "") {
    printToast("error", "Không được bỏ trống PassWord");
    return;
  }
  if (localStorage.getItem(emailInput.value)) {
    data = JSON.parse(localStorage.getItem(emailInput.value));
    console.log(passwordInput.value);
    if (passwordInput.value != data["pass"]) {
      printToast("error", "Tài Khoản Hoặc Mật Khẩu Không Đúng");
      return;
    }
    printToast("susscess", "Đăng nhập thành công");
    setTimeout(() => {
      window.location.href = "/index.html";
    }, 3000);
  } else {
    printToast("error", "Tài Khoản Hoặc Mật Khẩu Không Đúng");
    return;
  }
};
