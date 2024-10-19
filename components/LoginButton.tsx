import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' // Use any icon family

const PressableIconButton = () => {
  const handlePress = (props) => {
    console.log('Icon pressed');
    props.navigation.navigate('Home')
  };

  return (
    <View style={styles.container}>
      {/* Pressable instead of TouchableOpacity */}
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#ddd' : '#eee', // Change background on press
          },
          styles.iconButton,
        ]}
      >
        <Icon name="search" size={30} color="#000" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    padding: 10,
    borderRadius: 20,
  },
});

export default PressableIconButton;
