const sideBar =document.querySelector(".side-bar");
const toggleBtn =document.querySelector(".toggle-btn");
toggleBtn.addEventListener('click', ()=>{
    sideBar.classList.toggle('active');
    const logoMenu=toggleBtn.parentElement;
    
    if(sideBar.classList.contains(active)) { 
        console.log("hello");
       
    }else{
        
       console.log('not helo');
        // logoMenu.innerHTML=' <h2 class="logo">logo</h2><i class="bx bx-menu toggle-btn"></i>';
    }
})