// Select the button and menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Toggle menu and change button text
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");

    menuBtn.innerHTML = navLinks.classList.contains("show-menu") 
    ? "&#10006;"  // ✖ Close Icon
    : "&#9776;";  // ☰ Menu Icon
     });

     