/**
 * Star Pattern
 */

// ****
// ****
// ****
// ****
let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "*";
  }
  console.log(row);
}

// *
// **
// ***
// ****
for (let i = 0; i < n; i++) {
  let row = "";
  //   for (let j = 0; j < i + 1; j++) {
  for (let j = 0; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}

// 1
// 12
// 123
// 1234
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

// 1
// 22
// 333
// 4444
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}

// 1234
// 123
// 12
// 1
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

// _ _ _ _ *
// _ _ _ * *
// _ _ * * *
// _ * * * *
// * * * * *

/**
 * | i | no. of spaces      | no. of stars |
 * | 0 | n - (i+1)          | 1 (i+1)      |
 * | 1 | n - (i+1)          | 2 (i+1)      |
 * | 2 | n - (i+1)          | 3 (i+1)      |
 * | 3 | n - (i+1)          | 4 (i+1)      |
 * | 4 | n - (i+1)          | 5 (i+1)      |
 * | 5 | n - (i+1)          | 6 (i+1)      |
 */
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - (i + 1); j++) {
    row = row + " ";
  }
  for (let k = 0; k <= i; k++) {
    row = row + "*";
  }
  console.log(row);
}

// 1
// 10
// 101
// 1010
// 10101
for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j <= i; j++) {
    row = row + toggle;
    toggle = toggle === 1 ? 0 : 1; // Toggle between 0 and 1
  }
  console.log(row);
}

// 1
// 01
// 010
// 1010
// 10101
let toggle = 1;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + toggle;
    toggle = toggle === 1 ? 0 : 1; // Toggle between 0 and 1
  }
  console.log(row);
}
