const chargeAmount = (cardNumber,  cvc,  expiryDate,  amount) => {
  console.log(`Customer charged - Credit card number: ${cardNumber}, CVC: ${cvc}, Expiry date: ${expiryDate}, Amount charged for the order: ${amount}`);
}

module.exports = { chargeAmount };