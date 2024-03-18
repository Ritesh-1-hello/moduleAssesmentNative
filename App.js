// App.js
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import AuthenticationComponent from "./AuthenticationComponent";
import RegistrationComponent from "./RegistrationComponent";
import RecipeComponent from "./RecipeComponent";
import UserDashboardComponent from "./UserDashboardComponent";

const App = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (username, password) => {
    // Authentication logic
    if (username === "test" && password === "123") {
      setUser(username);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleRegister = (username, password) => {
    // Registration logic
    setUser(username);
  };

  const goToRegister = () => {
    setShowLogin(false);
  };

  const goToLogin = () => {
    setShowLogin(true);
  };

  return (
    <View style={{ flex: 1 }}>
      {user ? (
        <ScrollView>
          <UserDashboardComponent user={user} />
          <RecipeComponent />
        </ScrollView>
      ) : showLogin ? (
        <AuthenticationComponent
          onLogin={handleLogin}
          onRegister={handleRegister}
          goToRegister={goToRegister}
        />
      ) : (
        <RegistrationComponent
          onRegister={handleRegister}
          goToLogin={goToLogin}
        />
      )}
    </View>
  );
};

export default App;
