 let userNumber = document.getElementById("userNumber");
 let userPassword = document.getElementById("userPassword");
 let loginBtn = document.getElementById("loginBtn");
 let loginSection = document.getElementById("loginSection");
 let dashboardSection = document.getElementById("dashboardSection");
 let addMoneyBtn = document.getElementById("addMoneyBtn");
 let addMoneyForm = document.getElementById("addMoneyForm");
 let addAmount = document.getElementById("addAmount");
 let addPin = document.getElementById("addPin");
 let addMoneySubmitBtn = document.getElementById("addMoneySubmitBtn");
 let accountBalance = document.getElementById("accountBalance");


 //  let sendMoneyBtn = document.getElementById("sendMoneyBtn");
 //  let sendMoneyForm = document.getElementById("sendMoneyForm");

 loginBtn.addEventListener("click", () => {
     if (userNumber.value === "123" && userPassword.value === "12") {
         loginSection.style.display = "none";
         dashboardSection.removeAttribute("hidden");
     } else {
         console.log("WRONG!");
     }
 })


 addMoneyBtn.addEventListener("click", () => {
     addMoneyForm.removeAttribute("hidden");
 })


 addMoneySubmitBtn.addEventListener("click", ()=>{
    accountBalance.innerText = parseInt(addAmount.value +accountBalance.innerText);
 })