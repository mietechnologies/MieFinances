import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export const TextInputField = ({
  title,
  value,
  keyboardType,
  onChangeText,
}) => {
  return (
    <View style={styles.field_container}>
      <Text style={styles.field_label}>{title}</Text>
      <TextInput
        style={styles.input_field}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  field_container: {
    margin: 10,
  },
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
});
