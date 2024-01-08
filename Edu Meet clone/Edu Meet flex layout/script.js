
students = document.getElementById("count");

counts = setInterval(manan);
upto = 0;
function manan() {
var count = document.getElementById("count");
count.innerHTML=++upto + "%";
if(upto==90) {
clearInterval(counts);
}
} 


// teach = document.getElementById("teach");

// counts = setInterval(manan);
// upto = 0;
// function manan() {
// var count = document.getElementById("teach");
// count.innerHTML=++upto;
// if(upto==150) {
// clearInterval(counts);
// }
// } 