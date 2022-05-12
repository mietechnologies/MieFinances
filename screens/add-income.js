import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextPropTypes,
  View,
} from "react-native";
import { DatePicker, Picker } from "react-native-woodpicker";
import { ActionButton } from "../components/action-button";
import { DateRow } from "../components/date-row";
import { TextInputField } from "../components/text-input-field";
import {
  IncomeModel,
  incomePerMonth,
  incomePerWeek,
  incomePerYear,
} from "../models/income-model";
import { Storage } from "../utils/storage";
import { Utility } from "../utils/utility";

export const EditIncomeModal = ({ navigation, route }) => {
  const incomeTypes = ["Weekly", "Biweekly", "Monthly", "Semimonthly"];
  const model = route?.params?.source;

  const [name, setName] = useState(model?.source ? model.source : "");
  const [amount, setAmount] = useState(
    model?.amount ? `${model.amount / 100}` : ""
  );
  const [type, setType] = useState(model?.type ? model.type : "Weekly");
  const [dates, setDates] = useState(model?.dates ? [] + model.dates : []);

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

  const del = async () => {
    Alert.alert(
      `Delete ${name}?`,
      "Are you sure you want to delete this income source?",
      [
        {
          text: "Yes",
          style: "destructive",
          onPress: async () => {
            await Storage.deleteIncome(model);
            navigation.goBack();
          },
        },
        {
          text: "No",
        },
      ]
    );
  };

  const save = async () => {
    if (confirm()) {
      tempModel.amount = amount * 100;
      tempModel.source = name;
      tempModel.type = type;

      await Storage.addIncome(tempModel);
      navigation.goBack();
    }
  };

  const confirm = () => {
    if (name == "" || type == "") {
      Alert.alert(
        "Missing Info!",
        "Please ensure that all information is present!",
        [{ text: "Okay" }]
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
        <View>
          {dates.map((date) => {
            <DateRow date={date} />;
          })}
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
        {model ? <ActionButton title="Delete" onPress={del} /> : null}
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
