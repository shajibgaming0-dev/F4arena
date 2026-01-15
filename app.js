console.log("F4 ARENA Pro - User JS Loaded");

// Example: Load matches dynamically
document.addEventListener("DOMContentLoaded", ()=>{
  const matches = document.getElementById("matches");
  matches.innerHTML += `<p>আজকের ম্যাচ: BR / CS / Free</p>`;
  
  const leaderboard = document.getElementById("leaderboard");
  leaderboard.innerHTML += `<p>লিডারবোর্ড এখনও আপডেট হয়নি</p>`;
});
