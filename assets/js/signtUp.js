// SignUp
const closeToast = document.querySelector(".close");
const Toast = document.querySelector(".toast");

closeToast.addEventListener("click", () => {
  Toast.style = "display : none";
});
const NameInput = document.querySelector(".Name");
const emailInput = document.querySelector(".Email");
const passwordInput = document.querySelector(".Password");
const signUpButton = document.querySelector(".btn-signt");
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
signUpButton.onclick = () => {
  if (NameInput.value == "") {
    printToast("error", "Không được bỏ trống Tên");
    return;
  }
  if (emailInput.value == "") {
    printToast("error", "Không được bỏ trống Email");
    return;
  }
  if (passwordInput.value == "") {
    printToast("error", "Không được bỏ trống PassWord");
    return;
  }
  const dataname = NameInput.value;
  const dataemail = emailInput.value;
  const datapass = passwordInput.value;
  user = { name: dataname, pass: datapass };
  localStorage.setItem(`${dataemail}`, JSON.stringify(user));
  printToast("susscess", "Đăng ký thành công");
  setTimeout(() => {
    window.location.href = "/signIn.html";
  }, 3000);
};
