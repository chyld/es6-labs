function mode(nums){
  const hash = nums.reduce((map, key) => {
    if(map.has(key)){
      map.set(key, map.get(key) + 1);
    }else{
      map.set(key, 1);
    }
    return map;
  }, new Map());

  let key, val;
  for(let [k, v] of hash){
    if(!key){
      key = k;
      val = v;
    }else if(v > val){
      key = k;
      val = v;
    }
  }

  return key;
}

const z = mode([1,1,2,2,2,2,2,3,3,3,3]);
console.log('***> z:', z);
