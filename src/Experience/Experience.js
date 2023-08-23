import Sizes from "./Utils/Sizes"

export default class Experience
{
  constructor(canvas) 
  {
    //Global Access
    window.experience = this
    //options
    this.canvas = canvas

    //Setup
    this.sizes = new Sizes()

    this.sizes.on('resize', () =>
    {
      this.resize()
    })
  }

  resize()
  {
    console.log('a resize had occurred');
  }
}