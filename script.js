/*==================================================
            HAPPY BIRTHDAY WEBSITE
                PART - 1
==================================================*/

"use strict";

/*==================================================
                DOM ELEMENTS
==================================================*/

const giftBtn = document.getElementById("giftBtn");

const giftSection = document.getElementById("giftSection");

const musicBtn = document.getElementById("musicBtn");

const birthdayMusic = document.getElementById("birthdayMusic");


/*==================================================
            SMOOTH SCROLL FUNCTION
==================================================*/

function smoothScroll(target){

    if(!target) return;

    target.scrollIntoView({

        behavior:"smooth",

        block:"start"

    });

}


/*==================================================
            OPEN SURPRISE SECTION
==================================================*/

if(giftBtn){

    giftBtn.addEventListener("click",()=>{

        giftSection.classList.remove("hidden");

        setTimeout(()=>{

            smoothScroll(giftSection);

        },300);

    });

}


/*==================================================
            BACKGROUND MUSIC
==================================================*/

let musicPlaying=false;

if(musicBtn && birthdayMusic){

    musicBtn.addEventListener("click",()=>{

        if(!musicPlaying){

            birthdayMusic.play();

            musicBtn.textContent="⏸ Pause Music";

            musicPlaying=true;

        }

        else{

            birthdayMusic.pause();

            musicBtn.textContent="🎵 Play Music";

            musicPlaying=false;

        }

    });

}


/*==================================================
            IMAGE PRELOADER
==================================================*/

function preloadImages(){

    const images=document.querySelectorAll(".slider img");

    images.forEach(img=>{

        const preload=new Image();

        preload.src=img.src;

    });

}

window.addEventListener("load",preloadImages);


/*==================================================
            WINDOW RESIZE
==================================================*/

window.addEventListener("resize",()=>{

    // Canvas size Part 3 me update hogi

});


/*==================================================
            END OF PART - 1
==================================================*/

/*==================================================
            HAPPY BIRTHDAY WEBSITE
                PART - 2
==================================================*/


/*==================================================
                FLOATING HEARTS
==================================================*/

const heartsContainer = document.querySelector(".hearts");

const heartIcons = [
    "💜",
    "💖",
    "💗",
    "🤍",
    "✨",
    "🌸"
];


function createHeart(){

    if(!heartsContainer) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
    heartIcons[Math.floor(Math.random()*heartIcons.length)];

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.fontSize =
    (16 + Math.random()*18) + "px";

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




/*==================================================
                SPARKLES
==================================================*/

function createSparkle(){

    if(!heartsContainer) return;

    const sparkle = document.createElement("div");

    sparkle.className = "heart";

    sparkle.innerHTML = "✦";

    sparkle.style.left =
    Math.random()*100 + "vw";

    sparkle.style.fontSize =
    (10 + Math.random()*10) + "px";

    sparkle.style.animationDuration =
    (5 + Math.random()*4) + "s";

    sparkle.style.opacity = .8;

    heartsContainer.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },9000);

}

setInterval(createSparkle,1200);




/*==================================================
            SHOOTING STARS
==================================================*/

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


/* Random interval */

function shootingLoop(){

    createShootingStar();

    const delay =
    3500 + Math.random()*5000;

    setTimeout(shootingLoop,delay);

}

shootingLoop();




/*==================================================
            GLOWING PARTICLES
==================================================*/

function createParticle(){

    if(!heartsContainer) return;

    const particle = document.createElement("div");

    particle.style.position = "fixed";

    particle.style.left =
    Math.random()*100 + "vw";

    particle.style.bottom = "-10px";

    particle.style.width = "4px";

    particle.style.height = "4px";

    particle.style.borderRadius = "50%";

    particle.style.pointerEvents = "none";

    particle.style.background = "white";

    particle.style.opacity = ".7";

    particle.style.boxShadow =
    "0 0 12px white";

    particle.style.zIndex = "2";

    particle.animate([

        {

            transform:"translateY(0)",

            opacity:.8

        },

        {

            transform:"translateY(-120vh)",

            opacity:0

        }

    ],{

        duration:7000 + Math.random()*3000,

        easing:"linear"

    });

    document.body.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },10000);

}

setInterval(createParticle,450);




/*==================================================
            END OF PART - 2
==================================================*/

/*==================================================
            HAPPY BIRTHDAY WEBSITE
                PART - 3
==================================================*/


/*==================================================
                IMAGE SLIDER
==================================================*/

const slides = document.querySelectorAll(".slider img");

let currentSlide = 0;

function nextSlide(){

    if(slides.length === 0) return;

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    slides[currentSlide].classList.add("active");

}

setInterval(nextSlide,3500);




/*==================================================
                FIREWORKS
==================================================*/

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fireworks = [];
const particles = [];

const colors = [
    "#ffffff",
    "#ffd166",
    "#ff9ff3",
    "#c77dff",
    "#9d4edd",
    "#7df9ff"
];


/* Rocket */

class Firework{

    constructor(){

        this.x = Math.random() * canvas.width;

        this.y = canvas.height;

        this.targetY = 80 + Math.random() * (canvas.height * 0.35);

        this.speed = 5 + Math.random() * 2;

        this.color = colors[Math.floor(Math.random()*colors.length)];

    }

    update(){

        this.y -= this.speed;

        if(this.y <= this.targetY){

            explode(this.x,this.y,this.color);

            return false;

        }

        return true;

    }

    draw(){

        ctx.beginPath();

        ctx.arc(this.x,this.y,3,0,Math.PI*2);

        ctx.fillStyle = this.color;

        ctx.shadowBlur = 15;

        ctx.shadowColor = this.color;

        ctx.fill();

    }

}




/* Explosion */

function explode(x,y,color){

    for(let i=0;i<80;i++){

        const angle = Math.random()*Math.PI*2;

        const speed = Math.random()*4+1;

        particles.push({

            x,

            y,

            dx:Math.cos(angle)*speed,

            dy:Math.sin(angle)*speed,

            size:Math.random()*3+1,

            alpha:1,

            color

        });

    }

}




/* Animation */

function animateFireworks(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.globalCompositeOperation = "lighter";

    for(let i=fireworks.length-1;i>=0;i--){

        fireworks[i].draw();

        if(!fireworks[i].update()){

            fireworks.splice(i,1);

        }

    }

    for(let i=particles.length-1;i>=0;i--){

        const p = particles[i];

        p.x += p.dx;

        p.y += p.dy;

        p.dy += 0.03;

        p.alpha -= 0.012;

        if(p.alpha <= 0){

            particles.splice(i,1);

            continue;

        }

        ctx.beginPath();

        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;

        ctx.shadowBlur = 20;

        ctx.shadowColor = p.color;

        ctx.fill();

    }

    requestAnimationFrame(animateFireworks);

}

animateFireworks();




/* Launch */

setInterval(()=>{

    fireworks.push(new Firework());

},1300);




/*==================================================
                RESIZE
==================================================*/

window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

});



/*==================================================
            END OF PART - 3
==================================================*/

/*==================================================
            HAPPY BIRTHDAY WEBSITE
                PART - 4
==================================================*/


/*==================================================
                SCROLL REVEAL
==================================================*/

const revealElements = document.querySelectorAll(
    ".glass-card"
);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.animate(

                [

                    {
                        opacity:0,
                        transform:"translateY(40px)"
                    },

                    {
                        opacity:1,
                        transform:"translateY(0)"
                    }

                ],

                {

                    duration:900,

                    easing:"ease-out",

                    fill:"forwards"

                }

            );

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(card=>{

    revealObserver.observe(card);

});




/*==================================================
            TYPEWRITER EFFECT
==================================================*/

const letter = document.querySelector(".letter");

if(letter){

    const fullText = letter.innerHTML;

    letter.innerHTML = "";

    let index = 0;

    function typeWriter(){

        if(index < fullText.length){

            letter.innerHTML += fullText.charAt(index);

            index++;

            setTimeout(typeWriter,18);

        }

    }

    setTimeout(typeWriter,1200);

}




/*==================================================
                CONFETTI
==================================================*/

function createConfetti(){

    for(let i=0;i<120;i++){

        const confetti = document.createElement("div");

        confetti.style.position="fixed";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top="-20px";

        confetti.style.width="8px";

        confetti.style.height="14px";

        confetti.style.borderRadius="3px";

        confetti.style.pointerEvents="none";

        confetti.style.zIndex="9999";

        confetti.style.background=[

            "#ff69b4",

            "#c77dff",

            "#ffffff",

            "#ffd166",

            "#7df9ff"

        ][Math.floor(Math.random()*5)];

        document.body.appendChild(confetti);

        confetti.animate(

        [

            {

                transform:"translateY(0) rotate(0deg)",

                opacity:1

            },

            {

                transform:`translateY(${window.innerHeight+50}px)
                rotate(${Math.random()*720}deg)`,

                opacity:0

            }

        ],

        {

            duration:3500+Math.random()*1500,

            easing:"linear"

        });

        setTimeout(()=>{

            confetti.remove();

        },5000);

    }

}



if(giftBtn){

    giftBtn.addEventListener("click",()=>{

        createConfetti();

    });

}




/*==================================================
            RANDOM CARD GLOW
==================================================*/

setInterval(()=>{

    document.querySelectorAll(".glass-card").forEach(card=>{

        card.animate(

        [

            {

                boxShadow:

                "0 20px 60px rgba(0,0,0,.35)"

            },

            {

                boxShadow:

                "0 20px 80px rgba(199,125,255,.45)"

            },

            {

                boxShadow:

                "0 20px 60px rgba(0,0,0,.35)"

            }

        ],

        {

            duration:3000,

            easing:"ease-in-out"

        });

    });

},5000);




/*==================================================
                PAGE LOADED
==================================================*/

window.addEventListener("load",()=>{

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




/*==================================================
            END OF SCRIPT
==================================================*/

console.log(

"%c💜 Happy Birthday Maham 💜",

"color:#c77dff;font-size:20px;font-weight:bold;"

);

console.log(

"%cWebsite Made With Love By Hassan 🌸",

"color:white;font-size:15px;"

);
