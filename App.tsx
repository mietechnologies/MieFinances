import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { DataController } from './screens/data';
import { ExpensesController } from './screens/expenses';
import { MaterialIcons } from '@expo/vector-icons';
import { IncomeStack } from './stacks/income-stack';
import { useEffect } from 'react';
import { Storage } from './utils/storage';

const Tabs = createBottomTabNavigator();

export default function App() {
  useEffect(async () => {
    const incomes = await Storage.getItemFor("incomes");
    const expenses = await Storage.getItemFor("expenses");

    if (incomes) {
      Storage.incomes = incomes;
    }

    if (expenses) {
      Storage.expenses = expenses;
    }
  }, []);

  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconColor = focused ? "black" : "lightgray"

            switch (route.name) {
              case "income": return <MaterialIcons name="attach-money" size={24} color={iconColor} />
              case "expenses": return <MaterialIcons name="money-off" size={24} color={iconColor} />
              case "data": return <MaterialIcons name="bar-chart" size={24} color={iconColor} />
              default: return <MaterialIcons name="attach-money" size={24} color={iconColor} />
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'lightgray',
        })}>
        <Tabs.Screen name="income" component={IncomeStack} options={{ headerShown: false, title:"Income"}} />
        <Tabs.Screen name="expenses" component={ExpensesController} options={{title:"Expenses"}} />
        <Tabs.Screen name="data" component={DataController} options={{title:"Data"}} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_button: {
    margin: 8
  }
});
