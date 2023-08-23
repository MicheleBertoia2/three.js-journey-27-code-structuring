export default class Robot 
{
    constructor(name, legs)
    {
        this.robotName = name
        this.legs = legs

        console.log(`I am ${this.robotName}. Thank you creator`);
        this.sayHi()
    }

    sayHi()
    {
        console.log(`Hello! my name is ${this.robotName}`);
    }
}