// try{
// let num1 = 4
// let num2 = 0
// let result = num1 / num2;
// if(result === Infinity) 
//     { throw Error ('waxaan ma shaqenayan niyahw');}
// console.log(result);
// }



// catch (e) {
//     console.log('e.message');
// }
// finally {
//     console.log("this is gonna execute anyway");
// }

try{
let num1 = 4
let num2 = 0
let result = num1 / num2;
if(result === Infinity) {
    throw Error('waxaan ma shaqenayan niyahw');}
 console.log(result);}

    catch (e) {
    console.log(e.message);
}
finally {
    console.log("this is gonna execute anyway");
}