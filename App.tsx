import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TextInput, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { enableScreens } from 'react-native-screens';
import SearchBar from './search_bar/Searchbar';
import TrendingSection from './components/trending';
enableScreens();


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  )
};

const Home = () => {
  return (
    
      <View style={{ flex: 1, alignContent: 'flex-start', }}>
        <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}> Find best recipes</Text>
        <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}> for cooking</Text>
        <SearchBar />

        <TrendingSection />

      </View>
    
  )
}
const Login = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
      <Text style={{ color: 'black', fontSize: 20 }}> Login Screen</Text>
      <Button title='Go to Home Page' onPress={() => props.navigation.navigate('Home')} />
    </View>
  )
}
export default App;