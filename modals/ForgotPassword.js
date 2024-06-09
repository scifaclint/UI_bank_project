import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ScrollView } from "react-native";
import Modal from "react-native-modal";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppBottom from "../components/AppBottom";

function ForgotPassword({ isVisible, onClose }) {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    // implement link sending logic here
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (pattern.test(email)) {
      Alert.alert("Reset Link sent", `A reset link sent to ${email}`),
        [{ text: "Ok", onPress: () => Alert.dismiss() }];
      onClose();
    } else {
      Alert.alert("Invalid Email", "Please enter a valid email address"),
        [
          {
            text: "Ok",
            onPress: () => Alert.dismiss(),
          },
        ];
    }
  };

  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboarview}
      >
        <ScrollView>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.message}>
              Please enter the email address associated with your account. A
              password reset link will be sent to your inbox.
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            ></TextInput>
            <View style={styles.appbottom}>
              <AppBottom onPress={handleReset} text="Reset" />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
    backgroundColor: "#E8E8E8",
  },
  modalContent: {
    backgroundColor: Color.lightPrimaryKeyBackground,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    height: hp("80%"),
  },
  title: {
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_5xl,
    color: Color.colorDarkslateblue_200,
  },
  message: {
    top: 20,
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslateblue_100,
  },
  input: {
    top: 100,
    left: "2%",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    height: 55,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lightPrimaryKeyBackground,
    width: "90%",
    padding: 10,
  },
  keyboarview: {},
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appbottom: {
    top: 120,
    right: "30%",
  },
});

export default ForgotPassword;
