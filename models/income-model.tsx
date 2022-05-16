export enum IncomeType {
  Weekly = "weekly",
  Biweekly = "biweekly",
  Monthly = "monthly",
  Semimonthly = "semimonthly",
}

function incomePerDay(amount: number, type: IncomeType) {
  switch (type) {
    case IncomeType.Weekly:
      return (amount / 7) * 100;
    case IncomeType.Biweekly:
      return (amount / 14) * 100;
    case IncomeType.Monthly:
      return (amount / 30.437) * 100;
    case IncomeType.Semimonthly:
      return (amount / (30.437 / 2)) * 100;
  }
  return 0;
}

export function incomePerWeek(amount: number, type: IncomeType) {
  return incomePerDay(amount, type) * 7;
}

export function incomePerMonth(amount: number, type: IncomeType) {
  return incomePerDay(amount, type) * 30.437;
}

export function incomePerYear(amount: number, type: IncomeType) {
  return incomePerDay(amount, type) * 365.25;
}

export class IncomeModel {
  amount = 0;
  source = "";
  type = IncomeType.Weekly;

  constructor() {
    this.amount = 0;
    this.source = "";
    this.type = IncomeType.Weekly;
  }
}

export class IncomeDate {
  type: IncomeType | undefined = undefined;
  value: number | undefined = undefined;

  constructor(type: IncomeType, value: number) {
    this.type = type;
    this.value = value;
  }
}
