
window.addEventListener("scroll", function () {
  const bars = document.querySelectorAll(".progress-bar");
  bars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      bar.style.width = bar.dataset.progress + "%";
    }
  });
});

const fadeElements = document.querySelectorAll('.fade');

function showFadeElements() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showFadeElements);
showFadeElements();


const skillsContainer = document.querySelector('#skills .about-container');

function showSkillsContainer() {
  const rect = skillsContainer.getBoundingClientRect();
  if (rect.top < window.innerHeight - 50) {
    skillsContainer.classList.add('show');
  }
}

window.addEventListener('scroll', showSkillsContainer);
showSkillsContainer();


const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});


const stars = [];
const numStars = 150;

for(let i=0; i<numStars; i++){
  stars.push({
    x: Math.random()*w,
    y: Math.random()*h,
    r: Math.random()*1.2,
    d: Math.random()*0.5
  });
}

function drawStars(){
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = "white";
  ctx.shadowBlur = 5;
  ctx.shadowColor = "#00eaff";
  
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI*2);
    ctx.fill();

    star.y += star.d;
    if(star.y > h){
      star.y = 0;
      star.x = Math.random()*w;
    }
  });

  requestAnimationFrame(drawStars);
}

drawStars();
