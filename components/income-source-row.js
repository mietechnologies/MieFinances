import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Utility } from "../utils/utility";

export const IncomeSourceRow = ({ source, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.text_container}>
        <Text style={styles.title_label}>{source.source}</Text>
        <Text style={styles.amount_label}>
          {Utility.formatNumberAsCurrency(source.amount)}
        </Text>
      </View>
      <Entypo name="chevron-small-right" size={24} color="gray" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  amount_label: {
    color: "gray",
  },
  container: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
  },
  text_container: {
    flex: 1,
  },
  title_label: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 20,
  },
});
