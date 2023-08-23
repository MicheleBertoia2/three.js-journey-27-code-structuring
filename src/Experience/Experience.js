
import * as THREE from 'three'
import Sizes from "./Utils/Sizes"
import Time from "./Utils/Time"
import Camera from './Camera'

let instance = null

export default class Experience
{
  constructor(canvas) 
  {
    if(instance)
    {
      return instance
    }

    instance = this

    //Global Access
    window.experience = this

    //Options
    this.canvas = canvas

    //Setup
    this.sizes = new Sizes()
    this.time = new Time()
    this.scene = new THREE.Scene()
    this.camera = new Camera()

    //Sizes change event
    this.sizes.on('resize', () =>
    {
      this.resize()
    })

    //Time tick event
    this.time.on('tick', () =>
    {
      this.update()
    })
    
  }

  /**
   * 
   */
  resize()
  {
    console.log('a resize had occurred');
  }

  /**
   * 
   */
  update(){

  }
}