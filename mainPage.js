let sendBol = false;
let receiveBol = false;
let earnBol = false;
let earnNavBol = false;
const tradingNavBtn = document.querySelector(".trading-nav-btn")
const tradingEarnBtn = document.querySelector(".earn-nav-btn")
//let signIn = false;
console.log(localStorage.getItem("signIn"))
if (localStorage.getItem("signIn") === null) {
    localStorage.setItem("signIn", false)
}

function signInFalse() {
    if (localStorage.getItem("signIn") === "false") {
        window.location.replace("https://walletdemo.wallio.io/redirect")
    } else {
        console.log("Sign In True")
    }
}
console.log(localStorage.getItem("signIn"))

tradingNavBtn.addEventListener("click", () => {
    localStorage.setItem("sendBol", false);
    localStorage.setItem("receiveBol", false);
    localStorage.setItem("earnBol", false);
    localStorage.setItem("earnNavBol", false);
})
tradingEarnBtn.addEventListener("click", () => {
    localStorage.setItem("earnBol", true);
    localStorage.setItem("earnNavBol", true);
})

document.querySelector(".logout-nav-btn").addEventListener("click", () => {
    localStorage.setItem("signIn", false)
})



userpilot.identify("NX-22lg82x6", // Used to identify users
    {
        //name: "John Doe", // Full name 
        email: "customer@example.com", // Email address
        created_at: '2019-10-17', // ISO8601 Date
        //company: {
        //id: 1, // Required, used to identify the company
        //name: "Wallio Desktop App",
        //created_at: '2019-10-17' // ISO8601 Date
        //},
        // Additional properties 
        // projectId: "1",
        // trialEnds: '2019-10-31' // ISO8601 Date
    }
);
