//A nested object in JavaScript is an object that contains another object as a property. This allows for creating a Nested structure where objects are stored within other objects, making it easier to model complex data.
const Person ={
    Name:"Syntax Bhai",
    Age:22,
    Hobbies:["Gaming","Coding","Reading"],
    Address:{
        State:"Sikkim",
        City:"Gangtok",
        Area:"Arithang"
    }
}
console.log(Person.Name)
console.log(Person.Age)
console.log(Person.Hobbies[0])
console.log(Person.Hobbies[1])
console.log(Person.Address.State)
console.log(Person.Address.City)
console.log(Person.Address.Area)
