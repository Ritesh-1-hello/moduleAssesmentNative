import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const AuthenticationComponent = ({ onLogin, onRegister, goToRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    onLogin(username, password);
  };

  const handleRegister = () => {
    onRegister(username, password);
  };

  const handleGoToLogin = () => {
    setIsRegistering(false); // Set isRegistering to false to switch to login page
    goToRegister(); // Navigate to the login page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isRegistering ? "Register" : "Login"}</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {isRegistering ? (
        <>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <Text>
            Already have an account?{" "}
            <Text style={styles.toggleLink} onPress={handleGoToLogin}>
              Login
            </Text>
          </Text>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text>
            Don't have an account?{" "}
            <Text
              style={styles.toggleLink}
              onPress={() => setIsRegistering(true)}
            >
              Register
            </Text>
          </Text>
        </>
      )}
      <Text style={styles.goToRegister} onPress={() => goToRegister()}>
        Go to Register
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputField: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  toggleLink: {
    color: "blue",
  },
  goToRegister: {
    marginTop: 20,
    color: "blue",
  },
});

export default AuthenticationComponent;
