function binary(exponent){
  console.log("***>pow:", exponent);
  return 2 ** exponent;
}

function cache(fn){
  let map = new Map();
  let value;

  return function(arg){
    if(!map.has(arg)){
      value = fn.call(null, arg);
      map.set(arg, value);
    }else{
      value = map.get(arg);
    }

    return value;
  };
};

let cachedBinary = cache(binary);

console.log("***>cachedBinary(5):", cachedBinary(5));
console.log("***>cachedBinary(5):", cachedBinary(7));
console.log("***>cachedBinary(5):", cachedBinary(5));
