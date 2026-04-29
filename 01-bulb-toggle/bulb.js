var bulb = document.querySelector(".bulb")
var btn = document.querySelector("button")

flag=0

btn.addEventListener("click",function(){
    if(flag==0){    
        console.log("SWITCH CLICKED BULB IS ON")
        bulb.style.backgroundColor="yellow"
        flag=1
    }
    else
    {
        bulb.style.backgroundColor="transparent"
        console.log("SWITCH CLICKED BULB IS OFF")
        flag=0
    }

})