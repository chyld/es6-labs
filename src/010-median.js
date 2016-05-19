function median(nums){
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let mid = Math.floor(len / 2);
  if(len % 2){
    return nums[mid];
  }else{
    return ((nums[mid] + nums[mid - 1]) / 2);
  }
}

let x = median([9,1,7,3,5]);
console.log('***> x:', x);

let y = median([1,7,3,5]);
console.log('***> y:', y);
