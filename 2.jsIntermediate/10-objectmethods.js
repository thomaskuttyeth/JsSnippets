

const jonas = {
    firstName: "Jonas", 
    lastName : "Schmedtmann", 
    birthYear:1996,
    job: 'data scientist',
    friends :['Michael','Peter','Steven'], 
    hasDriversLicense: true, 

    // first version without this keyword 
    // calcAge: function(birthYear){
    //     return 2022-birthYear; 
    // }

    // we need a function expression not as a declaration 
    // calcAge: function(){
    //     console.log(this); 
    //     return 2022-this.birthYear; 
    //} 
    calcAge : function(){
        this.age = 2022-this.birthYear; 
        return this.age; 
    }, 
    getSummary : function(){
        let license ; 
        if (this.hasDriversLicense){
            license = 'a'; 
        }else{
            license = 'no' 
        }
        this.summary = `${this.firstName} is a ${this.calcAge()} year old teacher and he has ${license} license.`; 
        return this.summary; 
    }
}; 

console.log(jonas.calcAge());
// console.log(jonas["calcAge"](jonas.birthYear)); 
console.log(jonas.age); 
// reading the attributes directly in the function 
// challenge 
// 'jonas is a 46 year old teacher and he has a drivers license

console.log(jonas.getSummary()); 
/*
getSummary: function(){
    return `John has ${this.hasDriversLicense ? "a": "no"} drivers license.`
}

*/
// note : arrays are also objects and they have methods on them. eg. push/shift etc.
