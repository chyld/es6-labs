let a = 1;
const b = 2;

console.log("***> a:", a);
console.log("***> b:", b);

{
  let a = 3;
  console.log("***> a:", a);
}

console.log("***> a:", a);
const nums = [];
for(let b = 0; b < 5; b++){
  nums.push(() => b);
}

nums.forEach(n => console.log("***> fn:", n()));
