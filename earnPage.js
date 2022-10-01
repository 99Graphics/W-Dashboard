signInFalse()
const mintMinusBtn = document.querySelector(".mint-minus-btn"),
    mintAddBtn = document.querySelector(".mint-add-btn"),
    mintVal = document.querySelector(".earn-mint-input-value")

let count = 0
mintAddBtn.addEventListener("click", () => {
    if (count < 3) {
        count++
        mintVal.textContent = count
        mintMinusBtn.classList.remove("disable")
    }
    if (count === 3) {
        mintAddBtn.classList.add("disable")
    }
})
mintMinusBtn.addEventListener("click", () => {
    if (count > 0) {
        count--
        mintVal.textContent = count
        mintAddBtn.classList.remove("disable")
        if (count === 0) {
            mintMinusBtn.classList.add("disable")
        }
    }
})