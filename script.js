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

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let particles=[];


function firework(){

    let x=Math.random()*canvas.width;
    let y=Math.random()*canvas.height/2;

    for(let i=0;i<80;i++){

        particles.push({

            x:x,
            y:y,

            dx:(Math.random()-0.5)*8,
            dy:(Math.random()-0.5)*8,

            life:100

        });

    }

}


function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);


    particles.forEach((p,index)=>{

        ctx.beginPath();

        ctx.arc(p.x,p.y,3,0,Math.PI*2);

        ctx.fillStyle="white";

        ctx.fill();


        p.x+=p.dx;
        p.y+=p.dy;

        p.life--;


        if(p.life<=0){
            particles.splice(index,1);
        }

    });


    requestAnimationFrame(animate);

}


setInterval(firework,1500);

animate();


window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

});
