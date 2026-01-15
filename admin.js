console.log("F4 ARENA Pro - Admin JS Loaded");

const loginForm = document.getElementById("adminLogin");
const dashboard = document.getElementById("dashboard");

loginForm?.addEventListener("submit", e=>{
  e.preventDefault();
  const pass = document.getElementById("adminPassword").value;
  if(pass === "1234"){ // Later use Firebase Auth
    dashboard.style.display="block";
    loginForm.style.display="none";
    alert("Welcome Admin!");
  }else{
    alert("Password ভুল হয়েছে");
  }
});
