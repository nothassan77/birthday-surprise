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

/*=========================================
        BIRTHDAY SURPRISE
            STEP 2
=========================================*/


/*=========================================
            FLOATING HEARTS
=========================================*/

const heartsContainer = document.querySelector(".hearts");


function createHeart(){

    if(!heartsContainer) return;


    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = [
        "💜",
        "💖",
        "💗",
        "🤍",
        "✨",
        "🌸"
    ][Math.floor(Math.random()*6)];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (15 + Math.random()*20) + "px";


    heart.style.animationDuration =
        (6 + Math.random()*5) + "s";


    heart.style.opacity =
        0.5 + Math.random()*0.5;


    heartsContainer.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },11000);

}


setInterval(createHeart,700);





/*=========================================
            SPARKLES
=========================================*/

function createSparkle(){

    if(!heartsContainer) return;


    const sparkle = document.createElement("div");


    sparkle.className = "heart";


    sparkle.innerHTML = "✦";


    sparkle.style.left =
        Math.random()*100 + "vw";


    sparkle.style.fontSize =
        (8 + Math.random()*12) + "px";


    sparkle.style.animationDuration =
        (5 + Math.random()*4) + "s";


    sparkle.style.opacity = ".8";


    heartsContainer.appendChild(sparkle);


    setTimeout(()=>{

        sparkle.remove();

    },9000);

}


setInterval(createSparkle,1200);





/*=========================================
            SHOOTING STARS
=========================================*/

function createShootingStar(){


    const star = document.createElement("div");


    star.className = "shooting-star";


    star.style.left =
        Math.random()*window.innerWidth + "px";


    star.style.top =
        Math.random()*250 + "px";


    document.body.appendChild(star);



    setTimeout(()=>{

        star.remove();

    },2500);


}



function shootingStarLoop(){

    createShootingStar();


    setTimeout(
        shootingStarLoop,
        4000 + Math.random()*5000
    );

}


shootingStarLoop();



console.log("✨ Step 2 Loaded Successfully");

/*=========================================
        BIRTHDAY SURPRISE
            STEP 3
=========================================*/


/*=========================================
            IMAGE SLIDER
=========================================*/

const slides = document.querySelectorAll(".slider img");

let currentImage = 0;


function changeImage(){

    if(slides.length === 0) return;


    slides[currentImage].classList.remove("active");


    currentImage++;


    if(currentImage >= slides.length){

        currentImage = 0;

    }


    slides[currentImage].classList.add("active");

}


if(slides.length > 0){

    setInterval(changeImage,3500);

}





/*=========================================
            FIREWORK CANVAS
=========================================*/


const canvas = document.getElementById("fireworks");


if(canvas){

    const ctx = canvas.getContext("2d");


    function resizeCanvas(){

        canvas.width = window.innerWidth;

        canvas.height = window.innerHeight;

    }


    resizeCanvas();


    window.addEventListener(
        "resize",
        resizeCanvas
    );


    const rockets = [];

    const sparks = [];


    const fireColors = [

        "#c77dff",
        "#ff9ff3",
        "#ffffff",
        "#ffd166",
        "#7df9ff"

    ];




    class Rocket{


        constructor(){

            this.x =
            Math.random()*canvas.width;


            this.y =
            canvas.height;


            this.target =
            100 + Math.random()*300;


            this.speed =
            5 + Math.random()*3;


            this.color =
            fireColors[
            Math.floor(
            Math.random()*fireColors.length
            )];


        }



        update(){

            this.y -= this.speed;


            if(this.y <= this.target){

                explode(
                    this.x,
                    this.y,
                    this.color
                );

                return false;

            }


            return true;

        }



        draw(){

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                3,
                0,
                Math.PI*2
            );


            ctx.fillStyle=this.color;


            ctx.shadowBlur=15;

            ctx.shadowColor=this.color;


            ctx.fill();

        }

    }





    function explode(x,y,color){


        for(let i=0;i<70;i++){


            const angle =
            Math.random()*Math.PI*2;


            const speed =
            Math.random()*5+1;



            sparks.push({

                x:x,

                y:y,

                dx:
                Math.cos(angle)*speed,

                dy:
                Math.sin(angle)*speed,

                alpha:1,

                color:color,

                size:
                Math.random()*3+1

            });


        }

    }





    function animateFireworks(){


        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        ctx.globalCompositeOperation =
        "lighter";



        for(let i=rockets.length-1;i>=0;i--){


            rockets[i].draw();


            if(!rockets[i].update()){

                rockets.splice(i,1);

            }

        }




        for(let i=sparks.length-1;i>=0;i--){


            const p=sparks[i];


            p.x += p.dx;

            p.y += p.dy;


            p.dy +=0.03;


            p.alpha -=0.015;



            if(p.alpha<=0){

                sparks.splice(i,1);

                continue;

            }



            ctx.beginPath();


            ctx.arc(
                p.x,
                p.y,
                p.size,
                0,
                Math.PI*2
            );


            ctx.fillStyle =
            `rgba(255,255,255,${p.alpha})`;


            ctx.shadowBlur=20;

            ctx.shadowColor=p.color;


            ctx.fill();


        }



        requestAnimationFrame(
            animateFireworks
        );

    }



    animateFireworks();




    setInterval(()=>{


        rockets.push(
            new Rocket()
        );


    },1500);


}


console.log("🎆 Step 3 Loaded Successfully");

/*=========================================
        BIRTHDAY SURPRISE
            STEP 4
=========================================*/


/*=========================================
            CONFETTI EFFECT
=========================================*/


function createConfetti(){


    const colors=[

        "#c77dff",
        "#ff9ff3",
        "#ffffff",
        "#ffd166",
        "#7df9ff"

    ];


    for(let i=0;i<100;i++){


        const piece =
        document.createElement("div");


        piece.style.position="fixed";


        piece.style.top="-20px";


        piece.style.left =
        Math.random()*100+"vw";


        piece.style.width="8px";


        piece.style.height="14px";


        piece.style.background =
        colors[
        Math.floor(
        Math.random()*colors.length
        )];


        piece.style.borderRadius="3px";


        piece.style.zIndex="9999";


        piece.style.pointerEvents="none";


        document.body.appendChild(piece);



        piece.animate(

        [

            {

                transform:
                "translateY(0) rotate(0deg)"

            },

            {

                transform:
                `translateY(${window.innerHeight+100}px)
                rotate(720deg)`

            }

        ],

        {

            duration:
            3000 + Math.random()*2000,

            easing:"linear"

        });



        setTimeout(()=>{

            piece.remove();

        },5000);


    }

}




/* Add confetti to gift button */


const surpriseButton =
document.getElementById("giftBtn");


if(surpriseButton){


    surpriseButton.addEventListener(
        "click",
        ()=>{

            createConfetti();

        }
    );


}





/*=========================================
            SCROLL REVEAL
=========================================*/


const animatedCards =
document.querySelectorAll(".glass-card");



const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add(
            "show"
        );


    }


});


},

{

threshold:0.15

});



animatedCards.forEach(card=>{

    observer.observe(card);

});






/*=========================================
            SOFT GLOW EFFECT
=========================================*/


setInterval(()=>{


    document.querySelectorAll(
        ".glass-card"
    ).forEach(card=>{


        card.style.transition=
        "box-shadow 1.5s ease";


        card.style.boxShadow=
        "0 20px 80px rgba(199,125,255,0.35)";


        setTimeout(()=>{


            card.style.boxShadow=
            "";


        },1500);


    });


},6000);







/*=========================================
            PAGE INTRO FADE
=========================================*/


window.addEventListener(
"load",
()=>{


    document.body.animate(

    [

        {

            opacity:0

        },

        {

            opacity:1

        }

    ],

    {

        duration:1200,

        fill:"forwards"

    });


});




console.log(
"💜 Step 4 Loaded Successfully - Website Complete"
);
