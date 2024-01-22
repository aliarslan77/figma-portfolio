let hamBurgerbtn = document.getElementById("hamburger");
const closeBtn = document.getElementById("crossIcon");
const menuDiv = document.getElementById("menuContainer");
hamBurgerbtn.addEventListener("click", () => {

    menuDiv.classList.toggle("hidden");

});

closeBtn.addEventListener("click", () => {

    menuDiv.classList.add("hidden");

})