signInFalse();
const sendCurrencyBtn = document.querySelectorAll(".send-pay-btn");
const depositDateInput = document.querySelector(".deposit-date-input");
const depositCurrencyTxt = document.querySelectorAll(".deposit-pay-with-currency");
const depositBtnAmt = document.querySelectorAll(".deposit-top-input-btn");
const depositDropDown = document.querySelectorAll(".deposit-to-select");
const depositOptions = document.querySelectorAll(".deposit-options");
const depositMainAmtInput = document.querySelector(".deposit-input-input");
const depositPauseBtn = document.querySelectorAll(".deposit-pause-btn");
const depostEditBtn = document.querySelectorAll(".deposit-edit-btn");
const popUpEdit = document.querySelector(".deposit-popup-edit");
const closeBtn = document.querySelectorAll(".close-btns");
const depositCancelBtn = document.querySelectorAll(".deposit-cancel-btn");
const popUpCancel = document.querySelector(".deposit-popup-cancel");
const popUpWrap = document.querySelectorAll(".popup-dynamic-content")
const topSpan = document.querySelectorAll(".want-to-deposit-currency-span")

const userData = {
  sophiaData: {
    name: "Sophia",
    installmentAmt: 50,
    currency: "BTC",
    totalHolding: 0.00211941,
    frequency: "Monthly",
    img: "https://assets.website-files.com/62c5389db83d7510f376fbbc/62c829d23e872a066644cfec_Sophia.svg",
    msg: "BTC savings for Sophia",
    currencyShort: "BTC"
  },
  oliverData: {
    name: "Oliver",
    installmentAmt: 45,
    currency: "ETH",
    totalHolding: 0.02411901,
    frequency: "Every 6 Weeks",
    img: "https://assets.website-files.com/62c5389db83d7510f376fbbc/62c829d2d294f4830ef5cce7_Oliver.svg",
    msg: "NFT spending $ for Oliver",
    currencyShort: "ETH"
  },
  ellaData: {
    name: "Ella",
    installmentAmt: 25,
    currency: "Polygon",
    totalHolding: 27.69547996,
    frequency: "Monthly",
    img: "https://assets.website-files.com/62c5389db83d7510f376fbbc/62c829d10d50b23c3649c83c_Ella.svg",
    msg: "Learn2Earn allowance",
    currencyShort: "MATIC"
  },
  ericData: {
    name: "Eric Watson",
    installmentAmt: 100,
    currency: "BTC",
    totalHolding: 0.004240507,
    frequency: "Monthly",
    img: "https://assets.website-files.com/62c5389db83d7510f376fbbc/62c829d112d1ac4d8574c37f_Eric.svg",
    msg: "Savings for niece",
    currencyShort: "BTC"
  }
}

class GetDetails {
  constructor(data) {
    Object.assign(this, data)
  }
  setEditHtml() {
    const { name, installmentAmt, currency, totalHolding, frequency, img, msg, currencyShort } = this
    return `
            <div class="ru-send-price-area deposit-popup-amt">
                <h2 class="ru-send-price-heading">$${installmentAmt}.00</h2>
                <p class="deposit-two-of-txt">of ${currency}</p>
            </div>
            <p class="deposit-below-val-txt deposit-popup-txt">${totalHolding} ${currencyShort}</p>
            <div class="ur-pay-with popup-center">
                <h1 class="ur-pay-with-heading">Frequency</h1>
                <div class="ur-pay-with-right">
                    <h5 class="ur-pay-with-right-txt">${frequency}</h5>
                </div>
            </div>
            <div class="ur-pay-with popup-center">
                <h1 class="ur-pay-with-heading">Starting</h1>
                <div class="ur-pay-with-right">
                    <h5 class="ur-pay-with-right-txt">10/1/2022</h5>
                </div>
            </div>
            <div class="ur-pay-with popup-center">
                <h1 class="ur-pay-with-heading">Pay With</h1>
                <div class="ur-pay-with-right">
                    <h5 class="ur-pay-with-right-txt">Chase</h5>
                </div>
            </div>
            <div class="ur-send-to popup-center">
                <h1 class="ur-send-to-heading">For</h1>
                <div class="ur-sendto-right other-address">
                  <a href="#" class="sent-to-select-options deposit-options w-inline-block">
                    <div class="send-to-select-options-img-wrap">
                      <img src="${img}" loading="lazy" alt="" class="send-to-select-img">
                    </div>
                    <p class="send-to-select-txt">${name}</p>
                  </a>
                </div>
            </div>
            <div class="ur-note-area popup-center">
                <p class="ur-note-area-label">Your Note:</p>
                <div class="w-form">
                    <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get"
                        aria-label="Email Form 2">
                        <input type="text" class="ur-note-input w-input" maxlength="256"
                            name="name-4" data-name="Name 4" placeholder="BTC savings for Ella" value="${msg}" id="name-4">
                    </form>
                    <div class="w-form-done" tabindex="-1" role="region" aria-label="Email Form 2 success">
                        <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div class="w-form-fail" tabindex="-1" role="region" aria-label="Email Form 2 failure">
                        <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
            </div>
        `
  }
}

const ellaDetails = new GetDetails(userData.ellaData)
const shopiaDetails = new GetDetails(userData.sophiaData)
const oliverDetails = new GetDetails(userData.oliverData)
const ericDetails = new GetDetails(userData.ericData)

let swapTxtVal = "BTC";
depositMainAmtInput.min = "1";

depositDateInput.addEventListener("click", () => {
  depositDateInput.type = "date";
});
for (let i = 0; i < sendCurrencyBtn.length; i++) {
  sendCurrencyBtn[i].addEventListener("click", () => {
    for (let i = 0; i < sendCurrencyBtn.length; i++) {
      sendCurrencyBtn[i].classList.remove("active");
    }
    sendCurrencyBtn[i].classList.add("active");
    changeTxt(sendCurrencyBtn[i], "send-usdc", "USDC");
    changeTxt(sendCurrencyBtn[i], "send-btc", "BTC");
    changeTxt(sendCurrencyBtn[i], "send-stx", "STX");
    changeTxt(sendCurrencyBtn[i], "send-eth", "ETH");
    changeTxt(sendCurrencyBtn[i], "send-sol", "SOL");
    changeTxt(sendCurrencyBtn[i], "send-poly", "MATIC");
  });
}
function changeTxt(btn, className, name) {
  if (btn.classList.contains(className)) {
    for (txt of depositCurrencyTxt) {
      txt.textContent = name;
      // swapTxtVal = name;
    }
  }
}

for (let i = 0; i < depositBtnAmt.length; i++) {
  depositBtnAmt[i].addEventListener("click", (e) => {
    e.preventDefault();
    setInputVal(e.currentTarget.value, "$10", 10);
    setInputVal(e.currentTarget.value, "$50", 50);
    setInputVal(e.currentTarget.value, "$100", 100);
    depositMainAmtInput.style.border = "2px solid transparent";
    document.querySelector(".deposit-i-want").style.color = "#1e2859";
    topSpan.forEach((span) => {
      span.classList.remove("hide")
    })
  });
}

function setInputVal(main, btnAmt, inputAmt) {
  if (main === btnAmt) {
    depositMainAmtInput.value = inputAmt;
  }
}

function currencyVal(currency, val) {
  if (swapTxtVal === currency) {
    depositMainAmtInput.value = val;
  }
}
depositMainAmtInput.addEventListener("keyup", () => {
  depositMainAmtInput.style.border = "2px solid transparent";
  document.querySelector(".deposit-i-want").style.color = "#1e2859";
  topSpan.forEach((span) => {
    span.classList.remove("hide")
  })
});

if (depositMainAmtInput.value === "") {
  topSpan.forEach((span) => {
    span.classList.add("hide")
  })
}

for (let i = 0; i < depositOptions.length; i++) {
  depositOptions[i].addEventListener("click", () => {
    depositOptions[i].parentElement.previousElementSibling.classList.toggle("w--open");
    depositOptions[i].parentElement.classList.toggle("w--open");
    let placeHolder = depositOptions[i].parentElement.previousElementSibling.lastChild;
    placeHolder.innerHTML = depositOptions[i].innerHTML;
  });
}

depositPauseBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText == "PAUSE") {
      btn.innerText = "RESUME";
      btn.style.background = "#785BA6";
      btn.parentElement.parentElement.parentElement.parentElement.style.opacity = 0.6;
    } else {
      btn.innerText = "PAUSE";
      btn.style.background = "#73E5E2";
      btn.parentElement.parentElement.parentElement.parentElement.style.opacity = 1;
    }
  });
});
document.querySelector(".deposit-main-btn").addEventListener("click", showSecScreen);
document.querySelector(".deposit-sec-btn").addEventListener("click", showThirdScreen);
document.querySelector(".send-back-btn-one").addEventListener("click", showFirstScreen);
document.querySelector(".full-width").addEventListener("click", showFirstScreen);
function showFirstScreen() {
  document.querySelector(".deposit-screen-threei").style.display = "none";
  document.querySelector(".deposit-screen-two").style.display = "none";
  document.querySelector(".deposit-screen-one").style.display = "flex";
  depositDateInput.type = "text";
  depositDateInput.value = ""
  depositDateInput.placeholder = "Start Date"
  document.querySelector(".often-txt").textContent = "How Often"
  document.querySelector(".for-txt").textContent = "Me"
  document.querySelector(".what-for-input").value = ""
}
function showSecScreen() {
  document.querySelector(".deposit-screen-one").style.display = "none";
  document.querySelector(".deposit-screen-two").style.display = "block";
}
function showThirdScreen() {
  document.querySelector(".deposit-screen-two").style.display = "none";
  document.querySelector(".deposit-screen-one").style.display = "none";
  document.querySelector(".deposit-screen-threei").style.display = "block";
}

closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    popUpEdit.classList.remove("show");
    popUpCancel.classList.remove("show");
  });
});
/*
function closePopUp(){
  popUpEdit.classList.remove("show");
  popUpCancel.classList.remove("show");
}
*/

function showPopup(mainbtn, popup) {
  mainbtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      eachBtnClick(btn, "sophia-edit-btn", shopiaDetails)
      eachBtnClick(btn, "oliver-edit-btn", oliverDetails)
      eachBtnClick(btn, "ella-edit-btn", ellaDetails)
      eachBtnClick(btn, "eric-edit-btn", ericDetails)
      eachBtnClick(btn, "sophia-cancel-btn", shopiaDetails)
      eachBtnClick(btn, "oliver-cancel-btn", oliverDetails)
      eachBtnClick(btn, "ella-cancel-btn", ellaDetails)
      eachBtnClick(btn, "eric-cancel-btn", ericDetails)
      popup.classList.add("show");
    });
  });
}
showPopup(depostEditBtn, popUpEdit)
showPopup(depositCancelBtn, popUpCancel)

function eachBtnClick(btn, btnName, user) {
  if (btn.classList.contains(btnName)) {
    popUpWrap.forEach((pop) => {
      pop.innerHTML = user.setEditHtml()
    })
  }
}

let ericBol = false

document.querySelectorAll(".ur-note-input").forEach(input => input.value = "Savings for niece")
document.querySelector(".create-new-deposit-btn").addEventListener("click", () => {
  document.querySelector(".eric-deposit-card").classList.remove("hide")
  sessionStorage.setItem("ericBol", true)
})

if (sessionStorage.getItem("ericBol")) {
  document.querySelector(".eric-deposit-card").classList.remove("hide")
}