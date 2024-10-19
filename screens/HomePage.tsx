import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';




const HomePage = (props) => {
    const {name} = props.route.params
  return (
    <ScrollView style={styles.container}>
    <View>
        <Icon name='menu' size={30} color='#000' />
        <Text style={styles.greeting}>Hi {name}!</Text>
        <Text style={styles.keepExploring}>Keep Exploring</Text>
    </View>

    <View style={styles.searchBarContainer}>
       <TextInput 
       placeholder='Search your notes'
       placeholderTextColor='#aaa'
       style={styles.searchInput}
       />
       <TouchableOpacity style={styles.searchButton}>
        <Icon name='search' size={20} color='#fff' />
       </TouchableOpacity>
    </View>

    <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trending books</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor:'#E0F4FF'
  },
  homeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  greeting:{
    color:'grey',
    fontSize:25,
    marginLeft:15
  },
  keepExploring:{
     color:"#000",
     fontSize:25,
     marginLeft:15,
     fontFamily:'PlayfairDisplay-ExtraBold'
  },
  searchInput:{
    flex:1,
    fontSize:16,
    color:'#333'
  },
  searchBarContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    marginBottom: 10,
    margin:15

  },
  searchButton:{
    backgroundColor: '#8A2BE2',
    padding: 10,
    borderRadius: 20,
  },
  section:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    
  },
  sectionTitle: {
    fontSize: 18,
    color:"#000",
    marginLeft:15,
    padding:2,
    fontFamily:'PlayfairDisplay-ExtraBold'
  },
  seeAllText: {
    color: '#000',
    marginRight:17,
    fontFamily:'PlayfairDisplay-Medium'
  }
});

export default HomePage;
