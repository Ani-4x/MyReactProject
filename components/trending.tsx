import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Icon, overlay } from "react-native-paper";

const data = [
    {
        id: 1,
        title: 'How to make suafdshi at home',
        rating: 4.5,
        duration: '15:10',
        image: 'D:/Lodu/images/sushi.jpg'
    },
    {
        id: 2,
        title: 'How to make sushi at home',
        rating: 4.5,
        duration: '15:10',
        image: 'D:/Lodu/images/sushi.jpg'
    },
    {
        id: 3,
        title: 'How to make sufgdshi at home',
        rating: 4.5,
        duration: '15:10',
        image: 'D:/Lodu/images/sushi.jpg'
    },
    {
        id: 4,
        title: 'How to make suqwershi at home',
        rating: 4.5,
        duration: '15:10',
        image: 'D:/Lodu/images/sushi.jpg'
    }
];

const TrendingSection = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            <Image source={require('D:/Lodu/images/sushi.jpg')} style={styles.image} />
            <View style={styles.overlay} >
                <Text style={styles.duration}>{item.duration}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.rating}>
                    <Icon name='star' size={16} color="black" />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.continer}>
            <Text style={styles.heading}>Trending Now</Text>
            <FlatList data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        continer: {
            marginVertical: 20,
            alignContent: 'flex-start',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly'
        },
        heading: {
            fontSize: 20,
            fontWeight: 'bold',
            marginHorizontal: 10,
            color: 'black',
            paddingBottom: 20
        },
        card: {
            marginHorizontal: 10,
            width: 200,
            borderRadius: 10,
            overflow: 'hidden',
            color: 'black',
            alignContent: 'flex-start',
            justifyContent: 'center',
            flex: 1,
            resizeMode:'cover'
        },
        image: {
            width: '150%',
            height: 120,
            backgroundColor: 'lightgrey',
            resizeMode: 'cover',
            
        },
        overlay: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            padding: 5,
            backgroundColor: 'black',
            borderTopLeftRadius: 5,
            color: 'black'
        },
        duration: {
            color: '#fff',
            fontSize: 12,
        },
        details: {
            padding: 10,
        },
        title: {
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black'
        },
        rating: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,

        },
        ratingText: {
            marginLeft: 2,
            fontSize: 14,
            backgroundColor: 'black'
        },

    }
);


export default TrendingSection;