# Intro to Objects

- Objects are data structures that store data, and help track of that data by keys.
- Objects have properties and methods.
- `typeof` operator: return name of the data type
- Object-literal notation

```js

{
    "key": "value", // key is always string, value can be any type
}

var umbrella = {
  color: "red",
  isOpen: false,
  open: function () {
    umbrella.isOpen = true;
  },
};
```

- Data retrieval
  - Bracket notation: `umbrella['color']`
  - Dot notation: `umbrella.color`
- Naming conventions
  - Don't wrap property names in quotes.
  - Special propery names can be put inside quotes. But they are not compatible with dot notations.
  - Don't use numbers as first character as property names.
  - Don't include space or `-` in property names.
  - Use camel case for multi-word property names.

# Object and It's Methods in JavaScript

Object in JavaScript is a collection of related data and/or functionality (which usually consists of several variables and functions — which are called properties and methods when they are inside objects).

## How to create object in JavaScript?

```JavaScript
// simple and most popular way to create object
const person = {
    name: 'Bishal'
};

class NewPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    function () {
        return `${this.name} is ${this.age} years old`
    }
}
```

You can also use **new** keyword

```JavaScript
const person1 = new Object();
person1.name = 'Bishal';
console.log(person1); // {name: 'Bishal'}
```

You can also use **'new'** with user defined constructor function. <br>
E.g.

```JavaScript
function person(name) {
    this.name = name;
}
// Now anytime you want person object.
const personOne = new person('Bishal');
const personTwo = new person('partha');
console.log(personOne); // {name: 'Bishal'}
console.log(personTwo); // {name: 'partha'}
```

## Using Object.create() to create new Objects

The **Object.create()** methods creates a new object, using an existing object as prototype of the newly created object. <br>

It contains **two** parameter:

- First parameter is mandatory that serves prototype of new object to be created.
- Second is optional, it contains properties to be added to new object. <br>

E.g.

```JavaScript
const orgObject = { company: 'ABC' };
const employee = Object.create(orgObject, { name: { value: 'EmpOne'}});
console.log(employee); // {name: 'EmpOne'}
console.log(employee.name); // EmpOne
```

## Using Object.assign() to create new object

The **Obeject.assign()** method is used to copy all enumerable own properties value from one or more source objects to target object. It will return target object. <br>

E.g.

```JavaScript
const orgObject = { company: 'ABC' };
const carObject = { carName: 'Corola' };
const employee = Object.assign({}, orgObject, carObject);

// Now you can get employee object that has company and carName as its property.

console.log(employee); // {company: 'ABC', carName: 'Corola'}
```

## Using Object.defineProperties()

This method defines **new** or **modify** existing property on object.

```JavaScript
const object1 = {};
Object.defineProperties (object1, {
    property1: {
        value: 42
    }
});
console.log(object1.property1); // 42
```

Similarly, we also have **Object.defineProperty()**

## Using Object.Entries()

It returns an array of object's **key value** pairs. <br>
The order of array is same as provided by a **for** in loop

```JavaScript
const object1 = {
    a: 'something',
    b: 'nothing'
};
for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}
/* Output:
    a: something
    b: nothing
*/
```

## Object.freeze()

It freezes an object. No longes can be changed. <br>
E.g.

```JavaScript
const obj = {
    prop: 42
};
Object.freeze(obj);
obj.prop = 43;
console.log(obj.prop); // 42
// It can no longes be change due to freeze
```

## Object.fromEntries()

It transforms a list of **key-value** pairs into an object. <br>
E.g.

```JavaScript
const entries = new Map([
    [ 'foo', 'bar' ],
    [ 'baz', 42 ]
]);
const obj = Object.fromEntries(entries);
console.log(obj); // {foo: 'bar', baz: 42}
```
