const modal = document.getElementById('myModal');
const btn = document.getElementById("myBtn");
const close = document.getElementById("close");

btn.addEventListener ('click', ()=>{
    modal.style.display = "block"
})
close.addEventListener ('click', ()=>{
    modal.style.display = "none"
})
window.addEventListener('click', (e)=>{
    if(e.target === modal){
        modal.style.display= "none";
    }
})
