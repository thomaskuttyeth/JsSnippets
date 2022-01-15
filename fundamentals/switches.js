
const day = 'friday';

// switch statements 
switch(day){
    case 'monday':
        console.log('plan course structure'); 
        console.log('go to coding meetup')
        break; 
    case 'tuesday':
        console.log('prepare theory videos'); 
        break; 
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break 
    case 'friday':
        console.log('record the videos')
        break; 
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekends') ; 
        break 
    default: 
        console.log(':>> ',"not a valid day" );
}


/* 
statements represents an action or command eg.print, if else, etc. 
expression is a combination of variables, operations, values that yields a result value.
an expression is something that can be reduced to a value. 
ex. 1+3 is an expression but foo = 1+3 is not an expression. 
*/ 

const age = 35; 

//ternery operator 
age >= 18 ? console.log('i like to drink drink wine 🍷'): 
console.log('i like to drink drink water 💧')


// another way 

const myage = 25; 
const drink = age>=18? 'wine' : 'water'; 
console.log(drink) 

let drink2; 
if (age>=18){
    drink2 ='wine'; 
}else{
    drink2 = 'water'
}
console.log(drink2)
 
console.log(`i like to drink ${age>=18? 'wine' : 'water'}`) 

