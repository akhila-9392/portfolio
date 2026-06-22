// ==========================
// Scroll Reveal Animation
// ==========================

const observer = new IntersectionObserver(
(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {
entry.target.classList.add("show");
}

});

},
{
threshold: 0.15
}
);


const hiddenElements = document.querySelectorAll(

'.glass-card, .edu-card, .project-card, .skill-box span, .contact-card'

);


hiddenElements.forEach((el) => {

el.classList.add("hidden");

observer.observe(el);

});



// ==========================
// Blob Animation
// ==========================

const blob1 = document.querySelector(".blob1");
const blob2 = document.querySelector(".blob2");

let x = 0;

function animateBlob() {

x += 0.01;

if(blob1){
blob1.style.transform =
`translateY(${Math.sin(x)*15}px)`;
}

if(blob2){
blob2.style.transform =
`translateY(${Math.cos(x)*15}px)`;
}

requestAnimationFrame(animateBlob);

}

if(blob1 || blob2){
animateBlob();
}



// ==========================
// Hero Animation
// ==========================


window.addEventListener("load",()=>{

const hero = document.querySelector(".hero");

if(hero){

hero.style.opacity="1";

hero.style.transform="translateY(0px)";

}

});




// ==========================
// Tilt Cards
// ==========================


const cards =
document.querySelectorAll(".project-card");


cards.forEach((card)=>{


card.addEventListener("mousemove",(e)=>{


const rect =
card.getBoundingClientRect();



const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



const rotateY =
((x/rect.width)-0.5)*10;


const rotateX =
-((y/rect.height)-0.5)*10;



card.style.transform =
`perspective(1000px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 translateY(-5px)`;


});



card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0deg) rotateY(0deg)";

});


});
