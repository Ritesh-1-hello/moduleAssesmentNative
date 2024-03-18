import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import axios from "axios";

const RecipeComponent = () => {
  // State variables
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch recipes based on the query
  const fetchRecipes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=160e359c&app_key=67a48b91de75fe5c383a6a4d27850889`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      setError("Error fetching recipes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle recipe selection
  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Function to handle back button click
  const handleBack = () => {
    setSelectedRecipe(null);
  };

  // Function to handle recipe search
  const handleSearch = () => {
    fetchRecipes();
  };

  // Use effect to fetch recipes when the component mounts
  useEffect(() => {
    fetchRecipes();
  }, []);

  // Render individual recipe item
  const renderRecipeItem = ({ item }) => (
    <View style={styles.recipeCard} onTouchEnd={() => handleRecipeSelect(item)}>
      <Text style={styles.recipeTitle}>{item.recipe.label}</Text>
      <Image style={styles.recipeImage} source={{ uri: item.recipe.image }} />
      <View style={styles.recipeDetails}>
        <Text>Calories: {Math.round(item.recipe.calories)}</Text>
        <Text>Health Labels: {item.recipe.healthLabels.join(", ")}</Text>
        <Text>Diet Labels: {item.recipe.dietLabels.join(", ")}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for recipes..."
          value={query}
          onChangeText={setQuery}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      <FlatList
        data={recipes}
        renderItem={renderRecipeItem}
        keyExtractor={(item) => item.recipe.uri}
        contentContainerStyle={styles.recipeContainer}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  recipeContainer: {
    flexGrow: 1,
  },
  recipeCard: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  recipeImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  recipeDetails: {
    marginTop: 10,
  },
});
export default RecipeComponent;
