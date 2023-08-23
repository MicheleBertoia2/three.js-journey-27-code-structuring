import Robot from './Robot.js'

export default class FlyingRobot extends Robot
{
    constructor(name, legs)
    {
        super(name, legs)

    }

    takeOff()
    {
        console.log(`Have a good fly ${this.robotName}`)
    }

    land(){
        console.log(`Welcome back ${this.robotName}`);
    }

    sayHi()
    {
        console.log(`Hello! my name is ${this.robotName}, and i'm a flying robot`);
    }
}