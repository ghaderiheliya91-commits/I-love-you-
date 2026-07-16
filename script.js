
// =========================
// INTRO OPEN
// =========================


const enterBtn = document.getElementById("enter");

const intro = document.querySelector(".intro");


enterBtn.addEventListener("click", () => {


    intro.style.opacity = "0";


    setTimeout(() => {


        intro.style.display = "none";


    }, 1200);


});





// =========================
// FALLING HEARTS
// =========================


const heartsBox = document.querySelector(".hearts");



function createHeart(){


    const heart = document.createElement("span");


    heart.classList.add("heart");



    const size = Math.random() * 12 + 10;


    heart.style.width = size + "px";

    heart.style.height = size + "px";



    heart.style.left = Math.random()*100 + "%";



    heart.style.animationDuration =

    Math.random()*5 + 5 + "s";



    heart.style.animationDelay =

    Math.random()*3 + "s";



    const colors = [


        "#ffc8dd",

        "#ffb6d9",

        "#bde0fe",

        "#ffffff"


    ];



    heart.style.background =

    colors[Math.floor(Math.random()*colors.length)];



    heartsBox.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },10000);



}



setInterval(createHeart,450);





// =========================
// SCROLL REVEAL
// =========================


const revealItems = document.querySelectorAll(

".glass-card, .memory-card, .quote-card, .final-card"

);



const revealObserver = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("visible");


        }


    });


},

{

    threshold:.2

}

);



revealItems.forEach(item=>{


    item.classList.add("reveal");


    revealObserver.observe(item);


});

// =========================
// BACK TO TOP
// =========================


const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll", ()=>{


    if(window.scrollY > 500){


        topBtn.classList.add("active");


    } else {


        topBtn.classList.remove("active");


    }


});




topBtn.addEventListener("click", ()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});







// =========================
// MOUSE LIGHT
// =========================



const mouseGlow = document.createElement("div");


mouseGlow.classList.add("mouse-glow");


document.body.appendChild(mouseGlow);




document.addEventListener("mousemove",(event)=>{


    mouseGlow.style.left = event.clientX + "px";


    mouseGlow.style.top = event.clientY + "px";


});








// =========================
// CLICK SPARKLES
// =========================



document.addEventListener("click",(event)=>{


    const sparkle = document.createElement("span");


    sparkle.classList.add("sparkle");



    sparkle.style.left = event.clientX + "px";


    sparkle.style.top = event.clientY + "px";



    document.body.appendChild(sparkle);



    setTimeout(()=>{


        sparkle.remove();


    },800);



});








// =========================
// SMOOTH SCROLL BUTTON
// =========================



const exploreBtn = document.querySelector(".scroll-btn");



if(exploreBtn){


    exploreBtn.addEventListener("click",()=>{


        document.querySelector(".letter-section")

        .scrollIntoView({

            behavior:"smooth"

        });


    });


}

// =========================
// TYPING EFFECT
// =========================


function typeWriter(element, text, speed = 70){


    let index = 0;


    element.innerHTML = "";


    function write(){


        if(index < text.length){


            element.innerHTML += text.charAt(index);


            index++;


            setTimeout(write, speed);


        }


    }


    write();


}





// فقط متن اول صفحه تایپ شود

const heroParagraph = document.querySelector(".hero p");



if(heroParagraph){


    const originalText = heroParagraph.innerHTML;



    setTimeout(()=>{


        typeWriter(

            heroParagraph,

            originalText,

            50

        );


    },1500);


}







// =========================
// PAGE LOAD
// =========================



window.addEventListener("load",()=>{


    document.body.classList.add("loaded");


});







// =========================
// PARALLAX LIGHTS
// =========================



const lights = document.querySelector(".lights");



window.addEventListener("scroll",()=>{


    const scroll = window.scrollY;



    if(lights){


        lights.style.transform =

        `translateY(${scroll * 0.15}px)`;


    }


});







// =========================
// DISABLE IMAGE DRAG
// =========================



document.querySelectorAll("img")

.forEach(image=>{


    image.addEventListener("dragstart",(event)=>{


        event.preventDefault();


    });


});







console.log(

"♡ Welcome to Zhorfa's little world ♡"

);
