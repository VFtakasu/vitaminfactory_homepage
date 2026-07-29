/* ==========================================
   Vitamin Factory
   main.js
========================================== */

// -------------------------------
// Back To Top
// -------------------------------

const pageTop = document.getElementById("page-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        pageTop.classList.add("show");
    } else {
        pageTop.classList.remove("show");
    }

});

pageTop.addEventListener("click", function (e) {

    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// -------------------------------
// Fade Up Animation
// -------------------------------

const fadeElements = document.querySelectorAll(
    ".about-card, .service-box, .strength-card, .flow-item, .stat-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");
            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

fadeElements.forEach(item => {

    observer.observe(item);

});


// -------------------------------
// Header Shadow
// -------------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 8px 25px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


// -------------------------------
// Button Hover Animation
// -------------------------------

const buttons = document.querySelectorAll(
    ".btn-green,.btn-white"
);

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0)";

    });

});

console.log("Vitamin Factory Loaded");
