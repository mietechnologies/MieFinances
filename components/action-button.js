import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ActionButton = ({ image, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {/* Layout for this view:
       * 1. If only an image is passed in, it should only use the image
       * 2. If only a title is passed in, it should only use the title
       * 3. If both are passed in, both elements should be used in a
       *    horizontal layout with the image first
       */}
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
