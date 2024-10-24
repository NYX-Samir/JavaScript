// super = The super keyword in JavaScript is used to call a parent class's constructor or methods from within a subclass.
class Animal{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }
}
class dog extends Animal{
    constructor(name,type,runSpeed){
        super(name,type)
        this.runSpeed=runSpeed;
    }
}
class fish extends Animal{
    constructor(name,type,swimSpeed){
        super(name,type)
        this.swimSpeed=swimSpeed;
    }
}
let Dog = new dog("tommy","land",20)
let Fish = new fish("goldy","water",30)

console.log(Dog.name)
console.log(Dog.type)
console.log(Dog.runSpeed)
console.log(Fish.name)
console.log(Fish.type)
console.log(Fish.swimSpeed)