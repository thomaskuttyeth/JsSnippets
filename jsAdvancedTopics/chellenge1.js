
/* A team only wins if it has at least double the average score of the other team. 
otherwise no team wins */ 

// creating an arrow function 'calcAverage to calculate the average of 2 scores
const calcAverage = (s1,s2,s3) => (s1+s2+s3)/3; 

// creating the checkWinner function to determine the winner 
function checkWinner(avgDolphins,avgKoalas){
    if (avgDolphins>=(2*avgKoalas)){
        console.log(`Dolphins won the match 🏆(${avgDolphins},${avgKoalas})`)
    }else if (avgKoalas>=(2*avgDolphins)){
        console.log(`Dolphins won the match 🏆 (${avgKoalas},${avgDolphins})`)
    }else{
        console.log('No team wins')
    }
}
// data 
avgDolphins = calcAverage(85,54,41); 
avgKoalas = calcAverage(23,34,27); 
checkWinner(avgDolphins,avgKoalas); 

