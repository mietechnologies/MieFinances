import React, { useEffect, useState } from "react";
import { ScrollView, Share, StyleSheet, Text, View } from "react-native";
import { IncomeSourceRow } from "../components/income-source-row";
import { NoItemsView } from "../components/no-items-view";
import { Storage } from "../utils/storage";

export const IncomeController = ({ navigation }) => {
  const onSelect = (source) => {
    navigation.navigate("editIncome", { source });
  };

  const [incomes, setIncomes] = useState(Storage.incomes);
  useEffect(async () => {
    const incomes = await Storage.getItemFor("incomes");
    setIncomes(incomes);
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        {incomes.length ? (
          incomes.map((source) => (
            <IncomeSourceRow
              source={source}
              key={source.id}
              onPress={() => {
                onSelect(source);
              }}
            />
          ))
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
