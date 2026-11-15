const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
const yearSelect=document.querySelector('#pub-year'),rows=[...document.querySelectorAll('.publication')],search=document.querySelector('#pub-search');
function update(){const term=search.value.toLowerCase().trim();const year=yearSelect.value;let count=0;rows.forEach(row=>{const match=(year==='all'||year===row.dataset.year)&&row.textContent.toLowerCase().includes(term);row.hidden=!match;if(match)count++;});document.querySelector('.result-count').textContent=`${count} of ${rows.length} publications`;document.querySelector('#empty').hidden=count!==0;}
yearSelect.addEventListener('change',update);search.addEventListener('input',update);document.querySelector('#year').textContent=new Date().getFullYear();update();
