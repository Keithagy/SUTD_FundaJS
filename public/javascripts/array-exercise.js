/* eslint-disable */

/* TODO: create a doubleItem function that accepts an array of number and 
returns an array of equal length but with all of its item double  */
const doubleItem = arr => arr.map(ele => 2*ele)

/* TODO: create an invertSign function that accepts an array of number and 
returns an array of equal length but with all of its item sign inverted */

const invertSign = arr => arr.map(ele => ele * -1)

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const participants = [
    { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
    { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
    { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
    { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
  ];

  // TODO: assign idNumber of all participants to idNumbers
  const idNumbers = participants.map(ele => ele.idNumber);
  console.log(idNumbers); // ['S7282395H', 'T4689018Z', 'G5512873T', 'T8198514B']
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/

  const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];

  // TODO: get the results of multiplication of all the numbers using reduce method
  const mult = numbers.reduce((result, ele) => result === 0? result + ele : result * ele, 0)
  console.log(mult)

  // TODO: get the results of multiplication of all the numbers using for...of loop
  const multFor = arr => {
    let result = 0
    for (num of arr) {
      result === 0 ? result += num : result *= num
    }
    return result
  }

console.log(multFor(numbers))

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];

  // TODO: get all the positive numbers (above or equal to 0)
  const positive = numbers.filter(ele => ele > 0)
  console.log(positive)

  // TODO: get all the odd numbers
  const odd = numbers.filter(ele => ele % 2 === 1 )
  console.log(odd)

  // TODO: get all the numbers that is larger before the number before it
  // (exclude first number)
  // const largerThanBefore = umbers.map((ele,index) => {
  //   if (index > 0 && ele > numbers[index-1]) {
  //     return ele
  //   }
  // })
  // .filter(ele => !!ele)

  const largerThanBefore = numbers.filter((ele,index) => index > 0 ? ele > numbers[index-1] : false)

}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/

{
  const participants = [
    { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
    { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
    { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
    { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
  ];

  // TODO: get the names for all participants
  const names = participants.map(ele => ele.name)
  console.log(names)

  // TODO: get the id numbers for female participants only
  const femId = participants
  .filter(ele => ele.gender === 'female')
  .map(ele => ele.idNumber)
  console.log(femId)
}
