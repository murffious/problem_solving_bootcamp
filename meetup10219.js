let lives_in_denver = true; // Boolean 
let gov_Hubert = 10;// base case
let votes = 0; // accumulator
// used for looping - elegant 
function smokeWeed(votes){
// base case - should I keep running
// hit it = NOT continue
console.log("votes", votes)
    if(votes === 100){
        console.log("hello",gov_Hubert)
       return gov_Hubert;
    }


    smokeWeed(votes + 1 )
}
// smokeWeed(votes)
// TIME -- SPACE variable - scale BigO)
[23,23,4,34,45,5,4]
// .sort()
const sortMe = [0,1,0,1,0,1,1,0,0,1];
// compare index 1 and the next one 
// leave all same unless i1 is greater than next one
function sortThisDogg(sortMe, index = 0){
    console.log("top yo dogg:",index, sortMe)
    if(index === sortMe.length -1){
        console.log("yo", sortMe, index)
        return sortMe;
    }
    let temp;
// swap inside here 
    if(sortMe[index+1] < sortMe[index]){
      temp = sortMe[index+1];
      sortMe[index+1] = sortMe[index];
      sortMe[index] = temp;
      sortThisDogg(sortMe, index-1)
    } else {
      sortThisDogg(sortMe, index+1)
    }

}

sortThisDogg(sortMe);
// brtue froce 
// temparoy 
//divide and conquer
// index, partition 
// compare /swap
//swap and compare
