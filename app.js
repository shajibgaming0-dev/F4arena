console.log("F4 ARENA Pro - User JS Loaded");

document.addEventListener("DOMContentLoaded", ()=>{
  const matches = document.getElementById("matches");
  const leaderboard = document.getElementById("leaderboard");
  const profileSection = document.getElementById("profileSection");

  // Buttons
  const profileBtn = document.getElementById("profileBtn");
  profileBtn.addEventListener("click", ()=>{
    matches.style.display = "none";
    leaderboard.style.display = "none";
    profileSection.style.display = "block";
  });

  const playBtn = document.getElementById("playBtn");
  playBtn.addEventListener("click", ()=>{
    matches.style.display = "block";
    leaderboard.style.display = "block";
    profileSection.style.display = "none";
  });

  // Admin Button
  const adminBtn = document.getElementById("adminBtn");
  adminBtn.addEventListener("click", ()=>{
    const password = prompt("Admin password দিন");
    if(password === ADMIN_PASSWORD){
      window.location.href="admin.html";
    }else{
      alert("Password ভুল হয়েছে");
    }
  });
});
