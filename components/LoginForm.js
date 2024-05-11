import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const LoginForm = ({
  onSubmit,
  phoneStyle,
  passwordStyle,
  butContainer,
  texstyle,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Validate the form fields here if needed
    // For simplicity, I'm assuming the fields are not empty
    if (phoneNumber && password) {
      onSubmit({ phoneNumber, password });
    }
  };

  return (
    <View>
      <TextInput
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="Enter Phone Number"
        style={phoneStyle}
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Enter Password"
        secureTextEntry
        style={passwordStyle}
      />
      <TouchableOpacity style={butContainer} onPress={handleLogin}>
        <Text style={texstyle}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
