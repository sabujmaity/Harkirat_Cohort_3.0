/* Best Practices
1. Use const by default for values that won't be re-assigned
2. Use let when you need to re-assign the variable
3. Avoid var in modern JavaScript due to its confusing scoping rules */

let firstname = "harkirat";
let age = 18;
let isMarried = false;
console.log("This person name is "+ firstname + " and their age is " + age)
// This is how you comment 
/* this is how you make a multi-line comment */

const pi = 3.14 // this value can't be changed
if(isMarried == true){
    console.log(firstname + " is married");
}
else{
    console.log("hey");
}
let sum2 = 0;
for(let i = 0; i<=2 ; i++){
    sum2 += i;
}
console.log(sum);

const personArray = ["harkirat" , "raman" , "kirat"];
for(let i = 0; i<3 ; i++){
    console.log(personArray[i]);
}
console.log("3rd ELement of personArray : ",personArray[2]);

var sum1 = 10 + 10;
console.log(sum1)

// Escape Character
var myStr = "I am a \"double quoted\" string inside \"double quoutes\" "
console.log(myStr)

/* Print even no in an Array */
const ages = [20,22,51,67,2];
for( let i = 0; i<ages.length; i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    }
}

/* Creating objects in JS similar to key-values pair in C++ basically map*/
const users1 = {
    /* Key */ firstname : /* Value */"Sabuj",
    gender: "male"
}
/* How to acess */
console.log(users1["gender"]);

/* Creating a array of objects */
const allUsers = [{
    firstname : "Sabuj", 
    gender : "male"
}, {
    firstname : "Ram",
    gender : "male"
}, {
    firstname : "Sita",
    gender : "female"
}]

/* To print the gender of all the person */
for( let i = 0; i < allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstname"]);
    }
}

/* Creating Function */
function add(a,b){
    return a + b;
}
const value = add(3,5)
console.log(value);

function sum( num1, num2, fntocall){
    let result = num1+num2;
    fntocall( result);
}
function displayresult( data ){
    console.log("Result of the sum :" + data);
}

const x = (1,2,displayresult);

// Way to create functions and use fucntions inside the functions
function canVote(age){
    let valvote = false;
    if(age > 18){
        valvote = true;
    } 
    resultofvote(valvote);
}
function resultofvote(val){
    if(val == true){
        console.log("Yes Can Vote");
    } else {
        console.log("No can't Vote");
    }
}
canVote(34);

function greet(user){
    console.log("Hi "+ user.name + " your age is " + user.age);
}
let user = {
    name : "Sabuj",
    age : 26, 
    sex : "Male"
}
greet(user);

function greet2(user){
    if( user["sex"] == "Male"){
        console.log("Mr " + user["name"] + ", your age is " + user["age"]);
    } else if(user["sex"] == "Female"){
        console.log("Mrs " + user["name"] + ", your age is " + user["age"]);
    } else{
        console.log("Others " + user["name"] + ", your age is " + user["age"]);
    }
}

function canVote1(user){
    if(user["age"] >= 18){
        console.log("Yes " + user["name"] + " can vote")
    }
}
greet2(user);
canVote1(user);

/* We can also array of objects & also have nesting this object can be array or anything  */
let nestobj = ["Sabuj", 26, {name : "Sabuj", age : "26", 
cities:["delhi" , "Kolkata", "Jalandhar",{country :"Nepal", city :"kathmandu"}]
}];

/* Creating Array of Objects */
const arr_obj =[
    {name :"Sabuj Maity",age : 26},
    {name : "Sourav Maji",age : 27}
]

/* Creating a Object of Objects */
const obj_obj = {
    name : "Dax Patel", branch : "AI", age : 26 , sex: "male", address : {city : "Vadodra", state : "gujrat", country:"India"}
}
console.log(obj_obj.address["city"]);
console.log(obj_obj.address.state);