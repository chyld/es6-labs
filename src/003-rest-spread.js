// arrays

const [a, b, ...c] = [2, 1, 7, 8, 9];
console.log("***> a:", a);
console.log("***> b:", b);
console.log("***> c:", c);

let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6];
let nums = [...nums1, ...nums2];
console.log("***> nums:", nums);
let w1 = 'hello';
let w2 = [...w1];
console.log("***> w1:", w1);
console.log("***> w2:", w2);

// objects

const {aa, bb} = {aa: 1, bb: 2, cc: 3, dd: 4, ee: 5};
console.log("***> aa:", aa);
console.log("***> bb:", bb);
