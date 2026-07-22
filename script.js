// 🎁 Gift Button

const giftBtn = document.getElementById("giftBtn");
const giftSection = document.getElementById("giftSection");


if (giftBtn && giftSection) {

    giftBtn.addEventListener("click", () => {

        giftSection.classList.remove("hidden");

        window.scrollTo({

            top: giftSection.offsetTop,

            behavior: "smooth"

        });

    });

}



// 📸 Image Slider

const images = document.querySelectorAll(".slider img");

let current = 0;


if(images.length > 0){

    setInterval(() => {


        images[current].classList.remove("active");


        current++;


        if(current >= images.length){

            current = 0;

        }


        images[current].classList.add("active");


    },3000);

}




// 💜 Floating Hearts

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "💜";

    heart.classList.add("heart");


    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
    (Math.random()*3 + 4) + "s";


    document.querySelector(".hearts")
    .appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },7000);


}


setInterval(createHeart,500);





// 🎆 Fireworks Animation


const canvas = document.getElementById("fireworks");

const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;

canvas.height = window.innerHeight;



let particles = [];



function createFirework(){


    let x = Math.random() * canvas.width;

    let y = Math.random() * (canvas.height/2);



    for(let i=0;i<70;i++){


        particles.push({


            x:x,

            y:y,


            dx:(Math.random()-0.5)*8,

            dy:(Math.random()-0.5)*8,


            size:Math.random()*3+1,


            life:100,


            color:`hsl(${Math.random()*360},100%,60%)`


        });


    }


}




function animate(){


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );



    particles.forEach((p,index)=>{


        ctx.beginPath();


        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI*2
        );


        ctx.fillStyle=p.color;


        ctx.fill();



        p.x += p.dx;

        p.y += p.dy;


        p.life--;



        if(p.life <= 0){

            particles.splice(index,1);

        }


    });



    requestAnimationFrame(animate);


}




setInterval(createFirework,1500);


animate();





// 📱 Responsive Canvas


window.addEventListener("resize",()=>{


    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;


});
