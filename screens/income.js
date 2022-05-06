import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { IncomeSourceRow } from "../components/income-source-row";
import { NoItemsView } from "../components/no-items-view";
import { Storage } from "../utils/storage";

export const IncomeController = ({ navigation }) => {
  const [sources, setSources] = useState();

  useEffect(async () => {
    const items = await Storage.getJsonItemsFor("incomeSources");
    setSources(items);
  });

  const onSelect = (source) => {
    console.log(source);
    navigation.navigate("editIncome", { source });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {sources?.length ? (
          sources.map((source) => (
            <IncomeSourceRow
              source={source}
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
