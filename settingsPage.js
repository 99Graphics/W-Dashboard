signInFalse()
let cryptoImg = document.querySelectorAll(".settings-crypto-img")
let check = document.querySelectorAll(".setting-contact-checkbox")
let dateInput = document.querySelectorAll(".settings-contact-date-input")
const settingBox = document.querySelectorAll(".setting-verification-box")
const veriTick = document.querySelectorAll(".settings-verification-tick-wrap")
const preventBtn = document.querySelectorAll(".prevent-btn")

for (let i = 0; i < cryptoImg.length; i++) {
  cryptoImg[i].addEventListener("click", () => {
    for (let i = 0; i < cryptoImg.length; i++) {
      cryptoImg[i].style.border = "none"
    }
    cryptoImg[i].style.border = "1px solid #1e2859"
  })
}


for (let i = 0; i < dateInput.length; i++) {
  dateInput[i].type = "text"
  dateInput[i].addEventListener("click", () => {
    dateInput[i].type = "date"
  })
}

for (let i = 0; i < check.length; i++) {
  check[i].checked = true;
  let el = check[i].parentElement.lastChild
  if (check[i].checked === true) {
    el.classList.add("checked")
    if (check[i].classList.contains("setting-unchecked")) {
      el.classList.remove("checked")
    }
  } else (
    el.classList.remove("checked")
  )
  check[i].addEventListener("click", () => {
    if (check[i].checked === true) {
      el.classList.add("checked")
      if (check[i].classList.contains("setting-unchecked")) {
        el.classList.remove("checked")
      }
    } else {
      el.classList.remove("checked")
      if (check[i].classList.contains("setting-unchecked")) {
        el.classList.add("checked")
      }
    }
  })

}


veriTick[0].style.opacity = "1"
for (let i = 0; i < settingBox.length; i++) {
  let verificationTick = settingBox[i].lastChild.lastChild
  settingBox[i].addEventListener("click", () => {
    for (let i = 0; i < veriTick.length; i++) {
      veriTick[i].style.opacity = "0"
    }
    verificationTick.style.opacity = "1"
  })
}

//Populating Data of setting
document.getElementById("name").value = "Keith Lopez"
document.getElementById("Nick-Name").value = "Papa Bear"
document.getElementById("email").value = "klopez123@gmail.com"
document.getElementById("Date-of-Birth1").value = "XX/XX/19XX"
document.getElementById("Legal-Name").value = "Keith Christopher Lopez"
document.getElementById("Address").value = "222 Sunnry Road Lane"
document.getElementById("CIty").value = "Pleasantville"
document.getElementById("Pin-Code").value = 02345
document.getElementById("Phone-Number").value = "+X XXX XXXX XX25"

document.getElementById("name2").value = "Linda Lopez"
document.getElementById("Nick-Name2").value = "Mama Bear"
document.getElementById("email2").value = "lopez_linda@gmail.com"
document.getElementById("Date-of-Birth2").value = "XX/XX/19XX"
document.getElementById("Legal-Name2").value = "Linda Melissa Lopez"
document.getElementById("Address2").value = "222 Sunnry Road Lane"
document.getElementById("CIty2").value = "Pleasantville"
document.getElementById("Pin-Code2").value = 02345
document.getElementById("setlimit").value = "$3,000.00"


document.getElementById("name3").value = "Oliver"
document.getElementById("Nick-Name3").value = "Scooby Doo"
document.getElementById("email3").value = "olivers_email@gmail.com"
document.getElementById("Date-of-Birth3").value = "XX/XX/20XX"
document.getElementById("Legal-Name3").value = "Oliver Twist Lopez"
document.getElementById("Address3").value = "222 Sunnry Road Lane"
document.getElementById("CIty3").value = "Pleasantville"
document.getElementById("Pin-Code3").value = 02345
document.getElementById("setlimit2").value = "$75.00"

document.getElementById("name4").value = "Joe"
document.getElementById("Nick-Name4").value = "Jack-Jack"
document.getElementById("email4").value = "jackofalltrades@gmail.com "
document.getElementById("Date-of-Birth4").value = "XX/XX/19XX"
document.getElementById("Legal-Name4").value = "Joseph John Jackson"
document.getElementById("Address4").value = "123 Sesame Street"
document.getElementById("Unit4").value = "1"
document.getElementById("CIty4").value = "New York"
document.getElementById("Pin-Code4").value = 11112
document.getElementById("setlimit4").value = "$1000.00"

document.getElementById("name5").value = "Sophia"
document.getElementById("Nick-Name5").value = "Sweetie"
document.getElementById("email5").value = "so_so_sophie@gmail.com"
document.getElementById("Legal-Name5").value = "Sophia Vanessa Lopez"
document.getElementById("Date-of-Birth5").value = "XX/XX/20XX"
document.getElementById("Address5").value = "222 Sunnry Road Lane"
document.getElementById("Unit5").value = ""
document.getElementById("CIty5").value = "Pleasantville"
document.getElementById("Pin-Code5").value = 12345
document.getElementById("setlimit5").value = "$75.00"

document.getElementById("name6").value = "Ella"
document.getElementById("Nick-Name6").value = "Queenie"
document.getElementById("email6").value = "ella_ella@gmail.com"
document.getElementById("Legal-Name6").value = "Ella Margaret Lopez"
document.getElementById("Date-of-Birth6").value = "XX/XX/20XX"
document.getElementById("Address6").value = "222 Sunnry Road Lane"
document.getElementById("Unit6").value = ""
document.getElementById("CIty6").value = "Pleasantville"
document.getElementById("Pin-Code6").value = 12345
document.getElementById("setlimit6").value = "$75.00"

document.getElementById("name7").value = "Eric Watson"
document.getElementById("Nick-Name7").value = "Sleepy"
document.getElementById("email7").value = "jackofalltrades@gmail.com"
document.getElementById("Legal-Name7").value = "Eric William Watson"
document.getElementById("Date-of-Birth7").value = "XX/XX/19XX"
document.getElementById("Address7").value = "1234 Mountain Way"
document.getElementById("Unit7").value = ""
document.getElementById("CIty7").value = "Denver"
document.getElementById("Pin-Code7").value = 55555
document.getElementById("setlimit7").value = "$1000.00"


preventBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault()
  })
})


document.querySelectorAll(".save-changes-btn").forEach((btn) => {
  const nextText = btn.nextElementSibling
  btn.addEventListener("click", () => {
    nextText.classList.remove("hide")
    setTimeout(() => {
      nextText.classList.add("hide")
    }, 4000)
  })
})