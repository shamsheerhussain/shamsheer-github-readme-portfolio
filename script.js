const nav=document.querySelector('.nav');
const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const roles=['VLSI Design Intern','ECE Student','IoT & Embedded Systems Enthusiast','Verilog HDL & Digital Design'];
const el=document.querySelector('.typing');let i=0,j=0,deleting=false;
function type(){if(!el)return;const word=roles[i];el.textContent=word.slice(0,j)+(j<word.length?'|':'');if(!deleting&&j<word.length){j++;setTimeout(type,70)}else if(!deleting){deleting=true;setTimeout(type,1700)}else if(j>0){j--;setTimeout(type,35)}else{deleting=false;i=(i+1)%roles.length;setTimeout(type,350)}}type();
