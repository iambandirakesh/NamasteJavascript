## OOPS in JavaScript:

**OOPS**:(Object Oriented Programming System) oops is methodology to design a program using classes and objects.
it simplifies software development and maintenance by providing some concepts:

1. object
2. class
3. inheritance
4. polymorphism
5. abstraction
6. encapsulation

### 1.Object:

- Any entity that has state and behavior is known as an object.
- For example, a chair, pen, table, keyboard, bike, etc. It can be physical or logical.
- An Object can be defined as an instance of a class.

#### Example:

```javascript []
var name = { name: "Praveen" }; //creation of an object
```

But, to create multiple objects of the same type, the object literal method is inefficient but we have a solution.

### Constructor functions:

- Constructors are functions designed to create new objects
- We can create objects in Js using functions as well.
- This is one example of creating an object using a function.

```javascript []
function Player(name, team) { //constructor function
this.name=name
this.team=team
}
var myObj = new Player("Virat Kohli","RCB");

//Above code is similar to this


Let myObj = {}

function Player(name, team) {
myObj.name=name
myObj.team=team

Return myObj
}

var myObj = new Player("Virat Kohli","RCB");


//Notice, how ‘this’ is replaced by myObj
```

```javascript []
let dog = new Animal();
```

### 'This' Keyword in Action:

- Inside the constructor this keyword refers to the new object being created.
- we can add properties and methods to this new object using _this_.
- These properties are then assigned to each instance of the object created using the constructor.

```javascript []
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.describe = function () {
    return `${this.name} is ${this.age} years old.`;
  };
}

const person1 = new Person("Mohi", 25);
console.log(person1.describe()); // Outputs: "Mohi is 25 years old."
```

### 2.Class:

- A class is a collection of objects. It is a logical entity.
- A class can also be defined as a blueprint from which you can create an individual object.
- A class contains fields and methods to describe the behavior of an object and to manipulate data.

#### Example:

```javascript []
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makesound() {
    return `${this.name} make ${this.sound} sound`;
  }
}
let dog = new Animal("dog", "bow"); // creation of an object
console.log(dog.makesound());
let cat = new Animal("cat", "meow"); // creation of an object, we can create multiple objects for the single instance of a class.
console.log(cat.makesound());
```

### 3.Inheritance:

---//----------------------------------------------------------------------------------------

### Copy by value and copy by reference:

#### Copy by value:

- In the JavaScript when we are try to copy the primitive values i.e Number,String,Boolean,Undefined,Null,BigInt these values get deep copied.
- that means that when we deep copied a value and try to change it's value it won't effect the original value.
- In the primitive types we can easily copy the value by the equal (=) sign.
  **Example**

```javascript []
let x = 10;
let y = x;
y += 10;
console.log(x); //10
console.log(y); //20
```

- in the example we copied the variable x value into y and modified it's value but i doesn't effected the original value.

### copy by reference:

- In the JavaScript when we try to copy the values on reference type or non-primitive type values it's copied only the address or reference that is called shallow copy.
- for deep copying the reference values we need to use Js methods like JSON,spread operator or lodash method.
- if we use spread operator it only deep copies the value by the one level and remaining level's will be copied by reference.
- if we need to deep copy to the nested levels as well then we need to use the JSON methods or Lodash method.
  **Example with spread operator**

```javascript []
let val = [10, 20, 30];
let CopyVal = [...val];
CopyVal[0] = 100;
console.log(val); //[10,20,30]
console.log(CopyVal); // [100,20,30]
```

- In the above example val variable is deep copied into the CopyVal and when we tried to modify it does not effected the original value because we used spread operator and value is single level only.

```javascript []
let val = [10, 20, [30, 40]];
let CopyVal = [...val];
CopyVal[2][0] = 100;
console.log(val); // [10,20,[100,40]]
console.log(CopyVal); //[10,20,[100,40]]
```

- in the above example also we copied value into anther variable try to modify but it also effected the original value because it has nested values.
- Spread operator only deep copy into single level.

  **Example with JSON**

```javascript []
let val = [10, 20, 30, [40, 50, [60, 70], 80], 90];
let copyVal = JSON.parse(JSON.stringify(val));
copyVal[3][1] = 300;
console.log(val); //[10,20,30,[40,50,[60,70],80],90]
console.log(copyVal); //[10,20,30,[40,300,[60,70],80],90]
```

- in the above we created a array and deep copied using JSON methods and tried to modify values so in the example even we modified the nested value it doesn't effected the original value.

**Example with lodash**

```javascript []
let lodash = require("lodash");
let val = [1, 2, 3, [4, 5, [6, 7], 8], 9];
let newVal = lodash.cloneDeep(val);
newVal[2][2][0] = 200;
console.log(val); //[1,2,3,[4,5,[6,7],8],9]
console.log(newVal); //[1,2,3,[4,5,[200,7],8],9]
```

- in the above as well value is deep copied.

### Pass by value and Pass by reference:

#### Pass by value:

- Pass by Value means that when you pass a variable to a function, JavaScript creates a copy of the variable’s value and uses it inside the function.
- This means any changes made to the variable inside the function do not affect the original variable outside the function.
  **Example**

```javascript []
let a = 21;
let b = 31;
function PassByValue(a, b) {
  a += b;
  b += a;
  console.log(a, b); //52, 83
}
PassByValue(a, b);
console.log(a, b); //21,31
```

- in the example we passed the value a,b inside a function and modified it but it doesn't effected outside value is called pass by value.

#### Pass By Reference:

- Pass by Reference means that when you pass a variable (specifically, objects or arrays) to a function, JavaScript passes the reference or memory address of the variable, not a copy.
- This means any changes made to the variable inside the function will affect the original variable outside the function.
  **Example**

```javascript []
let a = [1, 2, 4, 5];
function PassByReference(a) {
  for (let i = 0; i < a.length; i++) {
    a[i] = a[i] * i;
  }
  console.log(a); //[0, 2, 8, 15]
}
PassByReference(a);
console.log(a); //[0, 2, 8, 15]
```

- in the example we passed the value i.e array to inside a function and modified the array values so it's also effected the original value is called pass by reference.

### Shallow Copy Vs Deep Copy:

### What is JSON?

- it stands for JavaScript Object Notation.
- JSON syntax is derived from the JavaScript Object,but the JSON formate is text only.
- meaning the JSON object is quite literally just a string.

**Example**

```javascript []
let obj = { fname: "Rakesh", lname: "Reddy", Age: 21 };
let jsonObj = JOSN.stringify(obj);
console.log(obj); //{fname:"Rakesh",lname:"Reddy",Age:21}
console.log(jsonObj); //{"fname":"Rakesh","lname":"Reddy","Age":21}  JSON object just like a string
```

#### When do we use a JSON object?

- JSON data is light weight.
- JSON data is used to read the data from the server and display it on the webpage
- JSON data is mainly is used to exchange the data between the server and browser. JSON data is light weight so the data processing is faster.
- When we exchange data between a browser and a server it can only be text, hence we can use JSON for this.

#### Methods to convert JSON.

**Sending Data**
_JSON.stringify()_ will converts the JavaScript object into the JSON object that can send to the web browser.

```javascript []
let obj = { fname: "Praveen", lname: "Reddy", Age: 24 };
console.log(JSON.stringify(obj)); //{"fname":"Praveen","lname":"Reddy","Age":24}
```

**Receiving Data**
_JSON.parse()_ will converts the text into the JavaScript Object.

```javascript []
let JsonObj = { fname: "Praveen", lname: "Reddy", Age: 24 };
console.log(JSON.parse(JsonObj)); //{ fname: "Praveen", lname: "Reddy", Age: 24 }
```

### JavaScript object vs. JSON object syntax

- A Javascript object has a similar syntax to JSON, it uses curly braces and key/value pairs.

```javascript []
//JavaScript Object
let obj = { fname: "Praveen", lname: "Reddy", Age: 24 };
//JSON Object
let JsonObj = { fname: "Praveen", lname: "Reddy", Age: 24 };
```

- The main difference in syntax is that in a JSON object the keys must be a string written with double quotes.

### JSON Data Types:

When sending our JSON text it must have a valid JSON data type, those include:

- String
- Number
- Object
- Boolean
- Array
- Null

**JSON values can't be:**

- A Function
- A Date
- Undefined

### Higher Order Functions:

- Higher order functions are functions that take one or more functions as arguments, or return a function as their result.
- This functions are also called as first class citizen in JavaScript (Ability to treat functions as values)

```javascript []
// Callback function, passed as a parameter in the higher order function
function callbackFunction() {
  console.log("I am a callback function");
}
//Higher Order function
function HigherOrderFunction(func) {
  console.log("I am a Higher Order Function");
  func();
}
HigherOrderFunction(callbackFunction);
```

In the above example 'HigherOrderFunction' is a HOF function because it accepts the function as a value.
**Advantages**

1. re-usability
2. simplicity
3. Easy to understand
4. Extendability

#### What is a callback function?

- A callback function is a function that can be as an argument to the another function.
  **Example**

```javascript []
function cb() {
  console.log("I am a callback Function");
}
function HigherOrderFunction(cb) {
  console.log("I am a Higher Order Function");
  cb();
}
```

### Array Methods(Operations):

**1. map():**

- creates a new array from calling a function for every array elements.
- does not execute for empty elements.
- does not change the original array.

**syntax**

```javascript []
array.map(function(currentValue, index, arr), thisValue)
```

**Example**

```javascript []
let arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.map((val, idx) => {
  return val * 2;
});
console.log(newArr); //[2, 4, 6, 8, 10, 12]
console.log(arr); //[1, 2, 3, 4, 5, 6]
```

**2. forEach():**

- method calls a function for each element in an array.
- does not execute for empty elements.
- does not return anything.
- does not change original array

**syntax**

```javascript []
array.forEach(function(currentValue, index, arr), thisValue)
```

**Example**

```javascript []
let sum = 0;
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((val, idx) => {
  sum += val;
});
```

**3. filter():**

- method creates a new array filled with elements that pass a test provided by a function.
- does not execute for the empty elements.
- does not change the original array.

**syntax**

```javascript []
array.filter(function(currentValue, index, arr), thisValue)
```

**Example**

```javascript []
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let newArr = arr.filter((val, idx) => {
  return val % 2 === 0;
});
console.log(newArr); //[2,4,6,8]
```

**4. find():**

- It returns a value of first element that passes a test condition.
- it returns 'undefined' if no element passes the test condition.
- it does not execute for the empty elements.
- it does not change the original array.

**syntax**

```javascript []
array.find(function(currentValue, index, arr),thisValue)
```

**Example**

```javascript []
let val = [9, 7, 5, 2, 5, 8];
let firstVal = val.find((val, idx) => val % 2 === 0);
console.log(firstVal); // 2
```

**5. reduce():**

- reduce method is used when we want reduce the array into a single value.
- does not change the original array.
- does not execute for empty elements.

**syntax**

```javascript []
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

**Example**

```javascript []
let arr = [2, 5, 8, 1, 7, 8, 9];
let sum = arr.reduce((total, currVal) => {
  return total + currVal;
}, 0);
console.log(sum); //40
```

**6. every():**

- it executes a function for every element of the array.
- it returns 'true' if every element of an array passes the test condition,if not returns 'false'.
- does not execute for the empty elements.
- does not change the original array.

**syntax**

```javascript []
array.every(function(currentValue, index, arr), thisValue)


```

**Example:**

```javascript []
let arr = [1, 2, 3, 4, 5];
let newVal = arr.every((val, idx) => {
  return val % 2 === 0;
});
console.log(newVal); //false
```

**7. some():**

- it executes a function for every element of the array.
- it returns 'true' if any element of an array passes the test condition,if not returns 'false'.
- does not execute for the empty elements.
- does not change the original array.

**syntax**

```javascript []
array.some(function(value, index, arr), this)
```

**Example:**

```javascript []
let arr = [1, 2, 3, 4, 5, 6];
let val = arr.some((val, idx) => {
  return val % 2 === 0;
});
console.log(val); //true
```

**8.splice():**

- it returns selected elements in an array, as a new array.
- it selects from a given start, up to a (not inclusive) given end.
- does not change the original array.

**syntax**

```javascript []
array.slice(start, end); // end not inclusive
```

**Example:**

```javascript []
let arr = [12, 13, 15, 67, 89, 09];
let newArr = arr.slice(0, 3);
console.log(newArr); //[12,13,15]
```

**9. shift():**

- removes a element in the beginning of an array.
- changes the length of the array.
- returns a removed value.

**syntax**

```javascript []
array.shift();
```

**Example:**

```javascript []
let arr = [1, 2, 3, 4];
arr.shift();
console.log(arr); //[2,3,4]
```

**10. flat():**

- it concatenates sub-array elements.
- it is used to flatten the array.

**syntax**

```javascript []
array.flat(depth);
```

**Example:**

```javascript []
const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr = myArr.flat(2);
console.log(newArr); //[1, 2, 3, 4, 5, 6, 7, 8]
```

**11. reverse():**

- reverse the order of the elements in the array.
- make the change in the original array.

**syntax**

```javascript []
array.reverse();
```

**Example:**

```javascript []
let names = ["Rakesh", "Praveen", "Chandu"];
names.reverse();
console.log(names); //["chandu","Praveen","Rakesh"]
```

**12. includes:**

- it returns true if an array contains a specified value.
- it returns false if the value is not found.
- it is case sensitive.

**syntax**

```javascript []
array.includes(element, start);
```

**Example:**

```javascript []
let arr = [1, 2, 3, 4, 5];
arr.includes(2); //true
```

**13. unshift():**

- Add the element in the beginning
- change the length of the array.

**syntax**

```javascript []
array.unshift();
```

**Example:**

```javascript []
let arr = [1, 2, 3, 4];
arr.unshift(0);
console.log(arr); //[0,1,2,3,4]
```

**14. push():**

- Add the element in the end of an array
- change the length of the array.

**syntax**

```javascript []
array.push();
```

**Example:**

```javascript []
let arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr); //[1,2,3,4,5]
```

**15. pop():**

- removes a element in the end of an array.
- changes the length of the array.
- returns a removed value.

**syntax**

```javascript []
array.pop();
```

**Example:**

```javascript []
let arr = [1, 2, 3, 4];
arr.pop();
console.log(arr); //[1,2,3]
```
