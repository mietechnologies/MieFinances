import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DataController } from './screens/data';
import { ExpensesController } from './screens/expenses';
import { IncomeController } from './screens/income';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
<NavigationContainer>
  <Tabs.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconColor = focused ? "black" : "gray"

        switch (route.name) {
          case "income": return <MaterialIcons name="attach-money" size={24} color={iconColor} />
          case "expenses": return <MaterialIcons name="money-off" size={24} color={iconColor} />
          case "data": return <MaterialIcons name="bar-chart" size={24} color={iconColor} />
          default: return <MaterialIcons name="attach-money" size={24} color={iconColor} />
        }
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
    <Tabs.Screen name="income" component={IncomeController} options={{title:"Income", headerRight: () => {
      return <TouchableOpacity style={styles.header_button}>
        <AntDesign name="pluscircleo" size={24} color="blue" />
      </TouchableOpacity>
    }}} />
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
