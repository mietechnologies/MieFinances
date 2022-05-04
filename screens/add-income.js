import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Picker } from "react-native-woodpicker";
import { ActionButton } from "../components/action-button";
import { TextInputField } from "../components/text-input-field";
import {
  IncomeModel,
  incomePerMonth,
  incomePerWeek,
  incomePerYear,
} from "../models/income-model";
import { Storage } from "../utils/storage";
import { Utility } from "../utils/utility";

export const EditIncomeModal = ({ navigation, model }) => {
  const incomeTypes = ["Weekly", "Biweekly", "Monthly", "Semimonthly"];

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Weekly");

  let tempModel = model || IncomeModel;

  const setDetails = (name, newAmount, type) => {
    if (name != undefined) {
      setName(name);
    }

    if (newAmount != undefined) {
      setAmount(newAmount);
    }

    if (type != undefined) {
      setType(type);
    }
  };

  const save = async () => {
    if (confirm()) {
      tempModel.source = name;
      tempModel.amount = amount;
      tempModel.type = type;

      // If a model was passed in, we're editing
      if (model) {
        return;
      }

      // Otherwise, we're creating a new one
      const existingItems = await Storage.getJsonItemsFor("incomeSources");
      const newItems = { ...existingItems, tempModel };
      await Storage.setJsonItemsFor("incomeSources", newItems);

      navigation.goBack();
    }
  };

  const confirm = () => {
    if (name == "" || type == "") {
      Alert.alert(
        "Missing Info!",
        "Please ensure that all information is present!",
        [{ title: "Okay" }]
      );
      return false;
    }
    return true;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInputField
          title="Source:"
          value={name}
          onChangeText={(text) => {
            setDetails(text, amount, type);
          }}
        />
        <TextInputField
          title="Amount:"
          value={amount}
          keyboardType="decimal-pad"
          onChangeText={(text) => {
            setDetails(name, text, type);
          }}
        />
        <View style={styles.field_container}>
          <Text style={styles.field_label}>Income Type:</Text>
          <Picker
            style={styles.picker}
            item={{ label: type, value: type }}
            onItemChange={(value) => {
              setDetails(name, amount, value.label);
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
            {Utility.formatNumberAsCurrency(incomePerWeek(amount, type))}
          </Text>
        </View>
        <View style={styles.horizontal_field_container}>
          <Text style={styles.detail_title}>Per Month:</Text>
          <Text style={styles.detail_label}>
            {Utility.formatNumberAsCurrency(incomePerMonth(amount, type))}
          </Text>
        </View>
        <View style={styles.horizontal_field_container}>
          <Text style={styles.detail_title}>Per Year:</Text>
          <Text style={styles.detail_label}>
            {Utility.formatNumberAsCurrency(incomePerYear(amount, type))}
          </Text>
        </View>
        <ActionButton title="Save" onPress={save} />
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
