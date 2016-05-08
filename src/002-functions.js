function basic(a, b){
  return a + b;
}

console.log("***> basic:", basic(3, 4));

function defaultParams(a, b, c = 3){
  return a + b + c;
}

console.log("***> def1:", defaultParams(1, 2));
console.log("***> def2:", defaultParams(3, 4, 5));

function restParams(a, b, ...c){
  console.log("***> a:", a);
  console.log("***> b:", b);
  console.log("***> c:", c);
}

restParams();
restParams(1,2);
restParams(1,2,3,4);

function destArray(a, [b, c]){
  console.log("***> da.a:", a);
  console.log("***> da.b:", b);
  console.log("***> da.c:", c);
}

destArray(1,[2,3]);

function destObj(a, {b, c}){
  console.log("***> do.a:", a);
  console.log("***> do.b:", b);
  console.log("***> do.c:", c);
}

destObj(1, {b:2, c: 3});
