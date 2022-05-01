import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const NoItemsView = ({ type }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{`No ${type} yet... \n Add one!`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  label: {
    color: "gray",
    fontSize: 16,
    textAlign: "center",
  },
});
