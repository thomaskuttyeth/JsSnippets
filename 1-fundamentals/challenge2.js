
// storing the scores of dolphins 
const dolphinScore1 = 96; 
const dolphinScore2 = 108; 
const dolphinScore3 = 89; 
// finding the avg score of dolphins 
const avgScoreDolphins = (dolphinScore1+dolphinScore2+dolphinScore3)/3; 

// storing the scores of koalas 
const kolScore1 = 100; 
const kolScore2 = 91; 
const kolScore3 = 110; 

// finding the avg score of koalas 
const avgScoreKols = (kolScore1+kolScore2+kolScore3)/3; 



if (avgScoreDolphins>avgScoreKols && avgScoreDolphins>=100){
    console.log(`dolphins won the game. The got ${avgScoreDolphins}`)
}else if (avgScoreKols === avgScoreDolphins && avgScoreKols<100 && avgScoreDolphins<100){
    console.log('both team has same scores and they both got less than 100') 
}else if (avgScoreDolphins<avgScoreKols && avgScoreKols >=100){
    console.log(`koalas won the game.They got ${avgScoreKols}`)
}else{
    console.log('No team has scored achieved the minimum 100 score criteria')
}



