class shape {
    constructor(name){
        this.name = name
    }
    getArea(){
        throw new Error("Abstract method 'getArea' must be implemented by subclasses");
    }
    
    describe(){
return this.name
    }
}

class Rectangle extends shape{
    constructor(name,width,height){
        super(name)
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height
    }

}


class circle extends shape {
    constructor(name,radius){
        super(name)
        this.radius = radius
    }
    getArea(){
        return Math.PI * this.radius * this.radius
    }
}

const rectangle = new Rectangle('Rectangle1',10,20)
console.log(rectangle.describe());
console.log(`Area : ${rectangle.getArea()}`)

const circles = new circle("Circle1",5)
console.log(circles.describe())

console.log(`Area :${circles.getArea()}`)


