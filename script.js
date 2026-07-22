/*=========================================
        BIRTHDAY SURPRISE
            STEP 1
=========================================*/

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
            ELEMENTS
    ==============================*/

    const giftBtn = document.getElementById("giftBtn");
    const giftSection = document.getElementById("giftSection");

    const musicBtn = document.getElementById("musicBtn");
    const birthdayMusic = document.getElementById("birthdayMusic");


    /*==============================
        HIDE SECTION ON LOAD
    ==============================*/

    if (giftSection) {

        giftSection.style.display = "none";

    }


    /*==============================
        OPEN SURPRISE
    ==============================*/

    if (giftBtn && giftSection) {

        giftBtn.addEventListener("click", () => {

            giftSection.style.display = "block";

            giftSection.classList.remove("hidden");

            giftSection.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    }


    /*==============================
        MUSIC BUTTON
    ==============================*/

    if (musicBtn && birthdayMusic) {

        let isPlaying = false;

        musicBtn.addEventListener("click", () => {

            if (!isPlaying) {

                birthdayMusic.play();

                musicBtn.textContent = "⏸ Pause Music";

                isPlaying = true;

            } else {

                birthdayMusic.pause();

                musicBtn.textContent = "🎵 Play Music";

                isPlaying = false;

            }

        });

    }


    /*==============================
        PRELOAD GALLERY IMAGES
    ==============================*/

    const images = document.querySelectorAll(".slider img");

    images.forEach((img) => {

        const preload = new Image();

        preload.src = img.src;

    });


    console.log("✅ Step 1 Loaded Successfully");

});
