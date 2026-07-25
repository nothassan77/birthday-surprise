/*==================================================
        JAVASCRIPT PART 1
        LOADER + MUSIC + HERO
==================================================*/

// Elements

const loader = document.getElementById("loader");
const progress = document.querySelector(".loader-progress");

const startBtn = document.getElementById("startBtn");
const musicBtn = document.getElementById("musicBtn");

const bgMusic = document.getElementById("bgMusic");

const hero = document.querySelector(".hero");

// Loader Progress

let loadValue = 0;

const loading = setInterval(() => {

loadValue++;

progress.style.width = loadValue + "%";

if(loadValue >= 100){

clearInterval(loading);

setTimeout(() => {

loader.classList.add("hide");

document.body.style.overflowY = "auto";

showToast("✨ Welcome!");

},600);

}

},30);

// Lock Scroll Until Loader Ends

document.body.style.overflow = "hidden";

// Music

let musicPlaying = false;

function playMusic(){

bgMusic.play();

musicPlaying = true;

musicBtn.classList.add("active");

musicBtn.innerHTML = "🔊 Music On";

}

function pauseMusic(){

bgMusic.pause();

musicPlaying = false;

musicBtn.classList.remove("active");

musicBtn.innerHTML = "🎵 Music";

}

musicBtn.addEventListener("click",()=>{

if(musicPlaying){

pauseMusic();

}else{

playMusic();

}

});

// Start Journey

startBtn.addEventListener("click",()=>{

playMusic();

showToast("💜 Enjoy Your Journey");

document.querySelector(".about").scrollIntoView({

behavior:"smooth"

});

});

// Hero Fade

window.addEventListener("scroll",()=>{

const y = window.scrollY;

hero.style.opacity = 1 - y/900;

hero.style.transform =
`translateY(${y*0.15}px)`;

});

// Toast

function showToast(text){

const container = document.getElementById("toastContainer");

const toast = document.createElement("div");

toast.className = "toast";

toast.innerHTML = text;

container.appendChild(toast);

setTimeout(()=>{

toast.classList.add("hide");

setTimeout(()=>{

toast.remove();

},500);

},2500);

}

// Random Welcome Toast

setTimeout(()=>{

showToast("🎂 Happy Birthday!");

},3500);

// Keyboard Shortcut

document.addEventListener("keydown",(e)=>{

if(e.code==="Space"){

e.preventDefault();

musicBtn.click();

}

});

// Prevent Multiple Music Starts

bgMusic.volume = 0.45;

bgMusic.loop = true;

// End Part 1

/* ===============================
     PREMIUM ENVELOPE SCRIPT
================================ */

const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openLetter");
const closeBtn = document.getElementById("closeLetter");
const envTop = document.getElementById("envTop");

openBtn.addEventListener("click", () => {
    envelope.classList.add("open");

    setTimeout(() => {
        envTop.style.display = "none";
    }, 800);
});

closeBtn.addEventListener("click", () => {
    envTop.style.display = "block";

    setTimeout(() => {
        envelope.classList.remove("open");
    }, 20);
});


/*==================================================
        JAVASCRIPT PART 4
        PREMIUM MEMORY GALLERY + LIGHTBOX
==================================================*/

// Elements

const memoryCards = document.querySelectorAll(".memory-card");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

// Open Lightbox

memoryCards.forEach(card=>{

const image=card.querySelector("img");

card.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImage.src=image.src;

lightboxImage.alt=image.alt;

document.body.style.overflow="hidden";

showToast("📸 Memory Opened");

if(typeof createSparkle==="function"){

for(let i=0;i<18;i++){

setTimeout(createSparkle,i*80);

}

}

});

});

// Close Button

closeLightbox.addEventListener("click",closeGallery);

// Click Outside

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

closeGallery();

}

});

// ESC Key

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closeGallery();

}

});

// Close Function

function closeGallery(){

lightbox.style.display="none";

lightboxImage.src="";

document.body.style.overflowY="auto";

}

// Image Animation

lightboxImage.addEventListener("load",()=>{

lightboxImage.animate([

{

transform:"scale(.8)",

opacity:0

},

{

transform:"scale(1)",

opacity:1

}

],{

duration:400,

fill:"forwards"

});

});

// Hover Animation

memoryCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform=

"translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

// Auto Glow

setInterval(()=>{

const randomCard=

memoryCards[Math.floor(

Math.random()*memoryCards.length

)];

randomCard.animate([

{

boxShadow:

"0 0 0 rgba(0,0,0,0)"

},

{

boxShadow:

"0 0 35px rgba(217,70,239,.45)"

},

{

boxShadow:

"0 0 0 rgba(0,0,0,0)"

}

],{

duration:1800

});

},3500);

// Floating Hearts

setInterval(()=>{

if(typeof createHeart==="function"){

createHeart();

}

},3000);

// End Part 4

/*==================================================
        JAVASCRIPT PART 5
        PREMIUM GIFT BOX + SURPRISE
==================================================*/

// Elements

const giftBox = document.getElementById("giftBox");
const giftBtn = document.getElementById("giftBtn");
const giftSurprise = document.getElementById("giftSurprise");

let giftOpened = false;

// Open Gift

giftBtn.addEventListener("click", () => {

if(giftOpened) return;

giftOpened = true;

// Open Animation

giftBox.classList.add("open");

giftBtn.disabled = true;

giftBtn.innerHTML = "🎉 Gift Opened";

// Show Surprise

setTimeout(() => {

giftSurprise.style.display = "block";

giftSurprise.style.animation = "giftReveal .8s ease";

}, 700);

// Toast

showToast("🎁 Surprise Unlocked!");

// Fireworks

if(typeof launchFireworks === "function"){

launchFireworks();

setTimeout(launchFireworks,600);

}

// Hearts

if(typeof createHeart === "function"){

for(let i=0;i<35;i++){

setTimeout(createHeart,i*80);

}

}

// Sparkles

if(typeof createSparkle === "function"){

for(let i=0;i<50;i++){

setTimeout(createSparkle,i*50);

}

}

// Celebration Text

const text=document.getElementById("celebrationText");

if(text){

text.innerHTML="💜 Best Wishes 💜";

text.style.opacity="1";

setTimeout(()=>{

text.style.opacity="0";

},3000);

}

});

// Hover Effect

giftBox.addEventListener("mouseenter",()=>{

giftBox.style.filter=

"drop-shadow(0 0 30px #d946ef)";

});

giftBox.addEventListener("mouseleave",()=>{

giftBox.style.filter="none";

});

// Floating Animation

setInterval(()=>{

if(!giftOpened){

giftBox.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-12px)"

},

{

transform:"translateY(0)"

}

],{

duration:2600,

iterations:1

});

}

},2800);

// Auto Sparkles

setInterval(()=>{

if(typeof createSparkle==="function"){

createSparkle();

}

},1800);

// Auto Hearts

setInterval(()=>{

if(typeof createHeart==="function"){

createHeart();

}

},3000);

// End Part 5

/*==================================================
        JAVASCRIPT PART 6
        FIREWORKS + HEARTS + SPARKLES
==================================================*/

// Canvas

const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

// Resize

window.addEventListener("resize",()=>{

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

});

// Firework Particle

class Firework{

constructor(x,y,color){

this.x=x;
this.y=y;

this.color=color;

this.radius=Math.random()*3+2;

this.speedX=(Math.random()-0.5)*10;

this.speedY=(Math.random()-0.5)*10;

this.alpha=1;

}

update(){

this.x+=this.speedX;

this.y+=this.speedY;

this.speedY+=0.05;

this.alpha-=0.015;

}

draw(){

ctx.save();

ctx.globalAlpha=this.alpha;

ctx.beginPath();

ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);

ctx.fillStyle=this.color;

ctx.shadowBlur=18;

ctx.shadowColor=this.color;

ctx.fill();

ctx.restore();

}

}

// Launch Fireworks

function launchFireworks(){

const colors=[

"#ffffff",

"#d946ef",

"#a855f7",

"#7b2cff",

"#ff66d9"

];

const x=Math.random()*canvas.width;

const y=Math.random()*canvas.height*0.55+60;

for(let i=0;i<80;i++){

particles.push(

new Firework(

x,

y,

colors[Math.floor(Math.random()*colors.length)]

)

);

}

}

// Animation

function animateFireworks(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let i=particles.length-1;i>=0;i--){

particles[i].update();

particles[i].draw();

if(particles[i].alpha<=0){

particles.splice(i,1);

}

}

requestAnimationFrame(animateFireworks);

}

animateFireworks();

// Floating Hearts

function createHeart(){

const container=document.getElementById("heartContainer");

if(!container) return;

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💜";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.animationDuration=(5+Math.random()*3)+"s";

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

// Sparkles

function createSparkle(){

const container=document.getElementById("sparkleContainer");

if(!container) return;

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

sparkle.style.animationDuration=(2+Math.random()*2)+"s";

container.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},4000);

}

// Auto Fireworks Every 15 Seconds

setInterval(()=>{

launchFireworks();

},15000);

// Random Hearts

setInterval(()=>{

createHeart();

},2500);

// Random Sparkles

setInterval(()=>{

createSparkle();

},1200);

// End Part 6

/*==================================================
        JAVASCRIPT PART 7
        FINAL EFFECTS + INITIALIZATION
==================================================*/

// Scroll Reveal

const revealItems=document.querySelectorAll(

".reveal,.fade-left,.fade-right,.zoom-in,.rotate-in"

);

function revealOnScroll(){

const trigger=window.innerHeight*0.85;

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.classList.add("active");

}

});

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

// Scroll To Top

const scrollTopBtn=document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollTopBtn.classList.add("show");

}else{

scrollTopBtn.classList.remove("show");

}

});

scrollTopBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Custom Cursor

const cursorDot=document.querySelector(".cursor-dot");

const cursorOutline=document.querySelector(".cursor-outline");

const mouseGlow=document.querySelector(".mouse-glow");

document.addEventListener("mousemove",(e)=>{

const x=e.clientX;

const y=e.clientY;

if(cursorDot){

cursorDot.style.left=x+"px";

cursorDot.style.top=y+"px";

}

if(cursorOutline){

cursorOutline.style.left=x+"px";

cursorOutline.style.top=y+"px";

}

if(mouseGlow){

mouseGlow.style.left=x+"px";

mouseGlow.style.top=y+"px";

}

});

// Cursor Hover

document.querySelectorAll(

"button,a,.memory-card,.gift-box,.cake,.envelope"

).forEach(el=>{

el.addEventListener("mouseenter",()=>{

cursorOutline?.classList.add("hover");

});

el.addEventListener("mouseleave",()=>{

cursorOutline?.classList.remove("hover");

});

});

// Celebrate Button

const celebrateBtn=document.getElementById("celebrateBtn");

if(celebrateBtn){

celebrateBtn.addEventListener("click",()=>{

showToast("🎉 Happy Birthday! 🎂");

for(let i=0;i<6;i++){

setTimeout(()=>{

if(typeof launchFireworks==="function"){

launchFireworks();

}

},i*500);

}

for(let i=0;i<60;i++){

setTimeout(()=>{

createHeart?.();

createSparkle?.();

},i*60);

}

});

}

// Welcome Console Message

console.log(

"%cMade with ❤️ by Hassan",

"color:#d946ef;font-size:18px;font-weight:bold;"

);

// Initial Toast

window.addEventListener("load",()=>{

setTimeout(()=>{

showToast("💜 Welcome to this Special Surprise!");

},1000);

});

// Prevent Image Drag

document.querySelectorAll("img").forEach(img=>{

img.draggable=false;

});

// Disable Right Click (Optional)

document.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});

// Final Initialization

document.body.classList.add("website-loaded");

console.log("✨ Premium Birthday Website Loaded Successfully");

/* ===========================
      CONFETTI
=========================== */

function createCakeConfetti(){

for(let i=0;i<180;i++){

const conf=document.createElement("div");

conf.style.position="fixed";

conf.style.left=Math.random()*100+"vw";

conf.style.top="-20px";

conf.style.width=(5+Math.random()*8)+"px";

conf.style.height=conf.style.width;

conf.style.borderRadius="50%";

conf.style.pointerEvents="none";

conf.style.zIndex="999999";

conf.style.background=

`hsl(${Math.random()*360},100%,65%)`;

document.body.appendChild(conf);

const x=(Math.random()-0.5)*400;

const y=window.innerHeight+150;

conf.animate([

{

transform:"translate(0,0) rotate(0deg)",

opacity:1

},

{

transform:`translate(${x}px,${y}px) rotate(${Math.random()*720}deg)`,

opacity:0

}

],{

duration:3500+Math.random()*1500,

easing:"ease-out"

});

setTimeout(()=>{

conf.remove();

},5000);

}

}

/* ===========================
      CONFETTI
=========================== */

function createConfetti(){

    for(let i=0;i<120;i++){

        const conf=document.createElement("div");

        conf.className="confetti";

        conf.style.left=Math.random()*100+"vw";

        conf.style.top="-20px";

        conf.style.width=(6+Math.random()*8)+"px";

        conf.style.height=conf.style.width;

        conf.style.position="fixed";

        conf.style.borderRadius="50%";

        conf.style.pointerEvents="none";

        conf.style.zIndex="99999";

        conf.style.background=`hsl(${Math.random()*360},100%,70%)`;

        conf.style.transition="4s linear";

        document.body.appendChild(conf);

        requestAnimationFrame(()=>{

            conf.style.transform=`translateY(${window.innerHeight+100}px)
            rotate(${Math.random()*720}deg)`;

            conf.style.opacity="0";

        });

        setTimeout(()=>{

            conf.remove();

        },4200);

    }

}

/*==================================
      PREMIUM CAKE ANIMATION
==================================*/

// Floating Cake

gsap.to("#cake",{

    y:-10,

    duration:2.5,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

// Flickering Flames

gsap.to(".flame",{

    scale:1.12,

    duration:0.18,

    repeat:-1,

    yoyo:true,

    stagger:0.04,

    ease:"sine.inOut"

});

// Candle Glow

gsap.to(".flame",{

    filter:"drop-shadow(0 0 20px gold)",

    duration:0.35,

    repeat:-1,

    yoyo:true

});

// Cake Glow

gsap.to(".cake-body",{

    boxShadow:
    "0 0 40px rgba(255,120,220,.45)",

    duration:2,

    repeat:-1,

    yoyo:true

});

// Cherries Animation

gsap.to(".cherry",{

    y:-3,

    duration:1.5,

    repeat:-1,

    yoyo:true,

    stagger:0.2

});

// Message Fade

gsap.from(".cake-message",{

    opacity:0,

    y:30,

    duration:1.8,

    ease:"power2.out"

});

/* ===========================
      Hearts
=========================== */

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="💜";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(18+Math.random()*18)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="99999";

document.body.appendChild(heart);

heart.animate([

{

transform:"translateY(0)",

opacity:1

},

{

transform:"translateY(-110vh)",

opacity:0

}

],{

duration:3500,

easing:"ease-out"

});

setTimeout(()=>heart.remove(),3500);

}

/* ===========================
      Confetti
=========================== */

function cakeConfetti(){

for(let i=0;i<180;i++){

const c=document.createElement("div");

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.width=(4+Math.random()*8)+"px";

c.style.height=c.style.width;

c.style.background=

`hsl(${Math.random()*360},100%,65%)`;

c.style.borderRadius="50%";

c.style.pointerEvents="none";

c.style.zIndex="999999";

document.body.appendChild(c);

c.animate([

{

transform:"translateY(0)",

opacity:1

},

{

transform:

`translate(${(Math.random()-.5)*300}px,${window.innerHeight+100}px)
rotate(${Math.random()*720}deg)`,

opacity:0

}

],{

duration:3000+Math.random()*1500,

easing:"ease-out"

});

setTimeout(()=>c.remove(),5000);

}

}
