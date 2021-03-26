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

let [[a, b, c], [d, e, f], [g, h, i], [j, k, l]] = shoppingList;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
//console.logged these to check and make sure each value/variable was returning correctly 

let shoppingListToo = [a, b, c, d, e, f, g, h, i, j, k, l];
//it wouldn't let me rename it 'shoppingList'
console.log(shoppingListToo);

let newObj = shoppingListToo.map(function(item, index) {
    
    obj.cleaning.push(d, e, f);
    obj.gifts.push(g, h, i);
    obj.clothing.push(j, k, l);
    obj.grocery.push(a, b, c);

})

console.log(obj.cleaning[0]); //returns 'cleaner'
console.log(obj.gifts[1]); //returns 'pens'
console.log(obj.clothing[0]); //returns 'shoes'
console.log(obj.grocery[1]); //returns 'milk'




