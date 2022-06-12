
const doubleNumberAfter2Seconds = (number) => { 
   return new Promise((resolve, reject) => { // if everything works, resolve the promise with the following method
    setTimeout(() => {
         if (number % 2 === 0) {
        resolve(number * 2);
    }      else {   
            reject("number needs to be between even");
    }
}       , 2000)
    })
} 

const asyncPrinting = async (number) => { // this function is going to depend on something that is asynchronous
    try{
    const result = await doubleNumberAfter2Seconds(number); // await - says that this process wil take a while
    console.log(`result is ${result}`);
} catch (error){
    console.error(error)
}};

asyncPrinting(7);
 


/*

//THIS IS WHY WE NEED PROMISES, LOOK AT THE ORDER OF THE FUNCTIONS


const doubleNumberAfter2Seconds = (number) => { // PART ONE
    setTimeout(() => { // PART TWO
    return number * 2; // PART FIVE
    //takes a callback and time in milliseconds
}, 2000);}

const result = doubleNumberAfter2Seconds(5); //PART THREE

console.log(`result is ${result}`); // PART FOUR

*/