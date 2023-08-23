import Experience from "./Experience.js";
export default class Camera 
{
  constructor()
  {
    this.experience = new Experience()
    this.sizes = this.experience.sixes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas
  }
}