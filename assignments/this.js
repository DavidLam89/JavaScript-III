/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "this" points to the window object when it is in global scope. 
* 2. when a function is called after an object and a dot, "this" points to that object.
* 3. when a constructor function is called to create an object, "this" points to that object.
* 4. when call or apply is used, "this" points to the object that is passed to the methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let x = this;
console.log(x);

// Principle 2

// code example for Implicit Binding
const myObj = {
    myName: "David", 
    sayMyName: function() {
        console.log(this.myName);
    } 
}
myObj.sayMyName()

// Principle 3

// code example for New Binding
function NewFriend(name) {
    this.friend = name;
    this.sayHi = function() {
      console.log(`${this.friend} says hi.`);
    };
  }
  
const gabe = new NewFriend('Gabe');
const josh = new NewFriend('Josh');
  
gabe.sayHi();
josh.sayHi();

// Principle 4

// code example for Explicit Binding
let friend1 = {
    name: function() {
        return this.name;
    }
}
let friend2 = {
    name: "Lambda",
}
console.log(friend1.name.call(friend2));
