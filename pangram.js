/* 
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/
var letter = "abcdefghijklmnopqrstuvwxyz" 
var string = "This is not a pangram.";
// var string = "The quick brown fox jumps over the lazy dog."
function isPangram(string){
    string = string.toLowerCase();
    const usingletter = [...letter];
    let i;
    for( i = 0; i < letter.length; i++ ){
        if( string.includes(usingletter[i]) ){
            continue;
        }
        else{
            return false
        }
    }
    return true;
}
console.log(isPangram(string))
// console.log(string.includes(usingletter[7]))
// console.log(usingletter[7])
// const usingSpread = [...string];
// console.log(usingSpread[1])
// console.log(string.indexOf(string[0+1]))

