var string = "The quick brown fox jumps over the lazy dog."
// var string = "This is not a pangram."
function isPangram(string){
    const usingSpread = [...string];
    let i;
    for( i = 0; i < usingSpread.length; i++ ){
        if( string.includes(usingSpread[i], string.indexOf(string[i+1])) ){
            return false;
        } 
    }
    return true;
}
console.log(isPangram(string))
// const usingSpread = [...string];
// console.log(usingSpread[1])
// console.log(string.indexOf(string[0+1]))