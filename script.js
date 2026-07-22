/* =========================
   SURPRISE BUTTON
========================= */


const giftBtn = document.getElementById("giftBtn");

const giftSection = document.getElementById("giftSection");


giftBtn.addEventListener("click",()=>{


    giftSection.classList.remove("hidden");


    giftSection.scrollIntoView({

        behavior:"smooth"

    });



});






/* =========================
   IMAGE SLIDER
========================= */


const images = document.querySelectorAll(".slider img");


let imageIndex = 0;



setInterval(()=>{


    if(images.length > 0){


        images[imageIndex].classList.remove("active");



        imageIndex++;



        if(imageIndex >= images.length){

            imageIndex = 0;

        }



        images[imageIndex].classList.add("active");

    }


},3500);








/* =========================
   FLOATING HEARTS
========================= */


const heartsContainer = document.querySelector(".hearts");



function createHeart(){


    const heart = document.createElement("div");


    const heartList=[

        "💜",

        "💗",

        "💖",

        "🤍",

        "✨",

        "🌸"

    ];



    heart.innerHTML =

    heartList[

    Math.floor(Math.random()*heartList.length)

    ];



    heart.className="heart";



    heart.style.left =

    Math.random()*100+"vw";



    heart.style.fontSize =

    Math.random()*25+15+"px";



    heart.style.animationDuration =

    Math.random()*5+5+"s";



    heartsContainer.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },10000);



}



setInterval(createHeart,600);









/* =========================
   AESTHETIC FIREWORKS
========================= */


const canvas = document.getElementById("fireworks");

const ctx = canvas.getContext("2d");



canvas.width = window.innerWidth;

canvas.height = window.innerHeight;



let particles=[];



const colors=[

"#ffd166",

"#ff69b4",

"#ffffff",

"#c77dff",

"#00ffff",

"#ff99c8"

];





function createFirework(){



    let x =

    Math.random()*canvas.width;



    let y =

    Math.random()*(canvas.height/2);



    for(let i=0;i<90;i++){



        let angle =

        Math.random()*Math.PI*2;



        let speed =

        Math.random()*6+2;



        particles.push({


            x:x,

            y:y,


            dx:

            Math.cos(angle)*speed,


            dy:

            Math.sin(angle)*speed,


            size:

            Math.random()*3+1,


            life:100,


            color:

            colors[

            Math.floor(

            Math.random()*colors.length

            )

            ]


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


        ctx.shadowBlur=20;

        ctx.shadowColor=p.color;



        ctx.fill();




        p.x += p.dx;


        p.y += p.dy;



        p.dy +=0.05;



        p.life--;





        if(p.life<=0){


            particles.splice(index,1);


        }




    });



    requestAnimationFrame(animateFireworks);



}





setInterval(createFirework,1800);



animateFireworks();








/* =========================
   RESIZE FIX
========================= */


window.addEventListener("resize",()=>{


    canvas.width=window.innerWidth;


    canvas.height=window.innerHeight;


});
