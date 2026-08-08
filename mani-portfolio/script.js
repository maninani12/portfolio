const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const root=document.documentElement;
const themeToggle=document.getElementById('themeToggle');
const savedTheme=localStorage.getItem('mani-theme');
if(savedTheme==='light') root.classList.add('light');
function updateThemeLabel(){ themeToggle.innerHTML=root.classList.contains('light')?'☾ <span>Dark</span>':'☼ <span>Light</span>'; }
updateThemeLabel();
themeToggle?.addEventListener('click',()=>{
  root.classList.toggle('light');
  localStorage.setItem('mani-theme',root.classList.contains('light')?'light':'dark');
  updateThemeLabel();
});

const copyBtn=document.getElementById('copyEmail');
const toast=document.getElementById('toast');
copyBtn?.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText('manikona34@gmail.com');toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800);}catch{window.location.href='mailto:manikona34@gmail.com';}
});

const revealEls=document.querySelectorAll('.about-card,.skill-group,.timeline-item,.project-card,.education-list article,.recruiter-points p');
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('reveal-in');observer.unobserve(e.target)}}),{threshold:.08});
revealEls.forEach(el=>{el.classList.add('reveal');observer.observe(el)});
