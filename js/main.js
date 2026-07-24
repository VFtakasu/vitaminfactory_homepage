/* ======================================
   Vitamin Factory
   main.js
====================================== */

// =========================
// Fade Up Animation
// =========================

const fadeElements = document.querySelectorAll(
".about-card, .service-box, .strength-card, .flow-item, .stat-card, .cta"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

fadeElements.forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});

// =========================
// Back To Top
// =========================

const pageTop=document.getElementById("page-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        pageTop.classList.add("show");

    }else{

        pageTop.classList.remove("show");

    }

});

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// =========================
// Header Shadow
// =========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>20){

        header.style.boxShadow="0 8px 25px rgba(0,0,0,.08)";

    }else{

        header.style.boxShadow="none";

    }

});
