/* ==========================================
   JAVASCRIPT PART 1
   LOADING SCREEN + INITIAL SETUP
========================================== */

const loadingScreen = document.getElementById("loading-screen");
const website = document.getElementById("website");

const progressFill = document.querySelector(".progress-fill");
const progressPercent = document.querySelector(".progress-percent");

let progress = 0;

/* Hide Website */

website.style.display = "none";

/* Loading */

const loadingInterval = setInterval(() => {

    progress++;

    if(progressFill){

        progressFill.style.width = progress + "%";

    }

    if(progressPercent){

        progressPercent.innerHTML = progress + "%";

    }

    if(progress >= 100){

        clearInterval(loadingInterval);

        setTimeout(() => {

            loadingScreen.classList.add("hide");

            website.style.display = "block";

            document.body.style.overflowY = "auto";

            startEntranceAnimation();

        },700);

    }

},40);

/* Disable Scroll */

document.body.style.overflow = "hidden";

/* Entrance Animation */

function startEntranceAnimation(){

    const heroCard =
    document.querySelector(".hero-card");

    if(heroCard){

        heroCard.style.opacity="0";

        heroCard.style.transform="translateY(60px)";

        setTimeout(()=>{

            heroCard.style.transition="1s";

            heroCard.style.opacity="1";

            heroCard.style.transform="translateY(0)";

        },200);

    }

}

/* Random Welcome */

const welcomeMessages = [

"✨ Welcome...",
"🎂 Preparing Surprise...",
"💜 Loading Memories...",
"🎁 Almost Ready...",
"🌸 Creating Magic..."

];

const loadingText =
document.querySelector(".loading-text");

let textIndex = 0;

setInterval(()=>{

    if(loadingText){

        loadingText.innerHTML =
        welcomeMessages[textIndex];

        textIndex++;

        if(textIndex>=welcomeMessages.length){

            textIndex=0;

        }

    }

},1500);

/* Prevent Right Click */

document.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});

/* Disable Image Drag */

document.querySelectorAll("img").forEach(img=>{

    img.draggable=false;

});

/* Page Loaded */

window.addEventListener("load",()=>{

    console.log("Birthday Website Loaded Successfully 💜");

});

/* Small Fade Effect */

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="1s";

        document.body.style.opacity="1";

    },100);

});

/* ==========================================
   JAVASCRIPT PART 2
   MUSIC + BEGIN JOURNEY + SCROLL
========================================== */

const beginBtn = document.getElementById("beginBtn");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let musicPlaying = false;

/* -----------------------
      Begin Journey
------------------------ */

if(beginBtn){

beginBtn.addEventListener("click",()=>{

const cakeSection =
document.querySelector(".cake-section");

if(cakeSection){

cakeSection.scrollIntoView({

behavior:"smooth"

});

}

});

}

/* -----------------------
      Music Button
------------------------ */

if(musicBtn && bgMusic){

musicBtn.addEventListener("click",()=>{

if(musicPlaying){

bgMusic.pause();

musicPlaying=false;

musicBtn.innerHTML="🎵 Music";

showToast("⏸ Music Paused");

}else{

bgMusic.play();

musicPlaying=true;

musicBtn.innerHTML="⏸ Pause";

showToast("🎶 Music Playing");

}

});

}

/* -----------------------
      Auto Play Attempt
------------------------ */

window.addEventListener("click",()=>{

if(!musicPlaying && bgMusic){

bgMusic.play().then(()=>{

musicPlaying=true;

musicBtn.innerHTML="⏸ Pause";

}).catch(()=>{});

}

},{once:true});

/* -----------------------
      Smooth Fade Sections
------------------------ */

const sections =
document.querySelectorAll("section");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(70px)";

section.style.transition="1s ease";

observer.observe(section);

});

/* -----------------------
      Hero Floating
------------------------ */

const heroCard =
document.querySelector(".hero-card");

if(heroCard){

setInterval(()=>{

heroCard.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-10px)"

},

{

transform:"translateY(0px)"

}

],{

duration:3500,

iterations:1

});

},3500);

}

/* -----------------------
      Simple Toast
------------------------ */

function showToast(message){

const container =
document.getElementById("toastContainer");

if(!container) return;

const toast =
document.createElement("div");

toast.className="toast";

toast.innerHTML=message;

container.appendChild(toast);

setTimeout(()=>{

toast.remove();

},2500);

}

/* -----------------------
      Keyboard Shortcut
------------------------ */

document.addEventListener("keydown",(e)=>{

if(e.code==="Space"){

e.preventDefault();

musicBtn.click();

}

});

/* -----------------------
      Welcome Console
------------------------ */

console.log("🎂 Music & Journey Ready 💜");

/* ==========================================
   JAVASCRIPT PART 3
   HERO EFFECTS + HEARTS + SPARKLES
========================================== */

const heartContainer =
document.getElementById("heartContainer");

const sparkleContainer =
document.getElementById("sparkleContainer");

/* ==========================
      Floating Hearts
========================== */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💜";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
(18+Math.random()*18)+"px";

heart.style.animationDuration=
(4+Math.random()*4)+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,700);

/* ==========================
      Sparkles
========================== */

function createSparkle(){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.innerHTML="✨";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top="100vh";

sparkle.style.fontSize=
(12+Math.random()*16)+"px";

sparkle.style.animationDuration=
(3+Math.random()*3)+"s";

sparkleContainer.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},6000);

}

setInterval(createSparkle,900);

/* ==========================
      Hero Tilt Effect
========================== */

const heroCard=
document.querySelector(".hero-card");

document.addEventListener("mousemove",(e)=>{

if(!heroCard) return;

let x=
(window.innerWidth/2-e.clientX)/35;

let y=
(window.innerHeight/2-e.clientY)/35;

heroCard.style.transform=

`rotateY(${-x}deg)
 rotateX(${y}deg)`;

});

document.addEventListener("mouseleave",()=>{

if(heroCard){

heroCard.style.transform=
"rotateX(0deg) rotateY(0deg)";

}

});

/* ==========================
      Scroll Animation
========================== */

const animatedItems=
document.querySelectorAll(

".hero-card,.cake-card,.envelope-card,.memory-card,.gift-card,.finale-card"

);

const revealObserver=

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=

"translateY(0px)";

}

});

},{threshold:.20});

animatedItems.forEach(item=>{

item.style.opacity="0";

item.style.transform=

"translateY(70px)";

item.style.transition="1s ease";

revealObserver.observe(item);

});

/* ==========================
      Mouse Glow
========================== */

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="#d946ef";
glow.style.boxShadow=
"0 0 30px #d946ef";
glow.style.zIndex="99999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-9+"px";

glow.style.top=e.clientY-9+"px";

});

/* ==========================
      Welcome Animation
========================== */

window.addEventListener("load",()=>{

if(heroCard){

heroCard.animate([

{

opacity:0,

transform:
"translateY(80px)"

},

{

opacity:1,

transform:
"translateY(0px)"

}

],{

duration:1200,

fill:"forwards"

});

}

});

console.log("✨ Hero Effects Loaded");

/* ==========================================
   JAVASCRIPT PART 4
   CAKE CUTTING ANIMATION
========================================== */

const cakeBtn = document.getElementById("cakeBtn");
const cakeMessage = document.getElementById("cakeMessage");
const flames = document.querySelectorAll(".flame");
const cake = document.querySelector(".cake");

let cakeCut = false;

/* ==========================
      Cake Button
========================== */

if(cakeBtn){

cakeBtn.addEventListener("click",()=>{

if(cakeCut) return;

cakeCut = true;

/* Blow Candles */

flames.forEach((flame,index)=>{

setTimeout(()=>{

flame.style.opacity="0";
flame.style.transform="scale(0)";

},index*250);

});

/* Cake Animation */

setTimeout(()=>{

cake.animate([

{
transform:"scale(1)"
},

{
transform:"scale(1.08)"
},

{
transform:"scale(.96)"
},

{
transform:"scale(1)"
}

],{

duration:1200,
fill:"forwards"

});

},900);

/* Show Message */

setTimeout(()=>{

cakeMessage.style.display="block";

cakeMessage.innerHTML=

"🎉 Happy Birthday! 💜<br>May all your dreams come true!";

showToast("🎂 Cake Cut Successfully!");

launchMiniConfetti();

},1600);

/* Disable Button */

cakeBtn.disabled=true;

cakeBtn.innerHTML="✅ Cake Cut";

});

}

/* ==========================
      Mini Confetti
========================== */

function launchMiniConfetti(){

const container=
document.getElementById("particleContainer");

for(let i=0;i<80;i++){

const confetti=
document.createElement("div");

confetti.className="particle";

confetti.style.left=
Math.random()*100+"vw";

confetti.style.top=
Math.random()*40+"vh";

confetti.style.background=

[
"#8b5cf6",
"#d946ef",
"#ffffff",
"#facc15",
"#ec4899"

][Math.floor(Math.random()*5)];

confetti.style.width=
(5+Math.random()*8)+"px";

confetti.style.height=
confetti.style.width;

container.appendChild(confetti);

confetti.animate([

{

transform:"translateY(0) rotate(0deg)",
opacity:1

},

{

transform:
`translate(
${(Math.random()-0.5)*500}px,
${400+Math.random()*300}px)
rotate(${720+Math.random()*720}deg)`,

opacity:0

}

],{

duration:2500+Math.random()*1500,

easing:"ease-out"

});

setTimeout(()=>{

confetti.remove();

},4000);

}

}

/* ==========================
      Cake Hover
========================== */

if(cake){

cake.addEventListener("mouseenter",()=>{

cake.style.transform="scale(1.05)";

});

cake.addEventListener("mouseleave",()=>{

cake.style.transform="scale(1)";

});

}

/* ==========================
      Sound Effect
========================== */

function playCakeSound(){

const audio=new Audio();

audio.src="music/cut.mp3";

audio.volume=0.5;

audio.play().catch(()=>{});

}

/* Optional */

if(cakeBtn){

cakeBtn.addEventListener("click",()=>{

playCakeSound();

});

}

console.log("🎂 Cake Animation Loaded");

/* ==========================================
   JAVASCRIPT PART 5
   ENVELOPE + LETTER
========================================== */

const envelope =
document.getElementById("envelope");

const openLetterBtn =
document.getElementById("openLetterBtn");

const closeLetterBtn =
document.getElementById("closeLetterBtn");

const letterContent =
document.getElementById("letterContent");

/* Letter Text */

const letterMessage = `

Happy Birthday My Best Friend 💜

Today is your special day and I just want
to remind you how amazing you are.

Thank you for always bringing happiness,
positivity and beautiful memories into life.

May this birthday bring endless smiles,
good health, success and countless blessings.

Never stop believing in yourself because
you are capable of achieving everything.

Enjoy every moment of your day and keep
smiling forever.

— Hassan 💜

`;

/* ==========================
      Type Writer
========================== */

let typingIndex = 0;
let typingInterval;

function startTyping(){

letterContent.innerHTML="";
typingIndex = 0;

clearInterval(typingInterval);

typingInterval = setInterval(()=>{

if(typingIndex < letterMessage.length){

letterContent.innerHTML +=
letterMessage.charAt(typingIndex);

typingIndex++;

}else{

clearInterval(typingInterval);

}

},35);

}

/* ==========================
      Open Letter
========================== */

openLetterBtn.addEventListener("click",()=>{

envelope.classList.add("open");

showToast("💌 Letter Opened");

setTimeout(()=>{

startTyping();

},600);

});

/* ==========================
      Close Letter
========================== */

closeLetterBtn.addEventListener("click",()=>{

envelope.classList.remove("open");

clearInterval(typingInterval);

letterContent.innerHTML="";

showToast("📩 Letter Closed");

});

/* ==========================
      Hover Animation
========================== */

envelope.addEventListener("mouseenter",()=>{

envelope.style.transform =
"scale(1.05) rotate(-2deg)";

});

envelope.addEventListener("mouseleave",()=>{

envelope.style.transform =
"scale(1) rotate(0deg)";

});

/* ==========================
      Floating Effect
========================== */

setInterval(()=>{

envelope.animate([

{
transform:"translateY(0px)"
},

{
transform:"translateY(-8px)"
},

{
transform:"translateY(0px)"
}

],{

duration:2500,

iterations:1

});

},2600);

/* ==========================
      Keyboard Shortcut
========================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="l" || e.key==="L"){

openLetterBtn.click();

}

});

/* ==========================
      Console
========================== */

console.log("💌 Envelope Ready");

/* ==========================================
   JAVASCRIPT PART 6
   MEMORY GALLERY
========================================== */

const memoryCards =
document.querySelectorAll(".memory-card");

const galleryImages =
document.querySelectorAll(".memory-image img");

/* ==========================
      Card Animation
========================== */

memoryCards.forEach((card,index)=>{

card.style.opacity="0";
card.style.transform="translateY(60px)";

setTimeout(()=>{

card.style.transition=".8s ease";
card.style.opacity="1";
card.style.transform="translateY(0)";

},index*250);

});

/* ==========================
      Hover Effect
========================== */

memoryCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform=
"translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"translateY(0) scale(1)";

});

});

/* ==========================
      Image Lightbox
========================== */

const overlay =
document.createElement("div");

overlay.style.position="fixed";
overlay.style.left="0";
overlay.style.top="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.92)";
overlay.style.display="none";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="99999";

document.body.appendChild(overlay);

const preview =
document.createElement("img");

preview.style.maxWidth="90%";
preview.style.maxHeight="90%";
preview.style.borderRadius="18px";
preview.style.boxShadow=
"0 0 40px #a855f7";

overlay.appendChild(preview);

/* Click Image */

galleryImages.forEach(img=>{

img.style.cursor="pointer";

img.addEventListener("click",()=>{

overlay.style.display="flex";

preview.src=img.src;

preview.animate([

{

transform:"scale(.6)",
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

});

/* Close */

overlay.addEventListener("click",()=>{

overlay.animate([

{

opacity:1

},

{

opacity:0

}

],{

duration:250

});

setTimeout(()=>{

overlay.style.display="none";

overlay.style.opacity="1";

},250);

});

/* ==========================
      Auto Glow
========================== */

setInterval(()=>{

memoryCards.forEach(card=>{

card.animate([

{

boxShadow:
"0 0 15px rgba(168,85,247,.2)"

},

{

boxShadow:
"0 0 35px rgba(217,70,239,.5)"

},

{

boxShadow:
"0 0 15px rgba(168,85,247,.2)"

}

],{

duration:2200,

iterations:1

});

});

},2500);

/* ==========================
      Keyboard Close
========================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

overlay.style.display="none";

}

});

/* ==========================
      Console
========================== */

console.log("📸 Memory Gallery Loaded");

/* ==========================================
   JAVASCRIPT PART 7
   GIFT BOX + SURPRISE
========================================== */

const giftBox = document.getElementById("giftBox");
const giftBtn = document.getElementById("giftBtn");
const giftSurprise = document.getElementById("giftSurprise");

let giftOpened = false;

/* ==========================
      Open Gift
========================== */

giftBtn.addEventListener("click",()=>{

if(giftOpened) return;

giftOpened = true;

giftBox.classList.add("open");

giftBtn.disabled = true;

giftBtn.innerHTML = "🎉 Gift Opened";

/* Box Animation */

giftBox.animate([

{
transform:"scale(1)"
},

{
transform:"scale(1.15) rotate(6deg)"
},

{
transform:"scale(1)"
}

],{

duration:1000,

fill:"forwards"

});

/* Show Surprise */

setTimeout(()=>{

giftSurprise.style.display="block";

giftSurprise.animate([

{
opacity:0,
transform:"translateY(60px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:900,

fill:"forwards"

});

showToast("🎁 Surprise Unlocked!");

launchGiftParticles();

},900);

});

/* ==========================
      Gift Hover
========================== */

giftBox.addEventListener("mouseenter",()=>{

if(!giftOpened){

giftBox.style.transform="scale(1.05)";

}

});

giftBox.addEventListener("mouseleave",()=>{

if(!giftOpened){

giftBox.style.transform="scale(1)";

}

});

/* ==========================
      Floating Animation
========================== */

setInterval(()=>{

if(!giftOpened){

giftBox.animate([

{
transform:"translateY(0px)"
},

{
transform:"translateY(-10px)"
},

{
transform:"translateY(0px)"
}

],{

duration:2500,

iterations:1

});

}

},2600);

/* ==========================
      Gift Particles
========================== */

function launchGiftParticles(){

const container =
document.getElementById("particleContainer");

for(let i=0;i<100;i++){

const particle =
document.createElement("div");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";
particle.style.top="70vh";

particle.style.width=
(5+Math.random()*10)+"px";

particle.style.height=
particle.style.width;

particle.style.background=

[
"#ffffff",
"#d946ef",
"#8b5cf6",
"#facc15",
"#ec4899"

][Math.floor(Math.random()*5)];

container.appendChild(particle);

particle.animate([

{

transform:"translateY(0)",
opacity:1

},

{

transform:

`translate(
${(Math.random()-.5)*600}px,
-${300+Math.random()*300}px)
rotate(${720+Math.random()*720}deg)`,

opacity:0

}

],{

duration:2500+Math.random()*1000,

easing:"ease-out"

});

setTimeout(()=>{

particle.remove();

},4000);

}

}

/* ==========================
      Keyboard Shortcut
========================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="g" || e.key==="G"){

giftBtn.click();

}

});

console.log("🎁 Gift Section Loaded");

/* ==========================================
   JAVASCRIPT PART 8
   COUNTDOWN + FIREWORKS
========================================== */

const celebrateBtn =
document.getElementById("celebrateBtn");

const canvas =
document.getElementById("fireworksCanvas");

const ctx =
canvas.getContext("2d");

/* Canvas */

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

/* ==========================
      COUNTDOWN
========================== */

/* Birthday Date */

const birthday =
new Date("2027-01-01T00:00:00").getTime();

function updateCountdown(){

const now=new Date().getTime();

const distance=
birthday-now;

if(distance<0){

document.getElementById("days").innerHTML="00";
document.getElementById("hours").innerHTML="00";
document.getElementById("minutes").innerHTML="00";
document.getElementById("seconds").innerHTML="00";

return;

}

const days=
Math.floor(distance/(1000*60*60*24));

const hours=
Math.floor((distance%(1000*60*60*24))
/
(1000*60*60));

const minutes=
Math.floor((distance%
(1000*60*60))
/
(1000*60));

const seconds=
Math.floor((distance%
(1000*60))
/
1000);

document.getElementById("days").innerHTML=
String(days).padStart(2,"0");

document.getElementById("hours").innerHTML=
String(hours).padStart(2,"0");

document.getElementById("minutes").innerHTML=
String(minutes).padStart(2,"0");

document.getElementById("seconds").innerHTML=
String(seconds).padStart(2,"0");

}

setInterval(updateCountdown,1000);

updateCountdown();

/* ==========================
      FIREWORKS
========================== */

let particles=[];

function createFirework(){

const x=Math.random()*canvas.width;
const y=Math.random()*canvas.height/2;

for(let i=0;i<80;i++){

particles.push({

x:x,
y:y,

dx:(Math.random()-0.5)*8,

dy:(Math.random()-0.5)*8,

life:100,

color:

[
"#ffffff",
"#8b5cf6",
"#d946ef",
"#facc15",
"#ec4899"

][Math.floor(Math.random()*5)]

});

}

}

function animateFireworks(){

ctx.clearRect(
0,0,
canvas.width,
canvas.height);

particles.forEach((p,index)=>{

ctx.beginPath();

ctx.arc(
p.x,
p.y,
3,
0,
Math.PI*2
);

ctx.fillStyle=p.color;

ctx.fill();

p.x+=p.dx;
p.y+=p.dy;

p.life--;

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(
animateFireworks
);

}

animateFireworks();

/* ==========================
      Celebrate Button
========================== */

celebrateBtn.addEventListener("click",()=>{

showToast("🎆 Celebration Started!");

for(let i=0;i<12;i++){

setTimeout(()=>{

createFirework();

},i*350);

}

/* Hearts */

for(let i=0;i<25;i++){

createHeart();

}

});

/* Auto Fireworks Every 10s */

setInterval(()=>{

createFirework();

},10000);

/* Console */

console.log("🎆 Countdown & Fireworks Ready");

/* ==========================================
   JAVASCRIPT PART 9
   CURSOR + SCROLL + PARTICLES
========================================== */

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const particleContainer = document.getElementById("particleContainer");

/* ==========================
      CUSTOM CURSOR
========================== */

document.addEventListener("mousemove",(e)=>{

if(cursorDot){

cursorDot.style.left=e.clientX+"px";
cursorDot.style.top=e.clientY+"px";

}

if(cursorOutline){

setTimeout(()=>{

cursorOutline.style.left=e.clientX+"px";
cursorOutline.style.top=e.clientY+"px";

},40);

}

});

/* ==========================
      Cursor Click Effect
========================== */

document.addEventListener("click",(e)=>{

const ripple=document.createElement("div");

ripple.style.position="fixed";
ripple.style.left=(e.clientX-10)+"px";
ripple.style.top=(e.clientY-10)+"px";
ripple.style.width="20px";
ripple.style.height="20px";
ripple.style.border="2px solid #d946ef";
ripple.style.borderRadius="50%";
ripple.style.pointerEvents="none";
ripple.style.zIndex="99999";

document.body.appendChild(ripple);

ripple.animate([

{
transform:"scale(1)",
opacity:1
},

{
transform:"scale(5)",
opacity:0
}

],{

duration:600

});

setTimeout(()=>{

ripple.remove();

},600);

});

/* ==========================
      Scroll Button
========================== */

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollTopBtn.style.display="block";

}else{

scrollTopBtn.style.display="none";

}

});

scrollTopBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================
      Floating Particles
========================== */

function createParticle(){

const particle=document.createElement("div");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";

particle.style.top="100vh";

particle.style.background=

[
"#8b5cf6",
"#d946ef",
"#ffffff",
"#facc15"

][Math.floor(Math.random()*4)];

particle.style.width=
(4+Math.random()*8)+"px";

particle.style.height=
particle.style.width;

particleContainer.appendChild(particle);

particle.animate([

{

transform:"translateY(0)",
opacity:1

},

{

transform:
`translateY(-110vh)`,

opacity:0

}

],{

duration:5000+Math.random()*3000,

easing:"linear"

});

setTimeout(()=>{

particle.remove();

},8000);

}

setInterval(createParticle,350);

/* ==========================
      Scroll Progress
========================== */

const progressBar=
document.createElement("div");

progressBar.style.position="fixed";
progressBar.style.left="0";
progressBar.style.top="0";
progressBar.style.height="4px";
progressBar.style.width="0%";
progressBar.style.background=
"linear-gradient(90deg,#8b5cf6,#d946ef)";
progressBar.style.zIndex="99999";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

const totalHeight=

document.documentElement.scrollHeight-
window.innerHeight;

const progress=

(window.scrollY/totalHeight)*100;

progressBar.style.width=
progress+"%";

});

/* ==========================
      Console
========================== */

console.log("🖱 Cursor & Scroll Effects Loaded");

/* ==========================================
   JAVASCRIPT PART 10
   FINAL INITIALIZATION
========================================== */

/* ==========================
      Welcome Popup
========================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

showToast("💜 Welcome! Enjoy this Special Birthday Surprise 🎂");

},1500);

});

/* ==========================
      Final Celebration
========================== */

function finalCelebration(){

for(let i=0;i<20;i++){

setTimeout(()=>{

createHeart();
createSparkle();
createParticle();

if(typeof createFirework==="function"){

createFirework();

}

},i*250);

}

showToast("🎉 Happy Birthday! Wishing You Endless Happiness 💜");

}

/* ==========================
      Keyboard Shortcuts
========================== */

document.addEventListener("keydown",(e)=>{

switch(e.key.toLowerCase()){

case "b":

if(beginBtn){

beginBtn.click();

}

break;

case "m":

if(musicBtn){

musicBtn.click();

}

break;

case "c":

if(cakeBtn){

cakeBtn.click();

}

break;

case "g":

if(giftBtn){

giftBtn.click();

}

break;

case "f":

if(celebrateBtn){

celebrateBtn.click();

}

break;

}

});

/* ==========================
      Double Click Celebration
========================== */

document.addEventListener("dblclick",()=>{

finalCelebration();

});

/* ==========================
      Random Greetings
========================== */

const greetings=[

"💜 Stay Happy Always",

"🎂 Happy Birthday Best Friend",

"🌸 Keep Smiling Forever",

"🎁 Wishing You Endless Joy",

"✨ May Your Dreams Come True",

"💖 Have a Wonderful Day"

];

setInterval(()=>{

const random=

greetings[
Math.floor(Math.random()*greetings.length)
];

showToast(random);

},45000);

/* ==========================
      Page Visibility
========================== */

document.addEventListener(

"visibilitychange",

()=>{

if(document.hidden){

console.log("Website Hidden");

}else{

showToast("💜 Welcome Back!");

}

}

/* ==========================
      Disable Text Selection
========================== */

document.addEventListener("selectstart",(e)=>{

if(

e.target.tagName!=="INPUT" &&
e.target.tagName!=="TEXTAREA"

){

e.preventDefault();

}

});

/* ==========================
      Smooth Anchor Links
========================== */

document.querySelectorAll(

'a[href^="#"]'

).forEach(anchor=>{

anchor.addEventListener(

"click",

function(e){

e.preventDefault();

const target=

document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

}

);

});

/* ==========================
      Footer Year
========================== */

const yearElement=

document.getElementById("year");

if(yearElement){

yearElement.textContent=

new Date().getFullYear();

}

/* ==========================
      Website Ready
========================== */

window.addEventListener("load",()=>{

console.clear();

console.log("================================");

console.log(" Premium Birthday Website Ready ");

console.log(" Made with 💜 by Hassan ");

console.log("================================");

});

/* ==========================
      Auto Finale
========================== */

setTimeout(()=>{

if(typeof createHeart==="function"){

createHeart();

}

if(typeof createSparkle==="function"){

createSparkle();

}

},5000);

/* ==========================
      Performance Cleanup
========================== */

window.addEventListener(

"beforeunload",

()=>{

console.clear();

});

/* ==========================
      Finished
========================== */

console.log("✅ All JavaScript Parts Loaded Successfully");



