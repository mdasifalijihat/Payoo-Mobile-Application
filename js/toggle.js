document.getElementById("addmoney-section").style.display = "block";
document.getElementById("cashout").style.display = "none";
document.getElementById("add-money-box").addEventListener("click", function () {
  document.getElementById("cashout").style.display = "none";
  document.getElementById("addmoney-section").style.display = "block";
});

document.getElementById("cashOut-box").addEventListener("click", function () {
  document.getElementById("cashout").style.display = "block";
  document.getElementById("addmoney-section").style.display = "none";
});
