// This function convert Upper Case to lower Case..
function uppertolower(woed) {
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
let lower="abcdefghijklmnopqrstuvwxyz ";
let bag="";
for(let i=0;i<word.length;i++){
  for (let j = 0; j < upper.length; j++) {
    if(word[i]==upper[j] ||(word[i]==lower[j])){
      bag=bag+lower[j];
    }
  }
}
return bag;
}
// Write Here Your Word 
let word="RANJEeT kumar SaH";
let output=uppertolower(word)

// You use output as a Result.....
console.log(output);
// .........
