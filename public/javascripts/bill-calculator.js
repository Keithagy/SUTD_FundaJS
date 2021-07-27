function splitBill() {
  // TODO: clear previous error message
  const errorMsg = document.querySelector('#errorMsg');
  errorMsg.innerHTML = '';

  const errorAlert = document.querySelector('#errorAlert');
  errorAlert.classList.add('hidden')

  const billTotal = document.querySelector('#billTotal').value;
  const pax = document.querySelector('#pax').value;
  console.log(typeof billTotal, typeof pax);

  // TODO: validate bill total is provided
  // TODO: validate bill total is positive

  switch (true) { 
    case !billTotal:
      errorAlert.classList.remove('hidden');
      errorMsg.innerHTML =
        'Please provide a valid bill total (non-negative number)';
      return;
    case billTotal < 0:
      errorAlert.classList.remove('hidden');
      errorMsg.innerHTML =
        'Please provide a positive bill total (non-negative number)';
      return;
    case !pax:
      errorAlert.classList.remove('hidden');
      errorMsg.innerHTML =
        'Please provide a valid person count (non-negative number)';
      return;
    case pax < 0:
      errorAlert.classList.remove('hidden');
      errorMsg.innerHTML =
        'Please provide a positive person count (non-negative number)';
      return;
  }

  // if (!billTotal || billTotal < 0) {
  //   errorAlert.classList.remove('hidden');
  //   errorMsg.innerHTML =
  //     'Please provide a valid bill total (non-negative number)';
  //   return;
  // }

  // TODO: validate num of pax is provided
  // TODO: validate num of pax is positive
  // if (!pax || pax < 0) {
  //   errorAlert.classList.remove('hidden');
  //   errorMsg.innerHTML =
  //     'Please provide a valid person count (non-negative number)';
  //   return;
  // }

  const amountPerPax = Number(billTotal) / Number(pax);

  document.querySelector('#result').innerHTML = amountPerPax.toFixed(2);
}

document.querySelector('#splitBtn').addEventListener('click', splitBill);
