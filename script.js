let btn = document.getElementById("rightarrow")
let inner = document.getElementById("inner")
let btn2 = document.getElementById("leftarrow")


btn.addEventListener("click" , function(){
    if(window.innerWidth > 425){
        inner.scrollBy(100 , 0)
    }
    else{
    inner.scrollBy(250 , 0)
      
    }
})

btn2.addEventListener("click" , function(){
    inner.scrollBy(-250 , 0)
})
