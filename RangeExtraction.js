/* 
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
*/

const Li = [-3,-2,-1,2,10,15,16,18,19,20];
// var arr     = [1, 2, 3, 4, 5, 10, 9, 8, 7, 6, 5, 4, 9, 10, 11, 7];
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

function solution(list){
 // TODO: complete solution 
 var results = [];
 var temp = [];
 var limit   = list.length - 1; 
 var lim = list.length - 2; 
 
 let diff;
 var sequence = 0;
 for ( var i = 0; i < limit ; i++ ) {


    var diff1 = list[i+1] - list[i];
    var diff2 = list[i+2] - list[i+1];
    sequence = ( diff1 ===  1 && diff2 === 1 ) || 
                    (diff1 === -1 && diff2 === -1 ) ? true : false;
    if( sequence === true && list[i+3] !== undefined ) {
        temp.push(list[i]);
        i = i+2
                if( diff1 ===  1 && diff2 === 1 ){
                    for ( var i = i; i < lim; i++ ) {
                        var diffp = list[i+1] - list[i];
                        strike = (diffp === 1 ) ? true : false;
                        if( strike == true && i !== lim ){
                            i++
                        }
                        else if( strike == true && i === undefined ){
                            temp = [ ...temp, list[i+1] ];
                            temp = temp.join('-')
                            results.push(temp);
                            temp = [];
                            break;
                        }
                        else{
                            temp = [ ...temp, list[i] ];
                            temp = temp.join('-')
                            results.push(temp);
                            temp = [];
                            break;
                        }
                    }
                    
                }
                if( diff1 ===  -1 && diff2 === -1  ){
                    for ( var i = i; i <= lim; i++ ) {
                        var diffn = list[i+1] - list[i];
                        strike = (diffn === -1 ) ? true : false;
                        if( strike == true && i !== lim ){
                            i++
                        }
                        else if( strike == true && i === undefined ){
                            temp = [ ...temp, list[i+1] ];
                            temp = temp.join('-')
                            results.push(temp);
                            temp = [];
                            break;
                        }
                        else {
                            temp = [ ...temp, list[i] ];
                            temp = temp.join('-')
                            results.push(temp);
                            temp = [];
                            break;
                        }
                    }
                }
        continue;
    
    }else if( sequence === true && list[i+3] === undefined ){
            temp = [ list[i], list[i+2] ];
            temp = temp.join('-')
            results.push(temp)
            temp=[];
            break;
    }
    else{
        results.push(list[i]);
    }
    }
    return String(results);

};
console.log(solution(Li));

// const Li = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
// // var arr     = [1, 2, 3, 4, 5, 10, 9, 8, 7, 6, 5, 4, 9, 10, 11, 7];
// // returns "-6,-3-1,3-5,7-11,14,15,17-20"

// function solution(list){
//  // TODO: complete solution 
//  var results = [];
//  var temp = [];
//  var limit   = list.length - 1; 
//  var lim = list.length - 2; 
 
//  let diff;
//  var sequence = 0;
//  for ( var i = 0; i < limit ; i++ ) {

//    var diff1 = list[i+1] - list[i];
//    var diff2 = list[i+2] - list[i+1];
//    sequence = ( diff1 ===  1 && diff2 === 1 ) || 
//                  (diff1 === -1 && diff2 === -1 ) ? true : false;
//    if ( sequence === true  ) {
//      temp.push(list[i]);
//      i = i+2
//      if( diff1 ===  1 && diff2 === 1 ){
//          for ( var i = i; i < limit; i++ ) {
//              var diffp = list[i+1] - list[i];
//              strike = (diffp === 1 ) ? true : false;
//              if( strike == true && i !== lim ){
//                  i++
//              }
//              else if( strike == true && i === lim ){
//                  temp = [ ...temp, list[i+1] ];
//                  temp = temp.join('-')
//                  results.push(temp);
//                  temp = [];
//                  break;
//              }
//              else{
//                  temp = [ ...temp, list[i] ];
//                  temp = temp.join('-')
//                  results.push(temp);
//                  temp = [];
//                  break;
//              }
//          }
         
//      }
//      if( diff1 ===  -1 && diff2 === -1  ){
//          for ( var i = i; i <= limit; i++ ) {
//              var diffn = list[i+1] - list[i];
//              strike = (diffn === -1 ) ? true : false;
//              if( strike == true && i !== lim ){
//                  i++
//              }
//              else if( strike == true && i === lim ){
//                  temp = [ ...temp, list[i+1] ];
//                  temp = temp.join('-')
//                  results.push(temp);
//                  temp = [];
//                  break;
//              }
//              else {
//                  temp = [ ...temp, list[i] ];
//                  temp = temp.join('-')
//                  results.push(temp);
//                  temp = [];
//                  break;
//              }
//          }
//      }
//      continue;
 
//    }else{
//        results.push(list[i]);
//    }
//  }
//  return String(results);

// };
// solution(Li);

// var r = []
// var l = [1];
// l = [ ...l , -3];
// l = l.join('-');
// r.push(l)
// console.log(r);

// l = [4];
// l = [ ...l , 8];
// l = l.join('-');
// console.log(l);
// r.push(l)
// console.log(r)

// var arr     = [1, 2, 3, 4, 5, 10, 9, 8, 7, 6, 5, 4, 9, 10, 11, 7];
// var results = [];
// var temp = []
// var limit   = arr.length; 

// let diff;
// var sequence = 0;
// for ( var i = 0; i < limit; i++ ) {
//   var diff1 = arr[i+1] - arr[i];
//   var diff2 = arr[i+2] - arr[i+1];
//   sequence = ( diff1 ===  1 && diff2 === 1 ) || 
//                 (diff1 === -1 && diff2 === -1 ) ? true : false;
//   if ( sequence === true  ) {
//     results.push(`${arr[i]}`);
//     i = i+2
//     if( diff1 ===  1 && diff2 === 1 ){
//         for ( var i = i; i < limit; i++ ) {
//             var diffp = arr[i+1] - arr[i];
//             strike = (diffp === 1 ) ? true : false;
//             if( strike == true ){
//                 i++
//             }
//             else{
//                 results.push(`-${arr[i]}`);
//                 break;
//             }
//         }
        
//     }
//     if( diff1 ===  -1 && diff2 === -1 ){
//         for ( var i = i; i < limit; i++ ) {
//             var diffn = arr[i+1] - arr[i];
//             strike = (diffn === -1 ) ? true : false;
//             if( strike == true ){
//                 i++
//             }
//             else{
//                 results.push(`-${arr[i]}`);
//                 break;
//             }
//         }
//     }
//     continue;

//   }else{
//       results.push(`${arr[i]}`)
//   }
// }
// console.log(results);


// let diff;
// var sequence = 0;
// for ( var i = 0; i < limit; i++ ) {
//   var diff1 = arr[i+1] - arr[i];
//   var diff2 = arr[i+2] - arr[i+1];
//   sequence = ( diff1 ===  1 && diff2 === 1 ) || 
//                 (diff1 === -1 && diff2 === -1 ) ? true : false;
//   if ( sequence === true  ) {
//     results.push(`${arr[i]}-${arr[i+2]}`);
//     i = i+2
//     // temp[2]=
//     continue;
//   }else{
//       results.push(`${arr[i]}`)
//   }
// }
// console.log(results);