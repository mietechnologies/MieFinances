export function incomePerWeek(amount, type) {
  console.log(amount, type);
  let value = 0;
  switch (type) {
    case "Weekly":
      value = amount;
    case "Biweekly":
      value = (amount / 14) * 7;
    case "Monthly":
      value = (amount / 30.437) * 7;
    case "Semimonthly":
      value = (amount / (30.437 / 2)) * 7;
  }
  return value * 100;
}

export function incomePerMonth(amount, type) {
  console.log(amount, type);
  let value = 0;
  switch (type) {
    case "Weekly":
      value = (amount / 7) * 30;
    case "Biweekly":
      value = (amount / 14) * 30;
    case "Monthly":
      value = amount;
    case "Semimonthly":
      value = (amount / 15) * 30;
  }
  return value * 100;
}

export function incomePerYear(amount, type) {
  console.log(amount, type);
  let value = 0;
  switch (type) {
    case "Weekly":
      value = (amount / 7) * 365.25;
    case "Biweekly":
      value = (amount / 14) * 365.25;
    case "Monthly":
      value = (amount / 30.437) * 365.25;
    case "Semimonthly":
      value = (amount / (30.437 / 2)) * 365.25;
  }
  return value * 100;
}

export var IncomeModel = {
  amount: 0,
  source: "",
  type: "",
};
