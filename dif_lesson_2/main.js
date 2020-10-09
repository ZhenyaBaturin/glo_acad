'use strict';

const num = 266219;
let count = 1;
for (let i = 0; i < num.toString().length; i++) {
    count *= +num.toString()[i];
}
console.log(count);
count = count ** 3;
alert(count.toString().slice(0, 2));