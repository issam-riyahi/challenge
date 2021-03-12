//Main Variable 
let huberger=document.querySelector('.humberger'),
    closeH=document.querySelector('.close-humberger'),
    menu=document.querySelector('.link');


huberger.addEventListener("click",function(){
    menu.classList.add('responsive')
        
  
})
closeH.addEventListener("click",function(){
    
    menu.classList.remove('responsive')
        
  
})