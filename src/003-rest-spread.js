// arrays

let [a, ...b] = [1, 2, 3, 4, 5];
console.log("***> a:", a);
console.log("***> b:", b);

let c = [...[1,2,3], ...[4, 5,6]];
console.log("***> c:", c);

// objects

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ...z };
console.log("***> x:", x);
console.log("***> y:", y);
console.log("***> z:", z);
console.log("***> n:", n);
