async function getPrices() {
  const response = await fetch('/api/pricing');
  const data = await response.json();
  return data;
}

async function displayTierPrices(displayMonthly = true) {
  const prices = await getPrices();
  for (const price of prices) {
    let priceDisplay = null;
    switch (price.tier) {
      case 'hobby':
        priceDisplay = document.querySelector('#hobby-price');
        priceDisplay.innerHTML = displayMonthly
          ? price.monthlyPrice
          : price.annualPrice;
        break;
      case 'freelancer':
        priceDisplay = document.querySelector('#freelancer-price');
        priceDisplay.innerHTML = displayMonthly
          ? price.monthlyPrice
          : price.annualPrice;
        break;
      case 'startup':
        priceDisplay = document.querySelector('#startup-price');
        priceDisplay.innerHTML = displayMonthly
          ? price.monthlyPrice
          : price.annualPrice;
        break;
      case 'enterprise':
        priceDisplay = document.querySelector('#enterprise-price');
        priceDisplay.innerHTML = displayMonthly
          ? price.monthlyPrice
          : price.annualPrice;
        break;
    }
  }
}

let monthlyPricing = true;
const addPriceToggle = () => {
  const units = document.querySelectorAll('.price-unit');
  const monthlyBillingBtn = document.querySelector('#monthly-plans-btn');
  const yearlyBillingBtn = document.querySelector('#annual-plans-btn');

  console.log(units);
  const handleMonthlyClick = () => {
    monthlyPricing = true;
    units.forEach((ele) => (ele.innerHTML = '/mo'));
    displayTierPrices(monthlyPricing);
  };
  const handleYearlyClick = () => {
    monthlyPricing = false;
    units.forEach((ele) => (ele.innerHTML = '/yr'));
    displayTierPrices(monthlyPricing);
  };

  monthlyBillingBtn.onclick = handleMonthlyClick;
  yearlyBillingBtn.onclick = handleYearlyClick;
};

displayTierPrices(monthlyPricing);
addPriceToggle();
