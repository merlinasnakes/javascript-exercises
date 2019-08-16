/*
============
Description
============
 An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case


 */

function isIsogram(str){
  let arrayString = str.toLowerCase().split("");   
  
  for (i=0; i < arrayString.length; i++){
    let x = arrayString.indexOf(arrayString[i]);
    if (x !== i) 
         { return false; break; }     
     }
             return true; 
}

