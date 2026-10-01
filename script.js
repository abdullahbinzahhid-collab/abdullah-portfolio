/*==================================================
  Portfolio JavaScript
  Abdullah Bin Zahid
==================================================*/


// ===============================
// Smooth Scroll Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});




// ===============================
// Navbar Active Link On Scroll
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");


window.addEventListener("scroll",()=>{


    let current = "";


    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;


        if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){

            current = section.getAttribute("id");

        }

    });



    navLinks.forEach(link=>{

        link.style.color = "#dbe4ff";


        if(link.getAttribute("href") === "#" + current){

            link.style.color = "#38bdf8";

        }

    });


});





// ===============================
// Scroll Reveal Animation
// ===============================


const revealElements = document.querySelectorAll(
".skill-card, .service-card, .project-card, .about-card, .glass-card"
);



const reveal = ()=>{


    revealElements.forEach(element=>{


        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;


        if(elementTop < windowHeight - 100){

            element.style.opacity="1";

            element.style.transform="translateY(0)";

        }


    });


};



revealElements.forEach(element=>{

    element.style.opacity="0";

    element.style.transform="translateY(50px)";

    element.style.transition="0.8s ease";


});


window.addEventListener("scroll",reveal);







// ===============================
// Typing Effect
// ===============================


const roles = [

"AI Native Software Developer",

"Web Developer",

"UI/UX Designer",

"Graphic Designer",

"Digital Creator"

];


let roleIndex = 0;

let charIndex = 0;


const typingText = document.querySelector(".glass-card p");


function typing(){


    if(!typingText) return;


    if(charIndex < roles[roleIndex].length){


        typingText.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typing,100);


    }

    else{


        setTimeout(()=>{


            typingText.textContent="";

            charIndex=0;


            roleIndex++;


            if(roleIndex >= roles.length){

                roleIndex=0;

            }


            typing();


        },1500);


    }


}



typing();






// ===============================
// Project Card 3D Hover Effect
// ===============================


const cards = document.querySelectorAll(".project-card");


cards.forEach(card=>{


    card.addEventListener("mousemove",(e)=>{


        const rect = card.getBoundingClientRect();


        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;



        const rotateX = ((y - rect.height/2) / 15) * -1;

        const rotateY = (x - rect.width/2) / 15;



        card.style.transform =
        `perspective(700px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)`;



    });



    card.addEventListener("mouseleave",()=>{


        card.style.transform="translateY(0)";


    });


});







// ===============================
// Dynamic Footer Year
// ===============================


const year = document.querySelector("#year");


if(year){

    year.textContent = new Date().getFullYear();

}




// ===============================
// Console Message
// ===============================


console.log(
"🚀 Welcome to Abdullah Bin Zahid Portfolio | AI Native Developer"
);

// ===============================
// Button Ripple Effect
// ===============================

const buttons = document.querySelectorAll(
".primary, .secondary, .hire-btn"
);


buttons.forEach(button=>{


    button.addEventListener("click",function(e){


        let ripple = document.createElement("span");


        ripple.classList.add("ripple");


        this.appendChild(ripple);


        setTimeout(()=>{

            ripple.remove();

        },600);


    });


});





// ===============================
// Mouse Cursor Glow Effect
// ===============================


const cursorGlow = document.createElement("div");


cursorGlow.className="cursor-glow";


document.body.appendChild(cursorGlow);



document.addEventListener("mousemove",(e)=>{


    cursorGlow.style.left=e.clientX+"px";

    cursorGlow.style.top=e.clientY+"px";


});






// ===============================
// Loading Animation
// ===============================


window.addEventListener("load",()=>{


    document.body.classList.add("loaded");


});






// ===============================
// Back To Top Button
// ===============================


const backTop = document.createElement("button");


backTop.innerHTML="↑";


backTop.className="back-top";


document.body.appendChild(backTop);



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){

        backTop.classList.add("show");

    }

    else{

        backTop.classList.remove("show");

    }


});



backTop.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});

//==================================================
// EmailJS Contact Form
//==================================================


// Initialize EmailJS

(function(){

    emailjs.init({

        publicKey:"YOUR_PUBLIC_KEY"

    });

})();




// Contact Form Submit

const contactForm = document.querySelector("#contact-form");


if(contactForm){


contactForm.addEventListener("submit",function(e){


    e.preventDefault();



    emailjs.sendForm(

        "abdullahbinzahhid@gmail.com",

        "YOUR_TEMPLATE_ID",

        this

    )

    .then(()=>{


        alert("✅ Message sent successfully!");


        contactForm.reset();


    })


    .catch((error)=>{


        alert("❌ Message failed to send");


        console.log(error);


    });



});


}