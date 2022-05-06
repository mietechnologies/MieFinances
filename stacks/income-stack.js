import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { IncomeController } from "../screens/income";
import { AntDesign } from "@expo/vector-icons";
import { EditIncomeModal } from "../screens/add-income";

const NavigationStack = createStackNavigator();

export const IncomeStack = ({ navigation }) => {
  function addIncomeHandler() {
    navigation.navigate("editIncome");
  }

  return (
    <NavigationStack.Navigator>
      <NavigationStack.Screen
        name="incomeController"
        component={IncomeController}
        options={{
          title: "Income",
          headerRight: () => {
            return (
              <TouchableOpacity
                style={styles.header_button}
                onPress={addIncomeHandler}
              >
                <AntDesign name="pluscircleo" size={24} color="blue" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <NavigationStack.Screen
        name="editIncome"
        component={EditIncomeModal}
        options={{
          title: "Income Source",
          presentation: "modal",
          headerLeft: () => {
            // TODO: Add close button
          },
          headerRight: () => null,
        }}
      />
    </NavigationStack.Navigator>
  );
};

const styles = StyleSheet.create({
  header_button: {
    margin: 8,
  },
});
