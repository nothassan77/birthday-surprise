/*==================================================
        HAPPY BIRTHDAY MAHAM 💜
            SCRIPT.JS
             PART 1
==================================================*/

"use strict";

/*====================================
        DOM ELEMENTS
====================================*/

const loadingScreen = document.getElementById("loadingScreen");
const introSection = document.getElementById("introSection");
const mainContent = document.getElementById("mainContent");

const beginBtn = document.getElementById("beginBtn");
const giftBtn = document.getElementById("giftBtn");

const giftSection = document.getElementById("giftSection");

const musicBtn = document.getElementById("musicBtn");
const birthdayMusic = document.getElementById("birthdayMusic");

const cakeBtn = document.getElementById("cakeBtn");
const flame = document.querySelector(".flame");

const sliderImages = document.querySelectorAll(".slider img");

const fireworksCanvas = document.getElementById("fireworks");
const ctx = fireworksCanvas.getContext("2d");

const cakeBtn = document.getElementById("cakeBtn");
const cake = document.getElementById("cake");



/*====================================
        GLOBAL VARIABLES
====================================*/

let currentSlide = 0;

let musicPlaying = false;

let animationStarted = false;

let particles = [];



/*====================================
        CANVAS SIZE
====================================*/

function resizeCanvas(){

    fireworksCanvas.width = window.innerWidth;

    fireworksCanvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);



/*====================================
        LOADING SCREEN
====================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loadingScreen.style.opacity = "0";

        loadingScreen.style.visibility = "hidden";

    }, 2200);

});



/*====================================
        BEGIN BUTTON
====================================*/

beginBtn.addEventListener("click", () => {

    introSection.style.display = "none";

    mainContent.classList.remove("hidden");

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/*====================================
        OPEN SURPRISE
====================================*/

giftBtn.addEventListener("click", () => {

    giftSection.classList.remove("hidden");

    giftSection.scrollIntoView({

        behavior:"smooth"

    });

    playMusic();

});



/*====================================
        MUSIC FUNCTIONS
====================================*/

function playMusic(){

    birthdayMusic.play()

    .then(()=>{

        musicPlaying = true;

        musicBtn.textContent = "⏸ Pause Music";

    })

    .catch(()=>{});

}

function pauseMusic(){

    birthdayMusic.pause();

    musicPlaying = false;

    musicBtn.textContent = "🎵 Play Music";

}

musicBtn.addEventListener("click",()=>{

    if(musicPlaying){

        pauseMusic();

    }

    else{

        playMusic();

    }

});



/*====================================
        CAKE BUTTON
====================================*/

cakeBtn.addEventListener("click",()=>{

    if(flame){

        flame.classList.add("out");

    }

});

/*==================================================
            SCRIPT.JS
               PART 2
==================================================*/


/*====================================
        AUTO IMAGE SLIDER
====================================*/

function startSlider(){

    if(sliderImages.length <= 1) return;

    setInterval(()=>{

        sliderImages[currentSlide].classList.remove("active");

        currentSlide++;

        if(currentSlide >= sliderImages.length){

            currentSlide = 0;

        }

        sliderImages[currentSlide].classList.add("active");

    },3500);

}

startSlider();




/*====================================
        FLOATING HEARTS
====================================*/

const heartsContainer = document.querySelector(".hearts");

function createHeart(){

    if(!heartsContainer) return;

    if(document.querySelectorAll(".heart").length >= 10) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = ["💜","💖","🤍","✨"];

    heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize =

    (16 + Math.random()*14) + "px";

    heart.style.animationDuration =

    (8 + Math.random()*4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,1800);





/*====================================
        SHOOTING STARS
====================================*/

const shootingLayer =

document.querySelector(".shooting-stars");

function createShootingStar(){

    if(!shootingLayer) return;

    const star = document.createElement("span");

    star.style.left = Math.random()*85 + "%";

    star.style.top = Math.random()*30 + "%";

    shootingLayer.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },8000);

}

setInterval(createShootingStar,7000);





/*====================================
        SCROLL REVEAL
====================================*/

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:0.15

}

);

document.querySelectorAll(

".glass-card,.note-card,.wish-card,.reason-card,.promise-card,.timeline-item"

).forEach(card=>{

    card.classList.add("fade-up");

    observer.observe(card);

});





/*====================================
        STAR TWINKLE
====================================*/

const stars = document.querySelector(".stars");

if(stars){

    setInterval(()=>{

        stars.animate(

        [

            {opacity:.35},

            {opacity:.55},

            {opacity:.35}

        ],

        {

            duration:3000

        });

    },3000);

}

/*==================================================
            SCRIPT.JS
               PART 3
==================================================*/


/*====================================
        FIREWORKS ENGINE
====================================*/

class Particle{

    constructor(x,y,color){

        this.x=x;
        this.y=y;

        this.size=Math.random()*2+1;

        this.color=color;

        this.speedX=(Math.random()-0.5)*6;

        this.speedY=(Math.random()-0.5)*6;

        this.life=70;

    }

    update(){

        this.x+=this.speedX;

        this.y+=this.speedY;

        this.speedY+=0.03;

        this.life--;

    }

    draw(){

        ctx.beginPath();

        ctx.arc(

            this.x,

            this.y,

            this.size,

            0,

            Math.PI*2

        );

        ctx.fillStyle=this.color;

        ctx.shadowBlur=15;

        ctx.shadowColor=this.color;

        ctx.fill();

    }

}



function createFirework(x,y){

    const colors=[

        "#c77dff",

        "#e0aaff",

        "#ffffff",

        "#ff8fab",

        "#ffd6ff"

    ];

    for(let i=0;i<35;i++){

        particles.push(

            new Particle(

                x,

                y,

                colors[Math.floor(Math.random()*colors.length)]

            )

        );

    }

}



function animateFireworks(){

    ctx.clearRect(

        0,

        0,

        fireworksCanvas.width,

        fireworksCanvas.height

    );

    for(let i=particles.length-1;i>=0;i--){

        particles[i].update();

        particles[i].draw();

        if(particles[i].life<=0){

            particles.splice(i,1);

        }

    }

    requestAnimationFrame(animateFireworks);

}

animateFireworks();





/*====================================
        SURPRISE FIREWORKS
====================================*/

giftBtn.addEventListener("click",()=>{

    if(animationStarted) return;

    animationStarted=true;

    for(let i=0;i<3;i++){

        setTimeout(()=>{

            createFirework(

                Math.random()*fireworksCanvas.width,

                Math.random()*250+120

            );

        },i*500);

    }

});





/*====================================
        RANDOM FIREWORK
====================================*/

setInterval(()=>{

    createFirework(

        Math.random()*fireworksCanvas.width,

        Math.random()*250+80

    );

},18000);





/*====================================
        CAKE CELEBRATION
====================================*/

cakeBtn.addEventListener("click",()=>{

    createFirework(

        fireworksCanvas.width/2,

        fireworksCanvas.height/2

    );

});





/*====================================
        BALLOON POP
====================================*/

document.querySelectorAll(".balloon")

.forEach(balloon=>{

    balloon.addEventListener("click",()=>{

        balloon.animate(

        [

            {

                transform:"scale(1)",

                opacity:1

            },

            {

                transform:"scale(1.3)",

                opacity:1

            },

            {

                transform:"scale(0)",

                opacity:0

            }

        ],

        {

            duration:500,

            fill:"forwards"

        });

    });

});

/*==================================================
            SCRIPT.JS
           PART 4 (FINAL)
==================================================*/


/*====================================
        RIPPLE EFFECT
====================================*/

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        ripple.className="ripple";

        const size=Math.max(

            this.clientWidth,

            this.clientHeight

        );

        const rect=this.getBoundingClientRect();

        ripple.style.width=size+"px";
        ripple.style.height=size+"px";

        ripple.style.left=

        (e.clientX-rect.left-size/2)+"px";

        ripple.style.top=

        (e.clientY-rect.top-size/2)+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});




/*====================================
        MUSIC FINISHED
====================================*/

birthdayMusic.addEventListener("ended",()=>{

    musicPlaying=false;

    musicBtn.textContent="🎵 Play Music";

});




/*====================================
        PAGE VISIBILITY
====================================*/

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        birthdayMusic.pause();

    }

    else{

        if(musicPlaying){

            birthdayMusic.play().catch(()=>{});

        }

    }

});




/*====================================
        PREVENT MULTIPLE CLICKS
====================================*/

giftBtn.addEventListener("click",()=>{

    giftBtn.disabled=true;

    setTimeout(()=>{

        giftBtn.disabled=false;

    },1500);

});




/*====================================
        PERFORMANCE CLEANUP
====================================*/

setInterval(()=>{

    particles = particles.filter(

        particle => particle.life > 0

    );

},5000);




/*====================================
        WELCOME FIREWORK
====================================*/

setTimeout(()=>{

    createFirework(

        window.innerWidth*0.3,

        180

    );

    createFirework(

        window.innerWidth*0.7,

        180

    );

},3500);




/*====================================
        CONSOLE MESSAGE
====================================*/

console.log(

"%c💜 Happy Birthday Maham 💜",

"color:#c77dff;font-size:20px;font-weight:bold;"

);

console.log(

"%cMade with ❤️ by Hassan",

"color:#ffffff;font-size:14px;"

);




/*====================================
        THE END
====================================*/

console.log("Website Loaded Successfully ✅");

/* =====================================
            BIRTHDAY CAKE
===================================== */

if (cakeBtn && cake) {

    cakeBtn.addEventListener("click", () => {

        // Cake Cut Animation
        cake.classList.add("cut");

        // Button Change
        cakeBtn.textContent = "🎉 Happy Birthday!";

        cakeBtn.disabled = true;

        // Fireworks
        for (let i = 0; i < 12; i++) {

            setTimeout(() => {

                createFirework();

            }, i * 180);

        }

    });

}
