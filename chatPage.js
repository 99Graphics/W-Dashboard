signInFalse()
const chatContainer = document.querySelector(".chatbox-chat-container")
const chatInput = document.querySelector(".chat-input-txt-field")
const chatSendBtn = document.querySelector(".chat-input-send-btn")
const notificationBtn = document.getElementById("notification-btn")
const lastMsg = document.querySelectorAll(".send-msg-date")
const date = new Date();
let msgs = []

notificationBtn.addEventListener("click", () => {
        window.scrollTo(0, document.body.scrollHeight);
        console.log("dimag lage")
})
chatSendBtn.addEventListener("click", render)
chatInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
                event.preventDefault();
                render()
        } else {
                console.log("not enter")
        }
})
function randomId() {
        let rand = Random.new
}
function render() {
        let inputTxt = chatInput.value
        if (inputTxt != "") {
                let newTxt = `<div class="sender-msg-wrapper">
<div class="send-msgtxt-date-wrapper">
<div class="send-msg-txt-wrap">
<p class="send-msg-txt" id="last">${inputTxt}
</p>
</div>
<p class="send-msg-date">Today ${displayCurrentTime()}
</p>
</div> 
</div>
`
                msgs.push(newTxt)
                chatContainer.innerHTML += newTxt
                chatContainer.scrollTop = chatContainer.scrollHeight;
                chatInput.value = ""
                console.log(chatContainer.scrollHeight)
        } else {
                console.log("input empty")
        }
}

function scrollTo(ele) {
        ele.scrollIntoView(false)
}

function showMsgs() {
        let parseTxt = JSON.parse(localStorage.getItem("messages"))
        msgs = parseTxt
        render()
}
//showMsgs()
function displayCurrentTime() {
        var date = new Date();
        var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        if (hours > 12) {
                return time = hours + ":" + minutes + " " + "PM";
        } else {
                return time = hours + ":" + minutes + " " + "AM";
        }
};
