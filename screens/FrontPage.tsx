import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Arrow Icon



const FrontPage = ({ navigation }) => {
    const [name, setName] = useState('');
    return (
        <View style={styles.container}>
            {/* Image Section */}
            <Image
                source={{ uri: 'https://cdn.pixabay.com/photo/2024/02/28/03/55/ai-generated-8601128_960_720.png' }} // Use local image or URL
                style={styles.image}
            />

            {/* About Section */}
            <Text style={styles.aboutText}>
                Keep reading,
            </Text>
            <Text style={styles.aboutText1}>
                You'll fall in love

            </Text>
            <Text style={styles.about}>
              Let the search begin , be the best one out there 
              dont let the Prof fool you , play the Prof
            </Text>
            <TextInput style={styles.enterName} placeholderTextColor='#aaa' textAlign='center'
                onChangeText={(text) => setName(text)} placeholder='enter your name ' />


            {/* Arrow Button */}
            <TouchableOpacity
                style={styles.arrowButton}
                onPress={() => navigation.navigate('HomePage', { name })}
            >
                <Icon name="arrow-forward" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#E0F4FF', // Background color for the front page
    },
    image: {
        width: '90%',
        height: 320, // Adjust as per your design
        resizeMode: 'cover',
        marginBottom: 20,
        borderRadius: 20,

    },
    aboutText: {
        fontSize: 27,
        color: '#333',
        textAlign: 'center',
        fontFamily: 'PlayfairDisplay-ExtraBold',
        
    },
    aboutText1: {
        fontSize: 27,
        color: '#333',
        textAlign: 'center',
        marginBottom: 30,
        fontFamily: 'PlayfairDisplay-ExtraBold',
       
    },
    about:{
        paddingBottom:30,
        color:'grey',
        alignContent:'center',
        alignItems:'center',
        textAlign:'center'
    },
    enterName: {
        color: '#000',
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 10,
        width: 200,
        marginBottom: 20,

    },
    arrowButton: {
        backgroundColor: '#8A2BE2', // Violet background color
        padding: 15,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FrontPage;
