/** Example 01 starting */

function sumFn(a){
    return (b)=>{
        return a+b;
    }
}

const sum = sumFn(1);
console.log(sum(6));

/** Example 01 Ending */

/** Example 02 starting */

function sumFn2(a){
    return (b)=>{
        return a+b;
    }
}

console.log(sumFn2(2)(3))

/** Example 02 Ending */


/** Example 03 starting (Arrow Functions)*/

const sumFn3 = a => b => a+b;
console.log(sumFn3(7)(3))

/** Example 03 Ending */

