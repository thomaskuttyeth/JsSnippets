
const thomas = ['thomaskutty','datascience',25,'javascript',['reethu','sophie','martin','corey']]; 
for (let i = thomas.length-1; i>-1; i--){
    console.log(thomas[i])
}

for(let exercise = 1; exercise <=3; exercise ++){
    console.log(`-----------> starting excercise ${exercise}`); 
    for (let rep = 1; rep<6; rep++){
        console.log(`lifting weight excersice ${exercise} repetition ${rep}`); 
    }
}