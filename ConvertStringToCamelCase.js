/* 
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 */

// let str = "the-stealth-warrior"
// function toCamelCase(str){

//     this.newStr; 
//     this.newI;
//     for( let i of str ){
//       if (i === "-") {
//           let j = str.indexOf(i);
//           let jP = j + 1;
//           let upper = str[jP].toUpperCase();
//           newI = str.replace(str[jP], upper);
//         }
//     }
//     this.newStr = newI.replace(/-/g,'')
//     return newStr;

// }
// toCamelCase(str); 
/* 
not using for-of loop as when you run the loop. The location for '-' is always calculated for its first occurance
*/

let str = "the_stealth_warrior"
function toCamelCase(str){

    // attaching newStr to toCamelCase function so that it can be accessible inside and outside of for loop
    // creating new varaible newI which will be used to store the argument passed
    // changes like converting to capital letter can be saved now.
    this.newStr; 
    this.newI = str;
    let i;
    // return empty string if nothing is passed as argument
    if( !str ){
        return " "
    }
    for( i=0; i < str.length ; i++ ){
      if ( str[i] === "-" || str[i] === "_" ) {
          let j = str[i + 1];
          let jP = j;
          let upper = jP.toUpperCase();
          newI = newI.replace(jP, upper);
        }
    }

    // replace - and also _ if its there
    this.newStr = newI.replace(/-|_/g,'')
    return newStr;

}
console.log(toCamelCase(str)); 
