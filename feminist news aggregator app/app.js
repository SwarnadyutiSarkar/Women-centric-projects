// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsListScreen from './screens/NewsListScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewsList">
        <Stack.Screen name="NewsList" component={NewsListScreen} options={{ title: 'Feminist News Aggregator' }} />
        <Stack.Screen name="NewsDetail" component={NewsDetailScreen} options={{ title: 'News Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
