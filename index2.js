const readline = require("readline");
const formatNumber = require("format-number");
const format = formatNumber({
  prefix: "Rp. ",
  suffix: ",-",
  integerSeparator: ".",
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculation = (length) => {
  const baseCost = 8000;
  const flatCost = 8000;

  length = parseInt(length);

  const tax = (value) => {
    return value * 0.045;
  };

  const result = {
    fee: 0,
    serviceFee: 0,
  };

  if (length <= 2) {
    result.fee = baseCost;
  } else {
    result.fee = baseCost + flatCost * (length - 2);
  }

  result.serviceFee = tax(result.fee);

  return result;
};

let reRun = true;

const shippingFee = async () => {
  const question = (question) => {
    return new Promise((resolve) => {
      rl.question(question, resolve);
    });
  };

  while (reRun) {
    const answer = await question("Berapa jarak tempuh pengiriman: ");

    if (answer === "0") {
      reRun = false;
      rl.close();
    }

    const calculated = calculation(answer);
    console.log(`Total ongkos kirim: ${format(calculated.fee)}`);
    console.log(`Pajak ongkos kirim: ${format(calculated.serviceFee)}`);
  }
};

shippingFee();
