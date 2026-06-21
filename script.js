// =======================
// SCROLL REVEAL ANIMATION
// =======================

const reveals = document.querySelectorAll(
'.glass-card, .card, .mini-card, .timeline-item, .stat-box, .research-card'
);

function revealElements(){

reveals.forEach(element=>{

const windowHeight = window.innerHeight;
const revealTop = element.getBoundingClientRect().top;
const revealPoint = 100;

if(revealTop < windowHeight - revealPoint){

element.classList.add('active');

}

});

}

reveals.forEach(item=>{

item.classList.add('reveal');

});

window.addEventListener('scroll', revealElements);
revealElements();


// =======================
// COUNTER ANIMATION
// =======================

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

counter.innerText = '0';

const updateCounter = () => {

const target = +counter.getAttribute('data-target');

const current = +counter.innerText;

const increment = target / 100;

if(current < target){

counter.innerText =
`${Math.ceil(current + increment)}`;

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});


// =======================
// NAVIGATION HIGHLIGHT
// =======================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll',()=>{

let current = '';

sections.forEach(section=>{

const sectionTop = section.offsetTop;

if(pageYOffset >= sectionTop - 200){

current = section.getAttribute('id');

}

});

navLinks.forEach(link=>{

link.classList.remove('active-link');

if(
link.getAttribute('href')
.includes(current)
){

link.classList.add('active-link');

}

});

});


// =======================
// SMOOTH PARALLAX EFFECT
// =======================

window.addEventListener('scroll',()=>{

const scrolled = window.pageYOffset;

const bg =
document.querySelector('.background');

if(bg){

bg.style.transform =
`translateY(${scrolled * 0.15}px)`;

}

});


// =======================
// FLOATING HERO EFFECT
// =======================

const hero =
document.querySelector('.hero-content');

window.addEventListener('mousemove',(e)=>{

if(!hero) return;

let x =
(window.innerWidth/2 - e.pageX)
/ 50;

let y =
(window.innerHeight/2 - e.pageY)
/ 50;

hero.style.transform =
`translate(${x}px,${y}px)`;

});


// =======================
// BUTTON GLOW EFFECT
// =======================

const buttons =
document.querySelectorAll('.btn');

buttons.forEach(btn=>{

btn.addEventListener('mouseenter',()=>{

btn.style.boxShadow =
'0 0 30px rgba(87,199,255,0.5)';

});

btn.addEventListener('mouseleave',()=>{

btn.style.boxShadow = 'none';

});

});


// =======================
// TYPING EFFECT
// =======================

const subtitle =
document.querySelector('.hero h2');

if(subtitle){

const originalText =
subtitle.innerText;

subtitle.innerText = '';

let i = 0;

function typeText(){

if(i < originalText.length){

subtitle.innerText +=
originalText.charAt(i);

i++;

setTimeout(typeText,70);

}

}

setTimeout(typeText,500);

}


// =======================
// SCROLL TO TOP BUTTON
// =======================

const topBtn =
document.createElement('button');

topBtn.innerHTML = '↑';

topBtn.id = 'topBtn';

document.body.appendChild(topBtn);

topBtn.style.position = 'fixed';
topBtn.style.bottom = '30px';
topBtn.style.right = '30px';
topBtn.style.width = '50px';
topBtn.style.height = '50px';
topBtn.style.border = 'none';
topBtn.style.borderRadius = '50%';
topBtn.style.background =
'linear-gradient(90deg,#57c7ff,#8c7dff)';
topBtn.style.color = 'white';
topBtn.style.cursor = 'pointer';
topBtn.style.display = 'none';
topBtn.style.fontSize = '20px';
topBtn.style.zIndex = '9999';

window.addEventListener('scroll',()=>{

if(window.scrollY > 500){

topBtn.style.display = 'block';

}else{

topBtn.style.display = 'none';

}

});

topBtn.addEventListener('click',()=>{

window.scrollTo({

top:0,
behavior:'smooth'

});

});


// =======================
// CONSOLE MESSAGE
// =======================

console.log(
'Biomedical Portfolio Loaded Successfully'
);
