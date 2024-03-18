import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserDashboardComponent = ({ user }) => {
  // Placeholder data for search history and favorite recipes
  const searchHistory = ["Pizza", "Pasta", "Salad"];
  const favoriteRecipes = [
    "Spaghetti Carbonara",
    "Chicken Alfredo",
    "Caesar Salad",
  ];

  return (
    <View style={styles.dashboardContainer}>
      <Text style={styles.welcomeMessage}>Welcome, {user}!</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Search History:</Text>
        <View style={styles.list}>
          {searchHistory.map((item, index) => (
            <Text style={styles.listItem} key={index}>
              {item}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favorite Recipes:</Text>
        <View style={styles.list}>
          {favoriteRecipes.map((item, index) => (
            <Text style={styles.listItem} key={index}>
              {item}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    padding: 50,
    paddingTop: 70,
    backgroundColor: "#ffffff", // Optional background color
  },
  welcomeMessage: {
    fontSize: 24,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  list: {
    marginLeft: 10,
  },
  listItem: {
    marginBottom: 5,
  },
});

export default UserDashboardComponent;
