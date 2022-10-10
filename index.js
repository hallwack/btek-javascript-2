const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const currencyFormat = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

const shippingCost = (length) => {
  let cost = 8000;

  function tax(value) {
    return value * 0.045;
  }

  if (length <= 2) {
    console.log(currencyFormat.format(cost));
    console.log(currencyFormat.format(tax(cost)));
  } else if (length > 2) {
    let newCost = cost;
    let multipleCost = 0;

    for (i = 0; i < length; i++) {
      multipleCost += 5000;
    }
    newCost += multipleCost;
    console.log(currencyFormat.format(newCost));
    console.log(currencyFormat.format(tax(newCost)));
  }
};

const question = () => {
  rl.question("Masukkan jarak tempuh (dalam kilometer): ", (length) => {
    shippingCost(length);
  });
};

question();
