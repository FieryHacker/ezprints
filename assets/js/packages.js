//If the screen is relatively big
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

//If the screen is about a Chromebook or lower
const dropdown = document.getElementById("packages");

dropdown.addEventListener('change', function (event) {
  if (dropdown.options[dropdown.selectedIndex].value.localeCompare("one") == 0) {
    document.getElementById("selected-standard").style.display = "flex";
    document.getElementById("selected-silver").style.display = "none";
    document.getElementById("selected-gold").style.display = "none";
  } else if (dropdown.options[dropdown.selectedIndex].value.localeCompare("two") == 0) {
    document.getElementById("selected-standard").style.display = "none";
    document.getElementById("selected-silver").style.display = "flex";
    document.getElementById("selected-gold").style.display = "none";
  } else if (dropdown.options[dropdown.selectedIndex].value.localeCompare("three") == 0) {
    document.getElementById("selected-standard").style.display = "none";
    document.getElementById("selected-silver").style.display = "none";
    document.getElementById("selected-gold").style.display = "flex";
  }
});
