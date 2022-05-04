import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ActionButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightgray",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  button_label: {
    color: "blue",
    fontSize: 16,
  },
});
