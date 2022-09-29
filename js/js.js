// Start The Follow Function 

let elements = document.querySelectorAll(".follow" ) ; 

elements.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        e.target.classList.toggle("following" );
        e.target.innerHTML = "Following" ; 
        e.target.style.cssText = "color : black ; transiton : .4s" ; 
    })
})


let following = document.querySelectorAll(".following" ) ;

following.forEach((el)=>{
    el.innerHTML = "Following" ; 
    el.style.cssText = "color : black ; transiton :.4s" ;
})


  
// Ened Following Function