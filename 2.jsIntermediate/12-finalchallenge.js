

// (billValue>=50 && billValue <=300)? billValue*(15/100):billValue*(20/100); 
// part1 
const bills = [22,295,176,440,37,105,10,1100,86,52]; 
//part2 
const tips = []; 
const totals = []; 
// calcTip function to calculate the tips and total values for every bill; 

const calcTip = function(bill){
    let tip ; 
    if(bill>=50 && bill<=300){
        tip = .15* bill; 
    }else{
        tip = 0.2*bill
    }
    return tip 
}; 

for (let bill = 0; bill<bills.length; bill++){
    tips.push(calcTip(bills[bill])); 
    totals.push(calcTip(bills[bill]) + bills[bill]); 
}
console.log(bills); 
console.log(tips); 
console.log(totals); 

// bonus 
const calcAvg = function(arr){
    let avg = 0
    for(let i = 0 ; i <arr.length; i++){
        avg = avg+arr[i] ; 
    }
    return avg/arr.length; 
}

console.log(calcAvg(totals)); 