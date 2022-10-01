signInFalse()
const tradingBtn = document.querySelectorAll(".trading-btn"),
  tradingBox = document.querySelectorAll(".trading-right"),
  sendCurrencyBtn = document.querySelectorAll(".send-pay-btn"),
  payCurrencyTxt = document.querySelectorAll(".pay-with-currency"),
  swapBtn = document.querySelectorAll(".swap-wrap"),
  swapTxt = document.querySelectorAll(".swap-txt"),
  sendSelect = document.querySelectorAll(".send-to-select"),
  sendHid = document.querySelectorAll(".sent-to-hid"),
  sendOptions = document.querySelectorAll(".sent-to-select-options"),
  sendOptionsWrap = document.querySelector(".send-to-select-options-wrap"),
  sendSelectTxt = document.querySelector(".send-to-select-txt"),
  sendBackOne = document.querySelector(".send-back-btn-one"),
  sendAll = document.querySelectorAll(".send-all"),
  sendInput = document.querySelectorAll(".send-input-input"),
  sendSecScreen = document.querySelector(".you-are-sending-area-hide"),
  sendFirstScreen = document.querySelector(".send-default"),
  sendThirdScreen = document.querySelector(".congrats-sent-area-hide"),
  sendFirstBtn = document.querySelector(".send-to-first-btn"),
  sendSecondBtn = document.querySelector(".ur-send-to-send-btn"),
  sendVal = document.querySelectorAll(".ur-sendto-right"),
  qrCode = document.querySelector(".qr-code"),
  recieveAddress = document.querySelector(".receive-bt-address-input"),
  payCurrencyTxtFull = document.querySelector(".pay-currency-txt"),
  receiveCopyBtn = document.querySelector(".receive-bt-address-ibutton"),
  receiveAddressInputWrap = document.querySelector(".receive-bt-address-form"),
  sendAnother = document.querySelector(".send-another-btn"),
  sendOptionInput = document.querySelector(".send-to-optional-input"),
  tradingHide = document.querySelectorAll(".trading-hide"),
  tradingSellBtnOne = document.querySelector(".sell-btn-one"),
  tradingSellBtnTwo = document.querySelector(".sell-btn-2"),
  tradingSellBtnThree = document.querySelectorAll(".sell-btn-three"),
  tradingSellScreenOne = document.querySelector(".sell-screen-1"),
  tradingSellScreenTwo = document.querySelector(".sell-screen2"),
  tradingSellScreenThree = document.querySelector(".sell-screen3"),
  buyScreenOne = document.querySelector(".buy-screen-one"),
  buyScreenTwo = document.querySelector(".buy-screen-two"),
  buyScreenThree = document.querySelector(".buy-screen-three"),
  buySelectInputText = document.querySelector(".buy-to-select-txt"),
  buyOptions = document.querySelectorAll(".buy-to-select-options"),
  buySelect = document.querySelector(".buy-to-select"),
  buyBtns = document.querySelectorAll(".buy-btns"),
  frequecyTxt = document.querySelectorAll(".ur-frequency-right-txt"),
  tradingSellAll = document.querySelector(".trading-sell-all"),
  convertOptions = document.querySelectorAll(".convert-select-options"),
  convertSelectFrom = document.querySelectorAll(".covert-val-wrap-from"),
  convertImgOne = document.querySelector(".convert-img-1"),
  convertTxtOne = document.querySelector(".convert-txt-1"),
  convertImgTwo = document.querySelector(".convert-img-2"),
  convertTxtTwo = document.querySelector(".convert-txt-2"),
  convertOne = document.querySelector(".convert-screen-one"),
  convertTwo = document.querySelector(".convert-screen-two"),
  convertThree = document.querySelector(".convert-screen-three"),
  convertBtnOne = document.querySelector(".convert-1"),
  convertBtnTwo = document.querySelector(".convert-2"),
  convertBtnThree = document.querySelectorAll(".convert-3"),
  covertSwapBtn = document.querySelector(".convert-swap-wrap"),
  covertSelectFrom = document.querySelector(".convert-select-first"),
  covertSelectTo = document.querySelector(".convet-select-last")

let sendBolen = localStorage.getItem("sendBol")
let recieveBolen = localStorage.getItem("receiveBol")


for (let i = 0; i < tradingHide.length; i++) {
  tradingHide[i].style.display = "none";
}
recieveAddress.value = "mxZVmdp6Fr7orbybPbFJQZfVakTdFou5RB";
tradingBtn.forEach((tradingBtns) => {
  tradingBtns.addEventListener("click", (e) => {
    for (let i = 0; i < tradingBox.length; i++) {
      tradingBox[i].style.display = "none";
    }
    const styles = e.currentTarget.classList;
    if (styles.contains("send-btn")) {
      tradingBox[0].style.display = "block";
      showFirstScreen();
    }
    if (styles.contains("receive-btn")) {
      tradingBox[1].style.display = "block";
    }
    if (styles.contains("buy-btn")) {
      tradingBox[2].style.display = "block";
      showFirstBuyScreen();
    }
    if (styles.contains("sell-btn")) {
      tradingBox[3].style.display = "block";
    }
    if (styles.contains("convert-btn")) {
      tradingBox[4].style.display = "block";
    }
  });
});
for (let i = 0; i < tradingBtn.length; i++) {
  tradingBtn[i].addEventListener("click", () => {
    for (let i = 0; i < tradingBtn.length; i++) {
      tradingBtn[i].style.background = "#f5f7fb";
      tradingBtn[i].firstChild.style.color = "#1e2859";
    }
    tradingBtn[i].style.background = "#1E2859";
    tradingBtn[i].firstChild.style.color = "#fff";
  });
}
if (sendBolen === "true") {
  tradingBox[0].style.display = "block";
  showFirstScreen();
  document.querySelector(".send-btn").style.background = "#1E2859";
  document.querySelector(".send-btn").firstChild.style.color = "#fff";
  localStorage.setItem("sendBol", false);
  localStorage.setItem("receiveBol", false);
}
if (recieveBolen === "true") {
  tradingBox[1].style.display = "block";
  showFirstScreen();
  document.querySelector(".receive-btn").style.background = "#1E2859";
  document.querySelector(".receive-btn").firstChild.style.color = "#fff";
  localStorage.setItem("sendBol", false);
  localStorage.setItem("receiveBol", false);
}

for (let i = 0; i < sendCurrencyBtn.length; i++) {
  sendCurrencyBtn[i].addEventListener("click", () => {
    for (let i = 0; i < sendCurrencyBtn.length; i++) {
      sendCurrencyBtn[i].classList.remove("active");
    }
    sendCurrencyBtn[i].classList.add("active");
  });
}
swapBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    swapTxt.forEach((txt) => {
      if (txt.textContent === "BTC") {
        txt.textContent = "USD";
      } else {
        txt.textContent = "BTC";
      }
      sendInput.forEach((input) => {
        if (input.value) {
          if (input.value === "$1,801.29") {
            input.value = "0.0927BTC";
          } else {
            input.value = "$1,801.29";
          }
        }
      })
    })
  });
})

for (let i = 0; i < sendSelect.length; i++) {
  sendSelect[i].addEventListener("click", () => {
    for (let i = 0; i < sendHid.length; i++) {
      sendHid[i].style.display = "none";
    }
  });
}
for (let i = 0; i < sendOptions.length; i++) {
  sendOptions[i].addEventListener("click", () => {
    sendSelect.forEach((select) => {
      console.log(select);
      let x = select.getAttribute("aria-expanded");
      if (x === "true") {
        x = "false";
      } else {
        x = "true";
      }
      select.classList.toggle("w--open");
    });
    //sendSelect[i].classList.toggle("w--open")
    sendOptionsWrap.classList.toggle("w--open");
  });
  sendOptions[0].addEventListener("click", () => {
    sendSelectTxt.innerHTML = `<input type="text" class="input-noborder option1" placeholder="mixvFFMdVx28janoJqG…4SfFWmj9g9" >`;
  });
  sendOptions[1].addEventListener("click", () => {
    sendSelectTxt.innerHTML = `<a href="#" class="sent-to-select-options w-inline-block option2" tabindex="0"><div class="send-to-select-options-img-wrap"><img src="https://assets.website-files.com/62c5389db83d7510f376fbbc/62c829d10d50b23c3649c83c_Ella.svg" loading="lazy" alt="" class="send-to-select-img"></div><p class="send-to-select-txt">Ella</p></a>`;
  });
}

sendFirstBtn.addEventListener("click", () => {
  sendSelect.forEach((select) => {
    const lastEl = select.lastChild.lastChild;
    if (lastEl.classList.contains("option1")) {
      for (let i = 0; i < sendVal.length; i++) {
        sendVal[i].style.display = "none";
        if (sendVal[i].classList.contains("other-address")) {
          sendVal[i].style.display = "block";
        }
      }
      showSecondSend();
    } else if (lastEl.classList.contains("option2")) {
      for (let i = 0; i < sendVal.length; i++) {
        sendVal[i].style.display = "none";
        if (sendVal[i].classList.contains("ella-send")) {
          sendVal[i].style.display = "flex";
        }
      }
      showSecondSend();
    } else {
      console.log("false");
    }
  });
});

sendSecondBtn.addEventListener("click", () => {
  sendSelect.forEach((select) => {
    const lastEl = select.lastChild.lastChild;
    if (lastEl.classList.contains("option1")) {
      for (let i = 0; i < sendVal.length; i++) {
        sendVal[i].style.display = "none";
        if (sendVal[i].classList.contains("other-address")) {
          sendVal[i].style.display = "block";
        }
      }
      showThirdSend();
    } else if (lastEl.classList.contains("option2")) {
      for (let i = 0; i < sendVal.length; i++) {
        sendVal[i].style.display = "none";
        if (sendVal[i].classList.contains("ella-send")) {
          sendVal[i].style.display = "flex";
        }
      }
      showThirdSend();
    } else {
      console.log("false");
    }
  });
});
sendAll.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    sendInput.forEach((input) => {
      input.value = "$1,801.29";
    })
  });

})
function showFirstScreen() {
  sendSecScreen.style.display = "none";
  sendFirstScreen.style.display = "block";
  sendThirdScreen.style.display = "none";
  for (let i = 0; i < sendHid.length; i++) {
    sendHid[i].style.display = "block";
  }
}
function showSecondSend() {
  sendSecScreen.style.display = "block";
  sendBackOne.style.display = "block";
  sendFirstScreen.style.display = "none";
}
function showThirdSend() {
  sendSecScreen.style.display = "none";
  sendBackOne.style.display = "none";
  sendFirstScreen.style.display = "none";
  sendThirdScreen.style.display = "block";
}
/* CHEck receive */
sendCurrencyBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    btnChange(styles, "send-btc", "BTC", "https://uploads-ssl.webflow.com/62c5389db83d7510f376fbbc/62de8ec2096a8b5b5d5e29bb_Bitcoin%20QR%20Code.png", "mxZVmdp6Fr7orbybPbFJQZfVakTdFou5RB", "Bitcoin")
    btnChange(styles, "send-usdc", "USDC", "https://uploads-ssl.webflow.com/62c5389db83d7510f376fbbc/62de8ec38d700c5123ce870a_USDC%20Wallet%20Address%20-%20Updated.png", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "USDC")
    btnChange(styles, "send-stx", "STX", "https://uploads-ssl.webflow.com/62c5389db83d7510f376fbbc/62de8ec343f2285a5edf3c8f_STX%20Wallet%20Address.png", "SP3S9NGYHZ9KFC2VJZ2H10YX60QEKTW2HN3KZ9J4J", "STX")
    btnChange(styles, "send-sol", "SOL", "https://uploads-ssl.webflow.com/62c5389db83d7510f376fbbc/62de8ec305f53488109d3ead_SOL%20Wallet%20Address%20-%20Updated.png", "Hszy2nsY2PuNSfzUQ65URbjVd9RToyyoFJBz5N1K8c6x", "Solana")
    btnChange(styles, "send-eth", "ETH", "https://uploads-ssl.webflow.com/62c5389db83d7510f376fbbc/62de8ec28449902bcc4dfc2a_ETH%20QR%20code.png", "0xF876D015BF6780B89C25AF9249A6861FCC81E06D", "Ethereum")
    btnChange(styles, "send-poly", "Polygon (MATIC)", "https://uploads-ssl.webflow.com/62c5389db83d7510f376fbbc/63049bfcc756abb7aa2e04f3_polygon%20QR%20code.png", "0xB671bA71916A9Ea33E29D19902274cCeA150E0FB", "Polygon")
  });
});

function btnChange(styles, className, shortName, imgSrc, addressVal, fullName) {
  if (styles.contains(className)) {
    payCurrencyTxt.forEach((curTxt) => {
      curTxt.textContent = shortName;
      qrCode.src = imgSrc;
      recieveAddress.value = addressVal;
      payCurrencyTxtFull.textContent = fullName;
    });
  }
}

/* copy Address */
receiveCopyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const val = recieveAddress.value;
  navigator.clipboard.writeText(val);
  let length = val.length;
  let last = val.substr(length - 5);
  console.log(last);
  let toast = document.createElement("div");
  toast.innerHTML = `
  <div class="r--toast">
    <p>Address XXXX${last}  Copied</p>
  </div>`;
  receiveAddressInputWrap.appendChild(toast);
  setTimeout(hideToast, 2000);
});
function hideToast() {
  receiveAddressInputWrap.lastChild.remove();
}
sendBackOne.addEventListener("click", () => {
  showFirstScreen();
});
sendAnother.addEventListener("click", () => {
  showFirstScreen();
});

tradingSellBtnOne.addEventListener("click", () => {
  showSellSecound();
});
tradingSellBtnTwo.addEventListener("click", () => {
  showSellThird();
});
tradingSellBtnThree.forEach((btn) => {
  btn.addEventListener("click", () => {
    showSellFirst();
  });
});

function showSellSecound() {
  tradingSellScreenOne.style.display = "none";
  tradingSellScreenTwo.style.display = "block";
}
function showSellThird() {
  tradingSellScreenTwo.style.display = "none";
  tradingSellScreenThree.style.display = "block";
}
function showSellFirst() {
  tradingSellScreenTwo.style.display = "none";
  tradingSellScreenThree.style.display = "none";
  tradingSellScreenOne.style.display = "block";
}

buyOptions.forEach((btn) => {
  btn.addEventListener("click", () => {
    buySelect.nextSibling.classList.toggle("w--open")
    buySelect.classList.toggle("w--open")
    const el = btn.classList
    if (el.contains("one")) {
      buySelectInputText.textContent = "One-Time Purchase"
    }
    if (el.contains("daily")) {
      buySelectInputText.textContent = "Daily"
    }
    if (el.contains("weekly")) {
      buySelectInputText.textContent = "Weekly"
    }
    if (el.contains("qua")) {
      buySelectInputText.textContent = "1st and 15th of the Month"
    }
    if (el.contains("monthly")) {
      buySelectInputText.textContent = "Monthly"
    }
  })
})
buyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let el = btn.classList
    if (el.contains("buy-one")) {
      showSecondBuyScreen()
    }
    if (el.contains("buy-two")) {
      showThirdBuyScreen()
    }
    if (el.contains("buy-three")) {
      showFirstBuyScreen()
    }
  })
})

function showSecondBuyScreen() {
  buyScreenOne.style.display = "none"
  buyScreenTwo.style.display = "block"
  for (let i = 0; i < frequecyTxt.length; i++) {
    frequecyTxt[i].textContent = buySelectInputText.innerText
  }
}
function showThirdBuyScreen() {
  buyScreenOne.style.display = "none"
  buyScreenTwo.style.display = "none"
  buyScreenThree.style.display = "block"
  for (let i = 0; i < frequecyTxt.length; i++) {
    frequecyTxt[i].textContent = buySelectInputText.innerText
  }
}

function showFirstBuyScreen() {
  buyScreenOne.style.display = "block"
  buyScreenTwo.style.display = "none"
  buyScreenThree.style.display = "none"
}

tradingSellAll.addEventListener("click", (e) => {
  e.preventDefault();
})


convertOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    let parent = e.currentTarget.parentElement
    let convertSelect = parent.previousSibling
    parent.classList.toggle("w--open")
    convertSelect.classList.toggle("w--open")
    let optionVal = e.currentTarget.classList
    if (optionVal.contains("eth")) {
      chngContent("https://assets.website-files.com/62c5389db83d7510f376fbbc/62cd1c503242242a2e5afcca_ETH.png", "Ethereum")
    }
    if (optionVal.contains("btc")) {
      chngContent("https://assets.website-files.com/62c5389db83d7510f376fbbc/62cd1c50adf5f676dd6796d0_Bitcoin.png", "Bitcoin")
    }
    if (optionVal.contains("usdc")) {
      chngContent("https://assets.website-files.com/62c5389db83d7510f376fbbc/62cd1c51c81a80051fc62171_USDC%20Coin.svg", "USDC")
    }
    if (optionVal.contains("sol")) {
      chngContent("https://assets.website-files.com/62c5389db83d7510f376fbbc/62cd1c50c6d317f6854d5fa2_Solana.png", "Solana")
    }
    if (optionVal.contains("stx")) {
      chngContent("https://assets.website-files.com/62c5389db83d7510f376fbbc/62cd1c51a6f703d19363c496_STX.png", "Stacks")
    }
    if (optionVal.contains("eth1")) {
      chngContentOne("https://assets.website-files.com/62c5389db83d7510f376fbbc/62cd1c503242242a2e5afcca_ETH.png", "Ethereum")
    }
    if (optionVal.contains("btc1")) {
      chngContentOne("https://assets.website-files.com/62c5389db83d7510f376fbbc/62cd1c50adf5f676dd6796d0_Bitcoin.png", "Bitcoin")
    }
    if (optionVal.contains("usdc1")) {
      chngContentOne("https://assets.website-files.com/62c5389db83d7510f376fbbc/62cd1c51c81a80051fc62171_USDC%20Coin.svg", "USDC")
    }
    if (optionVal.contains("sol1")) {
      chngContentOne("https://assets.website-files.com/62c5389db83d7510f376fbbc/62cd1c50c6d317f6854d5fa2_Solana.png", "Solana")
    }
    if (optionVal.contains("stx1")) {
      chngContentOne("https://assets.website-files.com/62c5389db83d7510f376fbbc/62cd1c51a6f703d19363c496_STX.png", "Stacks")
    }
  })
})
function chngContent(src, txt) {
  convertImgOne.src = src
  convertTxtOne.textContent = txt
}
function chngContentOne(src, txt) {
  convertImgTwo.src = src
  convertTxtTwo.textContent = txt
}
function showScreenOne() {
  convertTwo.style.display = "none"
  convertThree.style.display = "none"
  convertOne.style.display = "block"
}
function showScreenTwo() {
  convertOne.style.display = "none"
  convertThree.style.display = "none"
  convertTwo.style.display = "block"
}

function showScreenThree() {
  convertOne.style.display = "none"
  convertTwo.style.display = "none"
  convertThree.style.display = "block"
}

convertBtnOne.addEventListener("click", showScreenTwo)
convertBtnTwo.addEventListener("click", showScreenThree)
convertBtnThree.forEach((btn) => {
  btn.addEventListener("click", showScreenOne)
})

covertSwapBtn.addEventListener("click", () => {
  let el = covertSelectFrom.lastChild.innerHTML
  let el1 = covertSelectTo.lastChild.innerHTML
  if (el === "Bitcoin" && el1 === "Ethereum") {
    chngContent("https://assets.website-files.com/62c5389db83d7510f376fbbc/62cd1c503242242a2e5afcca_ETH.png", "Ethereum")
    chngContentOne("https://assets.website-files.com/62c5389db83d7510f376fbbc/62cd1c50adf5f676dd6796d0_Bitcoin.png", "Bitcoin")
  }
  if (el1 === "Bitcoin" && el === "Ethereum") {
    chngContentOne("https://assets.website-files.com/62c5389db83d7510f376fbbc/62cd1c503242242a2e5afcca_ETH.png", "Ethereum")
    chngContent("https://assets.website-files.com/62c5389db83d7510f376fbbc/62cd1c50adf5f676dd6796d0_Bitcoin.png", "Bitcoin")
  }
})
