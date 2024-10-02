import React, { useState } from "react";
import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-paper";

const recipesData = [
    { id: '1', name: 'Spaghetti Bolognese' },
    { id: '2', name: 'Chicken Curry' },
    { id: '3', name: 'Beef Stroganoff' },
    { id: '4', name: 'Vegetable Stir Fry' },
    { id: '5', name: 'Pancakes' },

];

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

    const handleSearch = (text) => {
        setSearchText(text);

        // Filter recipes based on the search text
        if (text) {
            const filteredData = recipesData.filter((item) =>
                item.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredRecipes(filteredData);
        } else {
            setFilteredRecipes([]);  // Reset when search text is empty
        }
    };

    return (
        <View style={styles.container}>
            {/* Search Input Field */}
            <View style={styles.searchBarContainer}>
                <Icon name="ios-search" size={20} color="black" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search recipes"
                    value={searchText}
                    onChangeText={handleSearch}
                />
            </View>

            {/* Display Filtered Search Results */}
            {searchText.length > 0 && (
                <FlatList
                    data={filteredRecipes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.recipeItem}>
                            <Text style={styles.recipeText}>{item.name}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        color: 'black'
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 1,
        marginBottom: 5,
        color: 'black',
        borderColor: 'grey',
        borderWidth: 1
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: 'black'
    },
    recipeItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        color: 'black'
    },
    recipeText: {
        fontSize: 18,
        color: 'black'
    },
});
export default SearchBar;