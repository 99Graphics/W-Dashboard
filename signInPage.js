let passSeeBtn = document.getElementById("paas-eye");
let passInput = document.getElementById("password-input");
let signBtn = document.getElementById("sign-in");
const emailInput = document.getElementById("Email-2");
const signInPara = document.querySelector(".sign-in-para-purple");
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

passSeeBtn.addEventListener("click", typePass);

signBtn.addEventListener("click", (e) => {
  signBtn.type = "button"

  if (emailInput.value === "") {
    console.log("empty");
  } else if (emailInput.value.match(validRegex)) {
    console.log("key ");
    if (passInput.value === "") {
    } else {
      shakeBtn()
    }
    if (passInput.value === "walliopass") {
      signBtn.type = "submit"
      passInput.type = "text";
      document.querySelector(".sign-in-input-hide").classList.remove("blur")
      localStorage.setItem("signIn", true)
    } else {
      shakeBtn()
    }
  } else {
    shakeBtn()
  }
});

function shakeBtn() {
  signBtn.classList.add("shake")
}
function typePass() {
  if (passInput.type === "password") {
    passInput.type = "text";
    passSeeBtn.childNodes[0].style.display = "none";
    passSeeBtn.childNodes[1].style.display = "block";
  } else {
    passInput.type = "password";
    passSeeBtn.childNodes[1].style.display = "none";
    passSeeBtn.childNodes[0].style.display = "block";
  }
}