// Recursion = Recursion in JavaScript is a process where a function calls itself to solve a problem by breaking it down into smaller, similar subproblems. It requires a base case to terminate the recursive calls and a recursive case that reduces the problem size in each call until it reaches the base case.

function Factorial(n){
    if(n==0){
        return 1;
    }
    return n*Factorial(n-1);
}
let a;
a=Factorial(6);
console.log(a);