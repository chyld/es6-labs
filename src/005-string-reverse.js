String.prototype.reverse = function(){
  return [...this].reduceRight((rev, cur) => {
   return rev + cur;
  }, '');
};

var z = "dog".reverse();
console.log('z:', z);
