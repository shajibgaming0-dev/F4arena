console.log("F4 ARENA Pro - Admin JS Loaded");

const loginForm = document.getElementById("adminLogin");
const dashboard = document.getElementById("dashboard");

loginForm?.addEventListener("submit", e=>{
  e.preventDefault();
  const pass = document.getElementById("adminPassword").value;
  if(pass === ADMIN_PASSWORD){
    dashboard.style.display="block";
    loginForm.style.display="none";
    alert("Welcome Admin!");
  }else{
    alert("Password ভুল হয়েছে");
  }
});

// Example: Add Match
document.querySelector("#dashboard button:nth-child(1)")?.addEventListener("click", ()=>{
  const matchName = prompt("ম্যাচের নাম দিন");
  alert(matchName + " যোগ করা হয়েছে! (Later Firebase এ save হবে)");
});
