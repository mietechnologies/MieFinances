import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export const DateRow = ({ date }) => {
  const formattedDate = (localDate) => {
    switch (date.type) {
      case "Weekly":
      case "Bi-Weekly":
      case "Monthly":
      case "Semimonthly":
    }
    return "ERR";
  };

  return (
    <View style={styles.container}>
      {JSON.stringify(date) === "{}" ? (
        // Empty object, should show add row
        <TouchableOpacity style={styles.row}>
          <Text>Add Date</Text>
          <FontAwesome5 name="plus-circle" size={24} color="green" />
        </TouchableOpacity>
      ) : (
        // Actual date
        <View style={styles.row}>
          <Text>{formattedDate(date)}</Text>
          <TouchableOpacity>
            <FontAwesome5 name="plus-circle" size={24} color="red" />
          </TouchableOpacity>
        </View>
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
