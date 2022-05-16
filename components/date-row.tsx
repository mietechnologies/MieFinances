import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Utility } from "../utils/utility";
import { IncomeDate, IncomeType } from "../models/income-model";

type DateRowProps = {
  date: IncomeDate;
  type: IncomeType;
  onAdd: () => any;
};

export const DateRow = ({ date, type, onAdd }: DateRowProps) => {
  const [incomeType, setIncomeType] = useState(type);

  return (
    <View style={styles.container}>
      {date.type && date.value ? (
        // Actual date
        <View style={styles.row}>
          <Text>{Utility.formatNumberAsDayOfMonth(date.value)}</Text>
          <TouchableOpacity>
            <FontAwesome5 name="minus-circle" size={24} color="red" />
          </TouchableOpacity>
        </View>
      ) : (
        // Empty object, should show add row
        <TouchableOpacity style={styles.row}>
          <Text>Add Date</Text>
          <FontAwesome5 name="plus-circle" size={24} color="green" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 8,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
