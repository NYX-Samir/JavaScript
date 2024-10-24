//sorting refers to the process of arranging elements in an array in a specific order, typically in ascending or descending order. JavaScript provides a built-in method called .sort() to perform this task.

const numbers=[2,4,67,34,98,0,3]
numbers.sort((a,b)=>a-b)
console.log(numbers)

numbers.sort((a,b)=>b-a)
console.log(numbers)

const age=[
    {Name:'Syntax Error',Age:22},
    {Name:"Code with harry",Age:32},
    {Name:'coder bhai',Age:18}
]
age.sort((a,b)=>b.Age-a.Age);
console.log(age)
