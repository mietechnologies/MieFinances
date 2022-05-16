function formatNumberAsCurrency(number: number) {
  // For data integrity, we will store number values as a number of cents
  const numberAsFloat = number / 100.0;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(numberAsFloat);
}

function formatNumberAsDayOfMonth(number: number) {
  console.log(number);
  const numberAsString = number.toString();
  if (numberAsString.includes(".")) {
    return 0;
  }

  if (number > 3 && number < 21) {
    return `${number}th`;
  }

  if (numberAsString.slice(-1) == "1") {
    return `${number}st`;
  }

  if (numberAsString.slice(-1) == "2") {
    return `${number}nd`;
  }

  if (numberAsString.slice(-1) == "3") {
    return `${number}rd`;
  }

  return `${number}th`;
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const Utility = {
  formatNumberAsCurrency,
  formatNumberAsDayOfMonth,
  uuidv4,
};
