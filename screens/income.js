import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { IncomeSourceRow } from "../components/income-source-row";
import { NoItemsView } from "../components/no-items-view";

export const IncomeController = () => {
  const items = [
    {
      source: "Social Security",
      frequency: "monthly",
      amount: 67890,
      dates: ["8"],
    },
    {
      source: "A really long income source name to see how this looks",
      frequency: "bi-monthly",
      amount: 12345,
      dates: ["8"],
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {items.length ? (
          items.map((item) => <IncomeSourceRow source={item} />)
        ) : (
          <NoItemsView type="income sources" />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
