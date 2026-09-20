 let userNumber = document.getElementById("userNumber");
 let userPassword = document.getElementById("userPassword");
 let loginBtn = document.getElementById("loginBtn");
 let loginSection = document.getElementById("loginSection");
 let dashboardSection = document.getElementById("dashboardSection");
 let addMoneyBtn = document.getElementById("addMoneyBtn");
 let addMoneyForm = document.getElementById("addMoneyForm");
 //let addPin = document.getElementById("addPin");
 let accountBalance = document.getElementById("accountBalance");
 let sendMoneyBtn = document.getElementById("sendMoneyBtn");
 let sendMoneyForm = document.getElementById("sendMoneyForm");
 let addAmount = document.getElementById("addAmount");
 let addMoneySubmitBtn = document.getElementById("addMoneySubmitBtn");
 

// ======================= LOGIN BUTTON FUNCTION =====================
 loginBtn.addEventListener("click", () => {
     if (userNumber.value === "890" && userPassword.value === "76") {
         loginSection.style.display = "none";
         dashboardSection.removeAttribute("hidden");
     } else {
         console.log("WRONG!");
     }
 })

//================= ADD MONEY BUTTON FUNCTION ========================
 addMoneyBtn.addEventListener("click", () => {
     addMoneyForm.removeAttribute("hidden");
     sendMoneyForm.setAttribute("hidden", true)
     
 })

//================= SEND MONEY BUTTON FUNCTION ======================
sendMoneyBtn.addEventListener("click", ()=>{
    sendMoneyForm.removeAttribute("hidden");
    addMoneyForm.setAttribute("hidden", true)
    
})

addMoneySubmitBtn.addEventListener("click", ()=>{
    accountBalance.innerText = parseInt(addAmount.value) + parseInt(accountBalance.innerText);
})

sendMoneyBtn.addEventListener("click", ()=>{
    accountBalance.innerText = parseInt(accountBalance.innerText-parseInt(addAmount.value));
})


