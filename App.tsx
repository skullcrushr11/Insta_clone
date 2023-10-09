// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Screens/Home';
import StoryScreen from './src/Screens/StoryScreen';
import BNavigator from './src/BNavigator';
import PostView from './src/PostView'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BNavigator">
          <Stack.Screen name="BNavigator" component={BNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="StoryScreen" component={StoryScreen} options={{ headerShown: false }} />
          <Stack.Screen name="PostView" component={PostView} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
