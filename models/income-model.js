function incomePerDay(amount, type) {
  switch (type) {
    case "Weekly":
      return (amount / 7) * 100;
    case "Biweekly":
      return (amount / 14) * 100;
    case "Monthly":
      return (amount / 30.437) * 100;
    case "Semimonthly":
      return (amount / (30.437 / 2)) * 100;
  }
  return 0;
}

export function incomePerWeek(amount, type) {
  return incomePerDay(amount, type) * 7;
}

export function incomePerMonth(amount, type) {
  return incomePerDay(amount, type) * 30.437;
}

export function incomePerYear(amount, type) {
  return incomePerDay(amount, type) * 365.25;
}

export var IncomeModel = {
  amount: 0,
  source: "",
  type: "",
};
