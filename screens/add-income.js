import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "react-native-woodpicker";
import {
  IncomeModel,
  incomePerMonth,
  incomePerWeek,
  incomePerYear,
} from "../models/income-model";
import { Utility } from "../utils/utility";

export const EditIncomeModal = ({ model }) => {
  const incomeTypes = ["Weekly", "Biweekly", "Monthly", "Semimonthly"];

  const [name, setName] = useState();
  const [amount, setAmount] = useState("0");
  const [type, setType] = useState("Weekly");
  const [perWeek, setPerWeek] = useState(0);
  const [perMonth, setPerMonth] = useState(0);
  const [perYear, setPerYear] = useState(0);

  let tempModel = model || IncomeModel;

  const setDetails = (name, amount, type) => {
    if (name != undefined) {
      setName(name);
    }

    if (amount != undefined) {
      setAmount(amount);
    }

    if (type != undefined) {
      setType(type);
    }

    setPerWeek(incomePerWeek(amount, type));
    setPerMonth(incomePerMonth(amount, type));
    setPerYear(incomePerYear(amount, type));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.field_container}>
          <Text style={styles.field_label}>Source:</Text>
          <TextInput
            style={styles.input_field}
            value={name}
            onChangeText={(text) => {
              setDetails(text, amount, type);
            }}
          ></TextInput>
        </View>
        <View style={styles.field_container}>
          <Text style={styles.field_label}>Amount:</Text>
          <TextInput
            style={styles.input_field}
            keyboardType="decimal-pad"
            value={amount}
            onChangeText={(text) => {
              setDetails(name, text, type);
            }}
          ></TextInput>
        </View>
        <View style={styles.field_container}>
          <Text style={styles.field_label}>Income Type:</Text>
          <Picker
            style={styles.picker}
            item={type}
            onItemChange={(value) => {
              setDetails(name, amount, value.value);
            }}
            title="Income Type"
            placeholder="Weekly"
            items={incomeTypes.map((type) => {
              return { label: type, value: type };
            })}
          />
        </View>
        <View style={styles.horizontal_field_container}>
          <Text style={styles.detail_title}>Per Week:</Text>
          <Text style={styles.detail_label}>
            {Utility.formatNumberAsCurrency(perWeek)}
          </Text>
        </View>
        <View style={styles.horizontal_field_container}>
          <Text style={styles.detail_title}>Per Month:</Text>
          <Text style={styles.detail_label}>
            {Utility.formatNumberAsCurrency(perMonth)}
          </Text>
        </View>
        <View style={styles.horizontal_field_container}>
          <Text style={styles.detail_title}>Per Year:</Text>
          <Text style={styles.detail_label}>
            {Utility.formatNumberAsCurrency(perYear)}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  field_container: { margin: 10 },
  field_label: {
    marginLeft: 5,
  },
  input_field: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    marginTop: 2,
  },
  picker: { padding: 5, height: 40 },
  picker_item: {
    fontSize: 14,
  },
  horizontal_field_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginHorizontal: 15,
  },
  detail_title: {
    color: "gray",
    fontSize: 16,
    fontWeight: "500",
  },
  detail_label: {
    color: "gray",
  },
});
