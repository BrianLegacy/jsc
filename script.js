let numberm=100;
for (let number = 0; number <= numberm ; number++) {
if (number === 0) {
        console.log(number);
}   
if (number %3 == 0 && number %5 ==0 ) {
        console.log("fizzbuzz");
    } 
else if (number %3 == 0 ) {
    console.log("fizz");
} 

else if (number %5 == 0 ) {
    console.log("buzz");
} 
else{
    console.log(number);
}

}



