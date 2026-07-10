const buttons=document.querySelectorAll('[data-filter]');
const cards=document.querySelectorAll('.card');
buttons.forEach(btn=>btn.onclick=()=>{
 const f=btn.dataset.filter;
 cards.forEach(c=>c.style.display=(f==='all'||c.classList.contains(f))?'block':'none');
});
