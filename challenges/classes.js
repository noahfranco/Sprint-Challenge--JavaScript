// 1. Copy and paste your prototype in here and refactor into class syntax.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

/*
function CuboidMaker(accomplish) {
    this.leangth = accomplish.leangth; 
    this.width = accomplish.width; 
    this.height = accomplish.height; 
    this.num2 = accomplish.num2
  }
  */

class CuboidMaker {
    constructor(accomplish){
        this.leangth = accomplish.leangth; 
        this.width = accomplish.width; 
        this.height = accomplish.height; 
        this.num2 = accomplish.num2; 
    }; 
    volume() {
        return this.leangth *  this.width *  this.height; 
    }
    surfaceArea() {
        return this.num2 * (this.leangth * this.width + this.leangth * this.height + this.width * this.height); 
    }
}; 
  
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  
  
  const cuboid = new CuboidMaker({
    leangth: 4, 
    width: 5, 
    height: 5,
    num2: 2
  }); 











// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.