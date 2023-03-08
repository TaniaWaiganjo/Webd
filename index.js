let firstName="John";
let lastname="Williams";
//Creating strings...Template literal
let fullname ='${firstName}Alan${lastname}';

function addressByNameReply(name){
    let message ='Im currently out of the office';
    return'Hi${name},${message}';

}
//Using the function
addressByNameReply('John');

//Alerting peaches from the array using index
const ffruits = [
    'Apples',
    'Oranges',
    'Peaches',
    'Grapes'
];
const fruit = 'ffruits[2]'; // update this line

alert(fruit);

//INPUTS
document.getElementById('userEmail').value
document.getElementById('terms').checked
let my_input =document.getElementById('my_input');
my_input.addEventListener("input",function(){alert(this.value)});//this value refers to my_input reference
let mruits=["Apples","Pears","Bananas"]
//adding to arrays
mruits.push("Oranges")
//array.length
mruits.length

//FOR LOOP
for (i=0; i<5; i++)
{
    'loop${i}';
}

//for loop with console.log
for(i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//objects
let david={
    firstName:"David",
    lastname:"Ames",
    email:"david@codeschoolhouse.com"
    //key:value
}
 //david.email returns "david@codeschoolhouse.com"
 david["email"] //also returns above
 //JSON- Javascript object notation
 let car = {
    color:'#fff',
    make: 'Honda',
    model: 'Accord',
};

//For in loop
//better suited for looping objects
let pet={
    species:'cat',
    name:'whiskers',
    favfood:'milk'
};
//item in this case is a variable. Cant use pet.item because values are strings not numbers
for(item in pet){
    console.log(pet[item])
}
let fruits = {
    apples: {
        price: .20,
        total: 16
    },
    pears: {
        price: .80,
        total: 21
    }
};

let totalPrice = 0;

for (let fruit in fruits) {
    totalPrice = totalPrice + (fruits[fruit].price * fruits[fruit].total) ;
    console.log(totalPrice)
}
//JQUERY-library
//Get refernces to elements
//help us hide, show or toggle elements

//Lodash-library
//working with arrays,objects,numbers and strings
//provides functions for grouping and sorting of arrays and objects

//Angular JS-framework
//Html into reusable components
