signInFalse()

let transactionRow = document.querySelectorAll(".transaction-history-row")
for (let i = 0; i < transactionRow.length; i++) {
  transactionRow[i].style.background += "transparent"
  transactionRow[i].addEventListener("click", () => {
    for (let i = 0; i < transactionRow.length; i++) {
      transactionRow[i].style.background = "transparent"
    }
    transactionRow[i].style.background = "#E9ECF8"
  })
}

//approval Btns
const approvalBtns = document.querySelectorAll(".approval-card-btn");
const pendStatus = document.getElementById("pending-status");
//console.log(pendStatus)

for (let i = 0; i < approvalBtns.length; i++) {
  approvalBtns[i].addEventListener("click", () => {
    // console.log("work")
    console.log(approvalBtns[i].classList)
    if (approvalBtns[i].classList.contains("approval-card-btn-decline")) {
      console.log("decline clicked")
      pendStatus.classList.remove("transaction-table-status-btn-pending");
      pendStatus.classList.add("transaction-table-status-btn-cancel");
      pendStatus.innerText = "Cancelled";
    } else if (
      approvalBtns[i].classList.contains("approval-card-btn-approve"
      )) {
      console.log("approve clivk")
      pendStatus.classList.remove("transaction-table-status-btn-pending");
      pendStatus.classList.add("transaction-table-status-btn-completed");
      pendStatus.innerText = "Completed";
    } else {
      console.log("kuch bhi")
    }
  });
}