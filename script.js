'use strict';
var R = document.getElementById("R"); //  ?
// var check  = document.getElementById("check"); // btn check
var mess  = document.getElementById("mess"); // start guessing
var score  = document.getElementById("score"); // 20 --
var s  = document.getElementById("score").innerHTML; //20 entier
var best = document.getElementById("best"); // best score
var Random = Math.floor(Math.random() * 21); // nbr random
var test  = document.getElementById("test"); // l input


function verif (){
    
    
   if (test.value < Random && s>0){
        
        mess.innerHTML="the number is bigger";
        s--;
   score.innerHTML = s;
   }
   else if (test.value > Random){
    mess.innerHTML="the number is lower";
    s--;
   score.innerHTML = s;
   }else{
        R.innerHTML= Random;
        mess.innerHTML="GOOD JOB!";
        best.innerHTML= s;
        document.body.style.backgroundColor = "green";

}
   
   
    
}