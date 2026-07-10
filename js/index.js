document.querySelectorAll('.card').forEach(c=>{c.onmouseenter=()=>c.style.boxShadow='0 20px 40px rgba(37,99,235,.2)';c.onmouseleave=()=>c.style.boxShadow='0 10px 30px rgba(0,0,0,.08)';});
const profileImg=document.getElementById("profileImg");
const profilePopup=document.getElementById("profilePopup");
profileImg.addEventListener("click",()=>{
profilePopup.classList.add("active");});
profilePopup.addEventListener("click",()=>{
    profilePopup.classList.remove("active");
});
