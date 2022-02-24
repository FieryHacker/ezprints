const standard = document.getElementById("standard");
const silver = document.getElementById("silver");
const gold = document.getElementById("gold");

standard.addEventListener('click', function (event) {
  document.getElementById("selected-standard").style.display = "flex";
  document.getElementById("selected-silver").style.display = "none";
  document.getElementById("selected-gold").style.display = "none";
});

silver.addEventListener('click', function (event) {
  document.getElementById("selected-standard").style.display = "none";
  document.getElementById("selected-silver").style.display = "flex";
  document.getElementById("selected-gold").style.display = "none";
});

gold.addEventListener('click', function (event) {
  document.getElementById("selected-standard").style.display = "none";
  document.getElementById("selected-silver").style.display = "none";
  document.getElementById("selected-gold").style.display = "flex";
});
