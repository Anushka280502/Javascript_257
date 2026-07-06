// VARIABLES ARE USED TO RESERVE MEMORY 
const accountId = 144553                 
let accountEmail = "anu@google.com"

var accountPassword = "12345"
accountCity = "Jaipur"          //can be used but not a good practice 

// accountId = 2   //not allowed

accountEmail = "hacg@c.com" 
accountPassword = "27548"
accountCity = "delhi"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity]);   //to print all & in form of a table with INDEX & VALUES
/*
try not to use var as it can't understand block scope and functional scope
scope is 
{ 

}
*/