// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
import Index from './screens/Index'
import Main from './screens/Main'
import Teacher from './screens/Teacher'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{title:'首页',headerTitleAlign:'center',headerStyle:{backgroundColor:'green'},headerTitleStyle:{color:'white'}}}>
        <Stack.Screen name="Index" component={Index} options={{title:'首页',headerTitleAlign:'center',headerStyle:{backgroundColor:'green'},headerTitleStyle:{color:'white'}}}/>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Teacher" component={Teacher} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
