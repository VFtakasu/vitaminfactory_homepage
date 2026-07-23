/* =====================================
   Vitamin Factory
   main.js
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ------------------------------
       ヘッダー背景変更
    ------------------------------ */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {
            header.style.background = "rgba(255,255,255,0.98)";
            header.style.boxShadow = "0 8px 20px rgba(0,0,0,.08)";
        } else {
            header.style.background = "rgba(255,255,255,.95)";
            header.style.boxShadow = "none";
        }

    });

    /* ------------------------------
       スクロールアニメーション
    ------------------------------ */

    const targets = document.querySelectorAll(
        ".about-card, .service-box, .strength-card, .flow-item"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.15
    });

    targets.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "all .8s ease";

        observer.observe(item);

    });

    /* ------------------------------
       スムーズスクロール
    ------------------------------ */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});