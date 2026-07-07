let score = "33"

console.log(typeof score);       //string   //to check data type of score
console.log(typeof(score));      //string   //here score is treated as a method

let valueInNumber = Number(score)   //number(n is small letter here)      //we are converting score into Number(N is always capital while conversion) from string
console.log(typeof valueInNumber)

let value = "33abc"

console.log(typeof value)
newValueInNumber = Number(value)
console.log(typeof newValueInNumber)      
console.log(newValueInNumber)            //NaN --> NotaNumber


let scor = null
console.log(typeof scor)                   //object
newwValueInNumber = Number(scor)
console.log(typeof newwValueInNumber)     //number 
console.log(newwValueInNumber)            //0

let val = undefined
console.log(typeof val)                   //undefined  
newwwValueInNumber = Number(val)
console.log(typeof newwwValueInNumber)    //number
console.log(newwwValueInNumber)           //NaN

let n = true
console.log(typeof value)                 //string
nValueInNumber = Number(n) 
console.log(typeof nValueInNumber)        //number
console.log(nValueInNumber)               //1

let num ="anushka"                    //can't be converted to any number
console.log(typeof num)               //string
numValueInNumber = Number(num)
console.log(typeof numValueInNumber)   //number
console.log(numValueInNumber)          //Nan


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// ("") empty string => false
// "anu" => true

// can be converted to number , boolean , string