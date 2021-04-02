/*
    - With the given shoppingList array, use array destructuring to assign each array within the shoppingList array its own variable. Then, reinitialize the shoppingList array so it is a single array containing all of the values from the original array. 
    
    - after the shoppingList array has been reinitialized, using the array.prototype.map method, map over the newly initialized shoppingList array. You should do the following within the map method:
        - include a parameter for index
        - utilize the array.prototype.push method to push the current value being mapped over into the appropriate key/value pair in the obj variable
            - you will need to implement some sort of logic to check the index of the current item being mapped over.
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

let shoppingList = [[ 'eggs', 'milk', 'butter' ], [ 'cleaner', 'trash bags', 'detergent' ], [ 'thank you card', 'pens', 'gift wrapping' ], [ 'shoes', 't-shirt', 'slacks' ]];

let obj = {
cleaning: [],
gifts: [],
clothing: [],
grocery: []
};


let food = shoppingList[0]; 
console.log(food);
let cleaningSupplies = shoppingList[1]; 
let stationary = shoppingList[2]; 
let clothes = shoppingList[3];

shoppingList = [...food, ...cleaningSupplies, ...stationary, ...clothes];

console.log(shoppingList)

let newObj = shoppingList.map(function(item, index) {
    if (index == 0 || index == 1 || index == 2) {
        obj.grocery.push(food);  
    } else if (index == 3 || index == 4 || index == 5) {
        obj.cleaning.push(cleaningSupplies);
    } else if (index == 6 || index == 7 || index == 8) {
        obj.gifts.push(stationary);
    } else if (index == 9 || index == 10 || index == 11) {
        obj.clothing.push(clothes);
    } else {
        return false; 
    }
}); 

console.log(obj.cleaning[0]); 
console.log(obj.gifts[0]); 
console.log(obj.clothing[0]); 
console.log(obj.grocery[0]); 









