import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TextInput, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { enableScreens } from 'react-native-screens';
import searchbar from './search_bar/Searchbar';
import SearchBar from './search_bar/Searchbar';
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
    <View style={{flex:1 , alignContent:'flex-start',  }}>
     <Text style={{color:'black' , fontSize:30,fontWeight:'bold'}}> Find best recipes</Text>
     <Text style={{color:'black', fontSize:30,fontWeight:'bold'}}> for cooking</Text>
     <SearchBar/>
     <TextInput >
      
     </TextInput>
    </View>
  )
}
const Login = (props) => {
  return (
    <View style={{flex:1, justifyContent:"center" , alignItems:'center'}}>
     <Text style={{color:'black' , fontSize:20}}> Login Screen</Text>
     <Button title='Go to Home Page' onPress={() => props.navigation.navigate('Home')} />
    </View>
  )
}
export default App;