button = document.querySelector("button")
slider = document.querySelector("div > div")

button.addEventListener("click", ()=>{
    if(slider.className.trim() === "slider"){
        slider.className=" transform";
        button.textContent = "close"
    }else{
        slider.className="slider";
        button.textContent = "open";
    }
})