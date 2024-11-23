divs = document.querySelectorAll('div');
console.log(divs[0].className);

divs.forEach(element => {
    if(element.className ==="red"){
        let newElement = document.createElement('p');
        newElement.textContent = "hello world";
        element.appendChild(newElement);
    }else{
        let newElement = document.createElement('p');
        newElement.textContent = "hello Mr. Gold";
        element.appendChild(newElement);
    }
})