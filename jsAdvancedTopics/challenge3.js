
// mark and john comparing their bmis
// bmi = mass/(height**2) (mass in kg and height in meter) 

// creating mark object 
const mark = {
    fullname: "Mark Miller",
    mass : 78, 
    height: 1.69,

    calcBmi : function(){
        this.bmi = this.mass/(this.height**2); 
        return this.bmi; 
    }
}
// create john object 
const john = {
    fullname: "John Smith",
    mass : 92, 
    height: 1.95, 
    calcBmi : function(){
        this.bmi = this.mass/(this.height**2); 
        return this.bmi; 
    }    
}
if (mark.calcBmi()>john.calcBmi()){
    console.log(`Marks's BMI (${mark.bmi}) is higher than John's BMI (${john.bmi})!.`)
}else if (mark.bmi ===john.bmi){
    console.log('Both BMIs are equal') 
}else{
    console.log(`Johns's BMI (${john.bmi}) is higher than Mark's BMI (${mark.bmi})!.`)
}

