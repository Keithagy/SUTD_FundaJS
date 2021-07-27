console.log('exercise.js');

let x = null;
x = 100;

let y = true;
y = false;

const details = {
  firstName: 'K',
  lastName: 'A',
  age: 100
};

console.log(x, y, details);

const secsInWeek = () => 7 * 24 * 60 * 60
const secsinDays = d => d * 24 * 60 * 60
const secsinPeriod = (pCount, pUnit = 'day') => {
  switch (pUnit) {
    case 'week':
      return pCount * secsInWeek()
    default: // day
      return secsinDays(pCount)
  }
}

const getRandomIntAnon = function (min,max) {
  const minValue = Math.ceil(min)
  const maxValue = Math.floor(max)
  return Math.floor(Math.random() * (maxValue - minValue) + minValue)
}

const getRandomIntArr = (min,max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))

const compute = (op, a ,b) => {
  switch (op) {
    case 'add':
      return a+b
    case 'minus':
      return a-b
    case 'multiple':
      return a*b
    case 'divide':
      return a / b
    default:
      throw "error: invalid operator"
  }
}

console.log(compute('add',10,10))
console.log(compute('minus',10,10))
console.log(compute('multiple',10,10))
console.log(compute('divide',10,10))
console.log(compute('food',10,10))