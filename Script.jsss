const giftBtn = document.getElementById("giftBtn");
const giftSection = document.getElementById("giftSection");

giftBtn.addEventListener("click", () => {

    document.querySelector(".container").style.display = "none";

    giftSection.classList.remove("hidden");

});

const slides = document.querySelectorAll(".slider img");

let current = 0;

setInterval(() => {

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){

        current = 0;

    }

    slides[current].classList.add("active");

},3000);

// Floating Hearts

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML="💜";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="100vh";
    heart.style.fontSize=(20+Math.random()*20)+"px";
    heart.style.opacity="0.8";
    heart.style.pointerEvents="none";
    heart.style.transition="transform 6s linear, opacity 6s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.style.transform="translateY(-120vh)";
        heart.style.opacity="0";
    },100);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

setInterval(createHeart,500);
