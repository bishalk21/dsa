/** Arrays Data Structure
 * 1. create an arrayBuffer (allocate raw memory)
 *
 * Typed Arrays (Uint8Array, Uint16Array, etc - interpret the raw memory as 8-bit, 16-bit, etc unsigned integers)
 * 2. interpreting memory as 8-bit unsigned integers
 * 3. interpreting memory as 16-bit unsigned integers
 */

// create an arrayBuffer
const buffer = new ArrayBuffer(6);
// creates a contiguous memory block of 6 bytes
// console.log(buffer); // ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }

// interpreting memory as 8-bit unsigned integers
// means that each byte in the buffer is treated as an unsigned integer (8-bit) and can hold values from 0 to 255
const uint8View = new Uint8Array(buffer);
// console.log(uint8View); // Uint8Array [ 0, 0, 0, 0, 0, 0 ]
uint8View[0] = 255; // 255 is the maximum value for an unsigned integer
// console.log(uint8View); // Uint8Array [ 255, 0, 0, 0, 0, 0 ]
// console.log(buffer); // ArrayBuffer { [Uint8Contents]: <ff 00 00 00 00 00>, byteLength: 6 }

// interpreting memory as 16-bit unsigned integers
// means that each 2 bytes in the buffer is treated as an unsigned integer (16-bit) and can hold values from 0 to 65535
const uint16View = new Uint16Array(buffer);
// console.log(uint16View); // Uint16Array [ 255, 0, 0 ]
uint16View[1] = 65535; // 65535 is the maximum value for an unsigned integer
// console.log(uint16View); // Uint16Array [ 255, 65535, 0 ]
console.log(buffer); // ArrayBuffer { [Uint8Contents]: <ff ff 00 00 ff ff>, byteLength: 6 }
