var hamburger = document.querySelector(".hamburger");
var navLinks = document.querySelector(".nav-links");
var links = document.querySelectorAll(".nav-links li");

window.onload=function(){

    hamburger.addEventListener("click", () => {
        // Toggle NAV
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });


        // hamburger Animation to/from crossed 3 lines
        hamburger.classList.toggle('toggle');

    });
}