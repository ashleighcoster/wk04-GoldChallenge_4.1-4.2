/*
    Create a class named Polygon that contains the following information:

    - A constructor method with a parameter to capture information (hint: this should be capturing an array of numbers).
        - assign the parameter to a key using 'this'
    - Has a method named perimeter, that should do the following:
        - return ONLY the parameter, or an empty array from the method
        - call the reduce method on your return value to get a single output value
    

    - Create a new object/instance of the class Polygon that is stored in a variable.
        - The new Polygon should accept an argument that is an array of 4 numbers
    
    - console.log the return value from the newly created Polygon.
*/
//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS
//* **************************************************

// Create a polygon with side lengths 3, 3, 8, and 8

// Print the perimeter

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
  
    perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
}
  
  const polygon = new Polygon([3, 3, 8, 8]);
  const square = new Polygon([10, 10, 10, 10]);
   
  console.log(polygon.perimeter());
  console.log(square.perimeter());
 



  

  
