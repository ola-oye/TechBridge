let counter = 0;
for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        counter++;
    }
}
console.log(`The number of even number between 1 to 100 is ${counter}`); // The number of even number between 1 to 100 is 50

for (let j=1; j<=100; j++){
    if(j%2===0){
        console.log("Fizz");
    }
    else{
        console.log("Buzz");
    }
}