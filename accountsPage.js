signInFalse()

const addressTxt = document.getElementById("address-txt");
const addressBtn = document.getElementById("address-btn");
const accInputWrap = document.querySelector(".accounts-profile-card-address-txt-wrap")
const accountsNavBtn = document.querySelectorAll(".accounts-navigation-btn");
const accountsBotWrap = document.querySelectorAll(".accounts-bottom-wrap");
const accCurBtn = document.querySelectorAll(".accounts-cur-btn")
const accCurrTxt = document.querySelector(".acc-curr-txt")
const accAddressTxt = document.getElementById("address-txt")
const familyBox = document.querySelectorAll(".family-box")
const accountsUserDetails = document.querySelector(".accounts-user-details-pwrap")
const accountsProfileImg = document.querySelector(".accounts-profile-card-img")
const accountsUserName = document.querySelectorAll(".accounts-profile-card-username")


/* copy Address */
addressBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const val = addressTxt.innerText
    navigator.clipboard.writeText(val)
    let length = val.length
    let last = val.substr(length - 5)
    console.log(last)
    let toast = document.createElement("div")
    toast.innerHTML = `
  <div class="r--toast">
    <p>Address XXXX${last}  Copied</p>
  </div>`
    accInputWrap.appendChild(toast)
    setTimeout(hideToast, 2000)
})

function hideToast() {
    accInputWrap.lastChild.remove();
}

accountsBotWrap[1].style.display = "none"
accountsBotWrap[2].style.display = "none"

accountsNavBtn[0].addEventListener("click", () => {
    if (accountsBotWrap[0].classList.contains("show") == true) {
        accountsBotWrap[1].style.display = "none"
        accountsBotWrap[2].style.display = "none"
        accountsBotWrap[0].style.display = "block"
    } else {
        accountsBotWrap[1].style.display = "none"
        accountsBotWrap[2].style.display = "none"
        accountsBotWrap[0].style.display = "block"
    }

    if (
        accountsNavBtn[0].classList.contains("accounts-navigation-btn-active") ===
        true
    ) {
        console.log("bt1 working");
        accountsNavBtn[1].classList.remove("accounts-navigation-btn-active");
        accountsNavBtn[2].classList.remove("accounts-navigation-btn-active");
        accountsNavBtn[0].classList.add("accounts-navigation-btn-active");
    } else {
        accountsNavBtn[1].classList.remove("accounts-navigation-btn-active");
        accountsNavBtn[2].classList.remove("accounts-navigation-btn-active");
        accountsNavBtn[0].classList.add("accounts-navigation-btn-active");
    }
});
accountsNavBtn[1].addEventListener("click", () => {
    if (accountsBotWrap[1].classList.contains("show") == true) {
        accountsBotWrap[0].style.display = "none"
        accountsBotWrap[2].style.display = "none"
        accountsBotWrap[1].style.display = "block"
    } else {
        accountsBotWrap[0].style.display = "none"
        accountsBotWrap[2].style.display = "none"
        accountsBotWrap[1].style.display = "block"
    }
    if (
        accountsNavBtn[1].classList.contains("accounts-navigation-btn-active") ===
        true
    ) {
        accountsNavBtn[0].classList.remove("accounts-navigation-btn-active");
        accountsNavBtn[2].classList.remove("accounts-navigation-btn-active");
        accountsNavBtn[1].classList.add("accounts-navigation-btn-active");
    } else {
        accountsNavBtn[0].classList.remove("accounts-navigation-btn-active");
        accountsNavBtn[2].classList.remove("accounts-navigation-btn-active");
        accountsNavBtn[1].classList.add("accounts-navigation-btn-active");
    }
});
accountsNavBtn[2].addEventListener("click", () => {
    if (accountsBotWrap[2].classList.contains("show") == true) {
        accountsBotWrap[0].style.display = "none"
        accountsBotWrap[1].style.display = "none"
        accountsBotWrap[2].style.display = "block"
    } else {
        accountsBotWrap[0].style.display = "none"
        accountsBotWrap[1].style.display = "none"
        accountsBotWrap[2].style.display = "block"
    }

    if (
        accountsNavBtn[2].classList.contains("accounts-navigation-btn-active") ===
        true
    ) {
        accountsNavBtn[0].classList.remove("accounts-navigation-btn-active");
        accountsNavBtn[1].classList.remove("accounts-navigation-btn-active");
        accountsNavBtn[2].classList.add("accounts-navigation-btn-active");
    } else {
        accountsNavBtn[0].classList.remove("accounts-navigation-btn-active");
        accountsNavBtn[1].classList.remove("accounts-navigation-btn-active");
        accountsNavBtn[2].classList.add("accounts-navigation-btn-active");
    }
});

accountsUserDetails.style.display = "none"

for (let i = 0; i < familyBox.length; i++) {
    familyBox[i].addEventListener("click", () => {
        if (familyBox[i].classList.contains("active") === true) {
            familyboxCo(familyBox[i])
        } else {
            familyboxCo(familyBox[i])
        }
    })
}
function familyboxCo(loop) {
    for (let i = 0; i < familyBox.length; i++) {
        familyBox[i].classList.remove("active")
    }
    loop.classList.add("active")
    accountsUserDetails.style.display = "block"
    accountsUserDetails.scrollIntoView({ behavior: 'smooth' }, true);
}

familyBox.forEach((familyBx) => {
    familyBx.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList
        familyB(styles, "linda-box", "Linda Lopez", "https://assets.website-files.com/62c5389db83d7510f376fbbc/62c829d2fe2a396a5403fade_Linda.svg")
        familyB(styles, "oliver-box", "Oliver", "https://assets.website-files.com/62c5389db83d7510f376fbbc/62c829d2d294f4830ef5cce7_Oliver.svg")
        familyB(styles, "joe-box", "Joe", "https://assets.website-files.com/62c5389db83d7510f376fbbc/62c829d1574f0041c0c4ef88_Joe.svg")
        familyB(styles, "sophia-box", "Sophia", "https://assets.website-files.com/62c5389db83d7510f376fbbc/62c829d23e872a066644cfec_Sophia.svg")
        familyB(styles, "ella-box", "Ella", "https://assets.website-files.com/62c5389db83d7510f376fbbc/62c829d10d50b23c3649c83c_Ella.svg")
        familyB(styles, "eric-box", "Eric Watson", "https://assets.website-files.com/62c5389db83d7510f376fbbc/62c829d112d1ac4d8574c37f_Eric.svg")
    })
})
function familyB(styles, className, userName, img) {
    if (styles.contains(className)) {
        accountsUserName.forEach((username) => {
            username.textContent = userName
        })
        accountsProfileImg.src = img
    }
}

for (let i = 0; i < accCurBtn.length; i++) {
    accCurBtn[i].addEventListener("click", () => {
        for (let i = 0; i < accCurBtn.length; i++) {
            accCurBtn[i].classList.remove("active")
        }
        accCurBtn[i].classList.add("active")
    })
}


accCurBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let el = btn.classList
        cryptoBtns(el, "acc-usdc", "USDC", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48")
        cryptoBtns(el, "acc-eth", "Ethereum", "0xF876D015BF6780B89C25AF9249A6861FCC81E06D")
        cryptoBtns(el, "acc-btc", "Bitcoin", "16paSnzXXUR5pUhQ2WznthZ5ANxq44e2tm")
        cryptoBtns(el, "acc-stx", "STX", "SP3S9NGYHZ9KFC2VJZ2H10YX60QEKTW2HN3KZ9J4J")
        cryptoBtns(el, "acc-sol", "Solana", "Hszy2nsY2PuNSfzUQ65URbjVd9RToyyoFJBz5N1K8c6x")
        cryptoBtns(el, "acc-poly", "Polygon", "0xB671bA71916A9Ea33E29D19902274cCeA150E0FB")
    })
})

function cryptoBtns(el, className, coinName, address) {
    if (el.contains(className)) {
        accCurrTxt.textContent = coinName
        accAddressTxt.textContent = address
    }
}