// Async exercise
// console.log('Start');
// setTimeout(() => {
//   console.log('1 sec passed');
//   setTimeout(() => {
//     console.log('another 2 sec passed');
//     setTimeout(() => {
//       console.log('End');
//     }, 2000);
//   }, 2000);
// }, 1000);

// Rewrite using promise
// function wait(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(ms), ms);
//   });
// }

// console.log('Start');
// wait(5000)
//   .then((v) => {
//     console.log(`${v / 1000} second passed`);
//     return wait(2000);
//   })
//   .then((v) => {
//     console.log(`Another ${v / 1000} second passed`);
//     return wait(2000);
//   })
//   .then(() => console.log('End'));

// console.log('Waiting...')

// Rewrite using async-await

(async () => {
  function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(ms), ms);
    });
  }

  const seconds = await wait(1000);
  console.log(`${seconds / 1000} second passed`);
  const next = await wait(2000);
  console.log(`Another ${next / 1000} second passed`);
  await wait(2000);
  console.log('End');
})();