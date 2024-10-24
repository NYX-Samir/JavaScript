// Static = the static keyword in JavaScript is used to create methods or properties on a class that belong to the class itself, not to any specific object created from the class.

class Area{
    static Pi=3.14;

    static cubes(side){
        return side**3
    }
}
console.log(Area.Pi)
console.log(Area.cubes(3))

