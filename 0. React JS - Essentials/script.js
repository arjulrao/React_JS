// Arrays

[1, 2, 5, 6];
[1,8, 6, "apple", "mango", [], {}, ()=>{}, true]

// Array is these type of data structure that can hold more then one element or any type.

/* Mutable vs Immutable */
// Immutable --> Can't be change 
// Mutable --> Can be change


// In react there is something called "state"
// state is immutable in react, means we can't change (update) state directly.
// like
let state = [1, 2, 3];
state.pop()   // We can't do this in react. It's not allow in react.

// But we can give new value to state
let state_1 = [1, 2, 3, 4];  // We want to remove last 2 digit but we can change it directly like .pop, push, .shift etc..
// What we can do we give direct new value to state like.
state_1 = [1, 2];   // That we can do


let arr_1 = [1, 2, 3, 4]
let arr_2 = arr_1;
arr_2.pop();
console.log(arr_2);   // [1, 2, 3]
console.log(arr_1);    // [1, 2, 3]

// Problem is that ke array_2 ko pop karna par array_1 ke value bhe pop ho gai. Because of reference. But react ma ham direct state sa value nhii change kar sakta.
// So ues here spared operator for copy the arr_1(state).
// State can be anything means any kind of data. 

let stateVal = [1, 2, 3, 4];
let copyStateVal = [...stateVal];
copyStateVal.pop();
console.log(stateVal);   // [ 1, 2, 3, 4 ]
console.log(copyStateVal);  // [ 1, 2, 3]
// Now we want to change state value we can 
stateVal = copyStateVal;

let stateObj = {
    name : "Arjul",
    age : 24
};
// we can't change directly on stateObj in react.
// like 
/* stateObj.name = "Moin";
console.log(stateObj); // { name: 'Moin', age: 24 } */

let stateObjCopy = { ...stateObj};
stateObjCopy.name = "Moin";
console.log(stateObjCopy);  // { name: 'Moin', age: 24 }

// Now if we want to change state value 
stateObj = stateObjCopy; 

/* We can't change the state directly in react so what we can do we make a copy of state using spared operator (not reference ) and update the copy and assign the copy value to state because we can't update but we reassign the value. */

/* Destructuring  */

let obj = { name : "Arjul Rao", age: 26};
// We want to access age 
obj.age // It give me age but if we want it multipal times like 1000 times we have have to rewrite this every time.
// We can can store this in variable using destructuring

const { age } = obj;
console.log(age);   // 26

let { name } = obj;
console.log(name); // Arjul Rao

let infoObj = {
    name : "Arjul",
    social : {
        facebook : {
            first : "arjul_fac1",
            sec: "arjul_fac2"
        }
    }
}
const {sec} = infoObj.social.facebook
console.log(sec);

let arr = [12, function(){}, "Hello"];

const [number, fun] = arr;
console.log(number, fun);  // 12 [Function (anonymous)]

const [val_1, , val_3]= arr;
console.log(val_1, val_3); // 12 Hello it skip the secund value.

/* Import and Export */
// We crate some component like --> cart, navbar, landing etc in separate files in then we connect every file in one or as per need.
// For that work we use Import and Export

/* Arrow Function (implicit return) */
const abcd = ()=> {
    // fat arrow function
}
abcd();

const abc = (val)=> {
    // fat arrow function (with one parameters)
}
// or we can write only one parameters

const ab = val => {
    // It works same
}

// Now fat arrow with implicit return

const imp = () => 15;
// It return 15, we don't open body. 
imp();   // 15
 
console.log(imp() + 5)   // 20

// If want to return obj in implicit return function
const objRetuen = () => {name: "anything_test"}
console.log(objRetuen())   // undefined

const objRet = () => ({name: "anything", age : 95});
console.log(objRet());  // { name: 'anything', age: 95 }


/* Map Filter */

// We use both(Map, Filter) on the array.
// They perform some test on array
// Imp -> Map and Filter return new Array 

let mapArray = [1, 2, 3, 5, 6];
// It go to every element and perform some task  and store in new array
// We have to return in map
// mapArray.forEach((val)=> {
//     console.log(val * 2)
// })

/* const newArray = mapArray.map(function(val){
    return (val * 2)
}) */

/* const newArray = mapArray.map((val)=> {
    return (val * 2)
}) */
/* const newArray = mapArray.map((val)=> (val * 2) ) */
const newArray = mapArray.map( val => (val * 2) );
console.log(newArray) // [ 2, 4, 6, 10, 12 ]

// We use react like us ein state

let state_map = [1, 2, 5, 6, 8];

const newState_map = state_map.map( elem => elem*5+10 );
console.log(newState_map)

// If number is bigger then 5 in array add 10 that number small then 5 is remain same.

let chackNum = [1, 5, 6, 8, 9, 4, 3, 2, 7 ,21];

// const bigeerNum = chackNum.map( val => {
//     if (val > 5) {return (val + 10)} 
//     else return val
// })

const bigeerNum = chackNum.map( val => val>5 ? val+10 : val);

console.log(bigeerNum)

/* If we want to perform something in array every element */
/* Map return same length array */


/* filter can reduce size of array */
// Like remove all the number less then 5.

let fil_Array = [1, 5, 6, 8, 7, 2, 3, 4,];

// We give condition true / false it return only that value and place to new array.
let newFillArray = fil_Array.filter( elem => elem > 5);
console.log(newFillArray)   // [ 6, 8, 7 ]  Jo bhe element 5 sa bada hoga yusko he new array ma jaiga



let userInfo = [
    {name : "Moin", gender: "male"},
    {name : "Arjul", gender: "male"},
    {name : "Ruby", gender: "female"},
    {name : "Hamid", gender: "male"},
    {name : "Salman", gender: "male"},
    {name : "Gullo", gender: "female"},
    {name : "Allo", gender: "female"},
    {name : "Ravista", gender: "female"},

]

const male = userInfo.filter( elem => elem.gender === "male");
const female = userInfo.filter( elem => elem.gender === "female");
console.log(male)
console.log(female)