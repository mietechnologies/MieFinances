import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { incomePerMonth } from "../models/income-model";
import { Utility } from "../utils/utility";

export const NoticeRow = ({ incomes, expenses }) => {
  const [warning, setWarning] = useState(false);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [leftover, setLeftover] = useState(0);

  useEffect(() => {
    let localIncome = 0;
    let localExpense = 0;

    if (incomes) {
      console.log(incomes);
      for (let index = 0; incomes.length - 1; index++) {
        // localIncome += incomePerMonth(
        //   incomes[index].amount,
        //   incomes[index].type
        // );
      }
    }

    // if (expenses) {
    //   for (let index = 0; expenses.length; index++) {
    //     localExpense += incomePerMonth(
    //       expenses[index].amount,
    //       expenses[index].type
    //     );
    //   }
    // }

    // setIncome(localIncome);
    // setExpense(localExpense);
    // setLeftover(localIncome - localExpense);
    // setWarning(localIncome < localExpense);
  }, []);

  return (
    <View style={warning ? style.container_error : styles.container_default}>
      <Text style={styles.label}>
        Current monthly income is {Utility.formatNumberAsCurrency(income)}
      </Text>
      <Text style={styles.label}>
        Current monthly expenses are {Utility.formatNumberAsCurrency(expense)}
      </Text>
      <Text style={styles.label}>
        Current leftover cash is {Utility.formatNumberAsCurrency(leftover)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container_default: {
    flex: 1,
    backgroundColor: "green",
    padding: 10,
    alignItems: "center",
  },
  container_error: {
    flex: 1,
    backgroundColor: "red",
  },
  label: {
    color: "white",
    fontWeight: "bold",
    margin: 2,
  },
});
