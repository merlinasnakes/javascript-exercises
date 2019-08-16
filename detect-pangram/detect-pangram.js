/* 
============
Description
============

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

=======
Tests
=======
var string = "The quick brown fox jumps over the lazy dog." (true)
var string = "This is not a pangram." (false)

*/

function isPangram(string){

    let pangramArray = string.toLowerCase().split("");
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    
    for (i=0; i < alphabet.length; i++){
          pangramArray.includes(alphabet[i])    
     if (!pangramArray.includes(alphabet[i])) 
          { return false; break; }     
      }
              return true  
  }


