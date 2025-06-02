Array:
- collection of any data type (strings, arrays, number, objects, etc)
- used to store multiple values in a single variable.

Use Case: Storing product listings, user shopping carts, and order histories.
Example: An array to store product IDs in a shopping cart.

```javascript
const shoppingCart = [101, 205, 309, 412];
```

1. Indexing: [0, 1, 2, ....., n-1]
    - first index is 0
    - last index is n-1

## Arrays Creation

1. array literals
JavaScript arrays can contain all types of values and they can be of mixed types. You can create arrays in two different ways, the most common of which is to list values in a pair of `square brackets`.
```javascript
var myArray = [element0, element1, ..., elementN];
```
2. The `Array constructor` is another approach to making a new array.

```javascript
var evenNumbers = new Array();
```
Arrays are _ordered_, meaning that the elements in them will always appear in the same order. The array `[1, 1, 2]`, is different from the array `[1, 2, 1]`.

**TODO**: In `arrays.js`, define a variable called `chocolateBars`. Its value should be an array of the strings `snickers`, `hundred grand`, `kitkat`, and `skittles`.

## Array properties

- `length`

  | Array       | Property | Description                                            |
  | ----------- | -------- | ------------------------------------------------------ |
  | `length`    | Number   | The number of elements in the array.                   |
  | `prototype` | Object   | Allows you to add properties and methods to an object. |

## Array methods

| Arrays       | Methods                                  | Description                                                                                             | Code                                                        |
| ------------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `push()`     | `array.push(element1, ..., elementN)`    | Adds one or more elements to the end of an array and returns the new length of the array.               | `var arr = [1, 2]; arr.push(3); // arr is now [1, 2, 3]`    |
| `unshift()`  | `array.unshift(element1, ..., elementN)` | Adds one or more elements to the front of an array and returns the new length of the array.             | `var arr = [1, 2]; arr.unshift(3); // arr is now [3, 1, 2]` |
| `pop()`      | `array.pop()`                            | Removes the last element from an array and returns that element.                                        | `var arr = [1, 2]; arr.pop(); // arr is now [1]`            |
| `shift()`    | `array.shift()`                          | Removes the first element from an array and returns that element.                                       | `var arr = [1, 2]; arr.shift(); // arr is now [2]`          |
| `indexOf()`  | `array.indexOf(element)`                 | Returns the first index at which a given element can be found in the array, or -1 if it is not present. | `var arr = [1, 2, 3]; arr.indexOf(2); // returns 1`         |
| `includes()` | `array.includes(element)`                | Returns true if the array contains the element, false otherwise.                                        | `var arr = [1, 2, 3]; arr.includes(2); // returns true`     |

- `reverse()` : reverse the order of the elements in the array
- `sort()` : sort the elements in the array
- `push()`: return the length of the array after the push
- `pop()` : remove the last element of the array and return it
- `shift()`: remove first element, and return the removed element
- `join(delimiter)`: concatenate the elements into a string
- [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
  - Add or remove elements from anywhere in an array
  - Return an array of removed elements
  - Parameters
    - index
    - number of elements to remove
    - elements to add
  - `push(item)` is equivalent to `splice(array.length, 0, item)`
  - `pop()` is equivalent to `splice(-1, 1)` or `splice(array.length - 1, 1)`

## [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

- Take a function with three parameters
  - element
  - index (optional)
  - array (optional)
- Return `undefined`
- Iterate through at most the number of elements before iteration
  - If new elements are added, they may be iterated as long as their index is wihtin the original iteration range.
  - If some elements are deleted, the iteration will not run into overflow issue.
- Iterate the next element according to index

```js
a = [0, 1, 2];
a.forEach(function (element, index, array) {
  console.log("index " + index + " before: " + element + ", " + array);
  if (index === 1) {
    array.splice(index, 0, 10);
  }
  console.log("index " + index + " after:  " + element + ", " + array);
});

// index 0 before: 0, 0,1,2
// index 0 after:  0, 0,1,2
// index 1 before: 1, 0,1,2
// index 1 after:  1, 0,10,1,2
// index 2 before: 1, 0,10,1,2
// index 2 after:  1, 0,10,1,2
```

- In the example, an element is added to the array, but the iteration only goes through three elements.
- Element `1` is iterated through twice, because it is the second element before the change, and then pushed to the third position after the change, and the iteration goes from second to third position, regardless of the added element.

- Elemented are passed by value ([reference](https://stackoverflow.com/a/31298343))

```js
var arr = [{ num: 1 }, { num: 2 }, { num: 3 }];
arr.forEach(function (part, index) {
  // part and arr[index] point to the same object, so
  // changing the object that part points to also changes
  // the object that arr[index] points to
  part.num = 4;
});
console.log(arr);
// [{ num : 4 }, { num : 4 }, { num : 4 }]

var arr = [{ num: 1 }, { num: 2 }, { num: 3 }];

arr.forEach(function (part, index) {
  // change part to point to a new object will
  // not change the objects stored in arr
  part = 4;
});
console.log(arr);
// [{ num : 1 }, { num : 2 }, { num : 3 }]
```

## [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

- Return a new array from the original array

## Adding an Element

JavaScript allows us to `push` elements onto the end of an array:

```javascript
var superheroines = ["catwoman", "she-hulk", "mystique"];

superheroines.push("wonder woman");
// superheroines is now ["catwoman", "she-hulk", "mystique", "wonder woman"]
```

We can also `unshift` elements onto the beginning of an array:

```javascript
var cities = ["New York", "San Francisco"];

cities.unshift("Philadelphia");

// cities is now ["Philadelphia", "New York", "San Francisco"]
```

These actions _change_ the underlying array — in other words, they **mutate** its value.

Most modern browsers (Chrome, FireFox, and Safari) support what is called the **spread operator** — it's three dots in a row: `...`. When used with an array, it _spreads out_ the array's contents.

We can use the spread operator to create a new array in place, rather than modifying the original one. Let's try it!

```javascript
var cities = ["New York", "San Francisco"]

["Philadelphia", ...cities] // ["Philadelphia", "New York", "San Francisco"]

cities // ["New York", "San Francisco"]
```

Whoa! Did you see that? Our cities array was untouched when we used the spread operator: `...cities`. We can do the same at the beginning of the array:

```javascript
var cities = ["New York", "San Francisco"]

[...cities, "Philadelphia"] // ["New York", "San Francisco", "Philadelphia"]
```

To preserve the new array, we need to assign it to a variable:

```javascript
var cities = ["New York", "San Francisco"];

// we can assign it to the existing `cities` variable
cities = ["Philadelphia", ...cities];

// but if we have a const
const cats = ["Milo", "Garfield"];

// we need a new variable:
const moreCats = ["Felix", ...cats];
```

While we _can_ add elements to an array directly at specific indexes

```javascript
var myArray = [1, 2, 3];

myArray[5] = 5;

myArray; // [1, 2, 3, undefined, undefined, 5]
```

it's best not to. We should treat arrays as ordered lists of information that can be **any length**, so updating a specific index should feel like a weird thing to do. Moreover, adding elements directly inserts `undefined` (as demonstrated above) if we also need to increase the array's length, which can lead to unexpected behavior.

**TODO**: In `arrays.js`, define two functions, `addElementToBeginningOfArray` and `destructivelyAddElementToBeginningOfArray`. Both functions take two parameters, an array and an element to add to the beginning of the array, and both functions should add the element to the beginning of the array and then return the whole array. The destructive function, `destructivelyAddElementToBeginningOfArray`, should alter the original array that's passed in; `addElementToBeginningOfArray`, on the other hand, should return a new array **and not modify the original**.

**TODO**: Define two more functions, `addElementToEndOfArray` and `destructivelyAddElementToEndOfArray`. These functions also take two arguments, an array and an element to add to the end of the array. `addElementToEndOfArray` **should not** alter the original array; `destructivelyAddElementToEndOfArray` **should** alter the original array.

## Accessing an Element

You can get elements out of arrays if you know their index. Array elements' indexes start at 0 and increment by 1, so the first element's index is `0`, the second element's index is `1`, the third element's is `2`, etc.

```javascript
var entrepreneurs = [
  "Oprah Winfrey",
  "Laurene Powell Jobs",
  "Arianna Huffington",
];

// the line below will print the string "Oprah Winfrey"
console.log(entrepreneurs[0]);

// the code below will print the string "Arianna Huffington is the co-founder and editress-in-chief of The Huffington Post"
var bio = " is the co-founder and editress-in-chief of The Huffington Post";
console.log(entrepreneurs[2] + bio);

// the line below will return undefined
entrepreneurs[9];
```

**TODO**: Define a function in `arrays.js` called `accessElementInArray`. The function should accept an array and an index and return the element at that index.

## Removing an Element

### From the Beginning of an Array

To remove an element from the beginning of an array, we can use the `shift` method:

```javascript
const days = ["Monday", "Tuesday", "Wednesday"];

days.shift(); // returns the removed element, in this case "Monday"

days; // ["Tuesday", "Wednesday"]
```

As with `unshift`, this method is _destructive_; it **mutates** the underlying array.

**TODO**: Define a function in `arrays.js` called `destructivelyRemoveElementFromBeginningOfArray` that takes an array as its only argument and removes the first element. Your function should then return the entire array, and it **should** mutate the array.

Because we tend to want to avoid destruction, there is also a way to remove the first element from an array without changing the underlying array: we can use the `slice` method.

[`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) does just what its name implies: it takes a slice from its array. The first argument specifies where the slice starts, and the second argument specifies where it ends. If there is no second argument, the slice goes from the first argument (the start) to the end of the array. This means removing the first element is as simple as `slice(1)`.

```javascript
var cats = ["Milo", "Garfield", "Otis"];

cats.slice(1); // ["Garfield", "Otis"]

cats; // ["Milo", "Garfield", "Otis"]
```

As with other non-destructive methods, we need to assign the results to a new variable to save our changes:

```javascript
var cats = ["Milo", "Garfield", "Otis"];

cats = cats.slice(1); // ["Garfield", "Otis"]

cats; // ["Garfield", "Otis"]
```

`slice` is also handy if we know we want the last `n` elements of an array: pass it a negative index.

```javascript
var cats = ["Milo", "Garfield", "Otis"];

// get the last 2 cats
cats.slice(-2); // ["Garfield", "Otis"]

// get the last 1 cat
cats.slice(-1); // ["Otis"]
```

**TODO**: Define a function in `arrays.js` called `removeElementFromBeginningOfArray`. It takes an `array` as its only argument. The function should remove the first element in the array. This function should return the _entire_ array in the same line, and it **should not** mutate the original array.

### From the End of an Array

To remove an element from the end of an array, we can use the `pop` method:

```javascript
var iceCreams = ["chocolate", "vanilla", "raspberry"];

iceCreams.pop(); // returns the removed element, in this case "raspberry"

iceCreams; // ["chocolate", "vanilla"]
```

As with `push`, this method is _destructive_; it **mutates** the underlying array.

**TODO**: Define a function in `arrays.js` called `destructivelyRemoveElementFromEndOfArray` that takes an array as its only argument and removes the last element. Your function should return the entire array, and it **should** mutate the array.

We can use `slice` to perform the above action without changing the underlying array. It takes a bit more work than removing the first element, since we want the slice from index `0` (remember, the first element is at index `0`!) to the end. Hmmmm — what property do arrays have that can help us? `length`!

```javascript
var iceCreams = ["chocolate", "vanilla", "raspberry"];

iceCreams.slice(0, iceCreams.length - 1); // ["chocolate", "vanilla"]

iceCreams; // ["chocolate", "vanilla", "raspberry"]
```

**TODO**: Define a function in `arrays.js` called `removeElementFromEndOfArray` that takes an array as its only argument and removes the last element. Your function should return the array without the last element, and it **should not** mutate the original array.

### From the Middle of an Array

Removing an element from the middle of an array in JavaScript is a bit trickier than removing an element from the beginning or end. We have the `splice` method, which takes an index in the array as its first argument, the number of elements to remove as its second argument, and any number of elements to add as any arguments after the second. All arguments are optional, but with no arguments, `splice()` returns an empty array and does nothing to the target array.

It might be helpful to refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to check out their examples, in addition to our examples here.

```javascript
let items = [1, 2, 3, 4];

// this will remove everything after index 1 (inclusive)
// it returns the removed items: [2, 3, 4]
items.splice(1);

items; // [1]

items = [1, 2, 3, 4];

// "at index 1, remove 1 item"
// it returns the removed item(s): [2]
items.splice(1, 1);

items; // [1, 3, 4]

items = [1, 2, 3, 4];

// "at index 1, remove 1 item and add 6 and add 7"
// it returns the removed items: [2]
// and adds the items to add starting at the removal index
items.splice(1, 1, 6, 7);

items; // [1, 6, 7, 3, 4]
```

As we noted above, adding elements at specific indexes in the middle of an array _feels_ weird — it's intentionally difficult to do, as doing so with objects (where we have keys instead of sequential indexes) is much more natural.

**BONUS**

We can use `slice`, combined with the spread operator, to make removing from the middle of an array much easier.

```javascript
var items = [1, 2, 3, 4, 5]

// let's remove the third element

// a slice from the start up to but not including index 2 (the third element)
// and a slice from index 3 to the end
[...items.slice(0, 2), ...items.slice(3)] // [1, 2, 4, 5]
```

Play around with this a bit until it makes sense. It's the trickiest thing that you've encountered so far, so don't sweat it if it takes a little bit to sink in!

## Array Wackiness

### Array indexes aren't exactly what they seem to be

If you had to guess, would you say that array indexes are _numbers_ or _strings_? Think about it for a second, then read on.

Array indexes are actually _strings_, even though we commonly refer to them as numbers. But you don't have to take my word for it: try typing `Object.keys([1, 2, ,3])` in your console and see what comes back.

Ultimately, this means array indexes are strings that can be accessed by array-style notation using brackets, and the numbers will be _coerced_ into strings when they're needed under the hood. In a console, try accessing an index using a string to see for yourself:

```javascript
var arr = ["under", "the", "hood"];

arr[0];  // "under"
arr['0']; // "under"
arr[02]; // 02 the number *is* 2, so you get "hood"
arr['02']: // '02' the string is *not* 2, so you get undefined
```

This little tidbit might come in handy if you ever try to assign a value to an array index by using a string unintentionally. Like, say, by getting your array positions from a zero-filled formatted list of numbers which you store as strings, then using those strings to access array elements.

Or by indexing an array with a variable whose contents don't in any way represent a number--like typing `myArray['bonobo monkey'] = 27`.

You'll get no complaints, because rather than adding an index to the array, you're adding a _property_. Speaking of which...

### We can add properties to arrays

In JavaScript, everything is ultimately an object. We'll explore more about what that means when we cover objects, but for now, know that this means that we can add _properties_ to just about anything, including arrays.

A property is a named piece of information. They're _kind of_ like variables (don't go too far with that analogy) but we can only get that information with reference to the property owner.

What makes arrays special, then? Arrays keep track of how many elements they have in them via the `length` property: `[1, 2, 3].length // 3`. `length` doesn't work like other keys/indexes in objects/arrays — it updates automatically, and if we change it, we change the whole array.

```javascript
var myArray = [1, 2, 3];

myArray.length; // 3

myArray.length = 1;

myArray; // [1] (!!!)
```

It's important to remember that arrays in JavaScript are kind of wonky. You can assign properties to them:

```js
var array = [1, 2, 3];

array.myProperty = "I'm a property!";
```

Which can lead to weird behavior:

```js
array;
// [1, 2, 3];

// Where did our property go?
array.myProperty;
// "I'm a property!";

array.length;
// 3 - Would you have expected 3 or 4?
```

We don't tend to do these kinds of things on purpose, but it's important to be aware that they can happen so that you have a good sense of where to look if/when strange bugs start to appear.

## Resources

- [MDN - Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Codecademy - Arrays](http://www.codecademy.com/glossary/javascript)


2. remove from first index: `.shift()`
3. join or add new at the end: `.push()`
4. remove from last index: `.pop()`
5. add new at the beginning: `.unshift()`
6. finding the index position: `indexOf()`
7. addition, removing or replacing the index positon in-between: `.splice()`
8. copy of all index position and add, remove, or replace: `.slice()`
9. forEach:

Executes a provided function once for each array element.
```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach((num) => console.log(num * 2));
```

10. includes:

Checks if an array contains a specific element and returns true or false.
```javascript
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana")); // true
```

11. filter:

Creates a new array with all elements that pass a given test.
```javascript
const ages = [18, 22, 15, 30];
const adults = ages.filter((age) => age >= 18);
```

12. some:

Checks if at least one element in the array satisfies a given condition.
```javascript
const scores = [85, 92, 78, 64];
const passed = scores.some((score) => score >= 70);
```

13. map:

Creates a new array by applying a function to each element in the original array.
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
```

14. reduce:

Reduces the array to a single value by applying a function to each element.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
```

15. every:

Checks if all elements in the array satisfy a given condition.
```javascript
const temperatures = [72, 75, 78, 80];
const isWarm = temperatures.every((temp) => temp >= 70);
```

16. sort:

Sorts the elements of an array in place and returns the sorted array.
```javascript
const fruits = ["cherry", "apple", "banana"];
fruits.sort(); // ["apple", "banana", "cherry"]
```

17. Array.from:

Creates a new array from an array-like or iterable object.
```javascript
const str = "Hello";
const chars = Array.from(str); // ["H", "e", "l", "l", "o"]
```

18. Array.of:

Creates a new array with the provided elements as its elements.
```javascript
const numbers = Array.of(1, 2, 3, 4);
```