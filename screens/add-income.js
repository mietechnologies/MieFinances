import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "react-native-woodpicker";

export const EditIncomeModal = () => {
  const incomeTypes = ["Weekly", "Bi-Weekly", "Bi-Monthly", "Monthly"];
  const [type, setType] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.field_container}>
        <Text style={styles.field_label}>Source:</Text>
        <TextInput style={styles.input_field}></TextInput>
      </View>
      <View style={styles.picker_container}>
        <Text style={styles.field_label}>Income Type:</Text>
        <Picker
          style={styles.picker}
          item={type}
          onItemChange={setType}
          title="Income Type"
          placeholder="Select Income Type"
          items={incomeTypes.map((type) => {
            return { label: type, value: type };
          })}
        />
      </View>
    </View>
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
  picker: { height: 40 },
  picker_item: {
    fontSize: 14,
  },
  picker_container: { margin: 10 },
});
