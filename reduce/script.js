// Reduce = reduce takes a function and first value, then processes each element in the array, using the function to combine them into a single output value.

let bills = [12,45,65,75,31,21]
let total = bills.reduce(Sum);
console.log(total);

function Sum(accumulator,element){
    return accumulator + element ;
}

let Max = bills.reduce(max)
console.log(Max)
function max(accumulator,element){
    return Math.max(accumulator,element);
}
let Min = bills.reduce(min)
console.log(Min)
function min(accumulator,element){
    return Math.min(accumulator,element);
}