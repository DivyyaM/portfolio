const themeToggle = document.getElementById('theme-toggle');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const year = document.getElementById('year');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
function setTheme(mode) { document.documentElement.dataset.theme = mode; localStorage.setItem('theme', mode); }
if (themeToggle) themeToggle.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'));
if (navToggle && navMenu) navToggle.addEventListener('click', () => { const e = navToggle.getAttribute('aria-expanded') === 'true'; navToggle.setAttribute('aria-expanded', String(!e)); navMenu.classList.toggle('open'); });
if (year) year.textContent = new Date().getFullYear();

const skills = ['JavaScript','TypeScript','React','Next.js','Node.js','HTML','CSS','Accessibility','Testing'];
const projects = [
  { title:'Sample Project', description:'Replace with your project.', image:'/Divya.jpg', tags:['React'], links:[{label:'Code', href:'#'}] }
];
const experience = [ { role:'Frontend Engineer', company:'Company', period:'2023 — Present', details:'Impact and achievements.' } ];

function renderChips(el, items){ if(!el) return; el.innerHTML = items.map(x=>`<span class="chip">${x}</span>`).join(''); }
function renderProjects(el, items){ if(!el) return; el.innerHTML = items.map(p=>`<article class="card"><img src="${p.image}" alt="${p.title} preview" /><h3>${p.title}</h3><p>${p.description}</p><div class="tags">${p.tags.map(t=>`<span class=\"tag\">${t}</span>`).join('')}</div><div class="card-actions">${p.links.map(l=>`<a class=\"btn\" href=\"${l.href}\" target=\"_blank\" rel=\"noopener\">${l.label}</a>`).join('')}</div></article>`).join(''); }
function renderExperience(el, items){ if(!el) return; el.innerHTML = items.map(e=>`<article class="timeline-item"><h4>${e.role} • ${e.company}</h4><div class="meta">${e.period}</div><p>${e.details}</p></article>`).join(''); }

renderChips(document.getElementById('skills-cloud'), skills);
renderProjects(document.getElementById('project-grid'), projects);
renderExperience(document.getElementById('experience-timeline'), experience);


