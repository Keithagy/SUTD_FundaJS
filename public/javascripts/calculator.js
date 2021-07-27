/* eslint-disable */

function calculateTax() {
  alert('calculateTax is called');
  // DEMO: perform the tax calculation here

  // get salary, side income, and tax rate
  const salary = +document.querySelector('#salary').value;
  const sideIncome = +document.querySelector('#sideIncome').value;
  const taxRate = +document.querySelector('#taxRate').value;

  // calculate tax amount
  const taxableAmt = ((salary + sideIncome) * taxRate) / 100;

  // display result
  document.querySelector('#result').innerHTML = taxableAmt.toFixed(2);
}

function splitBill() {
  alert('splitBill is called');
  console.log('heh');

  // TODO: get bill total and number of pax
  const billTotal = +document.querySelector('#billTotal').value;
  const pax = +document.querySelector('#pax').value;
  console.log('uh');

  // TODO: calculate amount for each person
  const perPaxBill = billTotal / pax;
  console.log(perPaxBill);

  // TODO: display the result
  document.querySelector('#result').innerHTML = perPaxBill.toFixed(2);
}
