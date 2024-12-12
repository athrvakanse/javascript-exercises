const add = function() {
	return val1 + val2;
};

const subtract = function() {
  return val1 - val2;
};

const sum = function() {
  if (start > end)    [start, end] = [end, start]
    
  let sum = 0
  for (let i = start; i <= end; i++) {
      sum += i;
  }
  return sum; 
};

const multiply = function() {
  let mul = 0
  for (let i = start; i <= end; i++) {
      mul *= i;
  }
  return mul; 
};

const power = function() {
  return Math.pow(base, val);
};

const factorial = function() {
  let fact = 1;
  for (let i = num; num > 0; i--) {
    fact = num * i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
