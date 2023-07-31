const getCustomerCredit = customerId => {
  var matches = customerId.match(/\d+/);
  if (matches) {
    return Number(matches[0]);
  } else {
    return 0;
  }
}

const deductCredit = (customerCredit, amount) => {
  return customerCredit > parseFloat(amount) ? 0.0 : parseFloat(amount) - customerCredit;
}

module.exports = { getCustomerCredit, deductCredit };