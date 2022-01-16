

// each key is called as property, 
// thomas is an object 
// unstructured data : objects 
// ordered data : array 
const thomas = {
    firstName:"Thomaskutty",
    lastName: "Reji",
    profession:"data science",
    age:2022-1996,
    friends:['Michael','Peter','Steven']
}

console.log(thomas);
// extracting data from the object using dot 
console.log(thomas.profession); 

// using brackets : can use expressions in the brackets 
console.log(thomas['friends']); 

// passing expressions in the brackets 
const nameKey = 'Name'; 
console.log(thomas['first'+nameKey]); 

// if the js coudn't find the key in the object we get undefined as the output.

/*
const interestedIn = prompt("What do you want to know about Thomas? Choose between firstName,lastName,profession"); 

if (thomas[interestedIn]){
    console.log(thomas[interestedIn]); 
}else{
    console.log('wrong request')
}
*/

// adding new properties 
thomas.location = 'US'; 
thomas['twitter'] = '@sth_lfe'; 
console.log(thomas);

// operator precedence 
