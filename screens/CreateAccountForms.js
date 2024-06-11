import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import constants from "expo-constants";
import { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import { CheckBox } from "react-native-elements";

/// functions
const handleSubmit = () => {
  /*
    logic implementation to validate email
    check box state for "true"
    password length requirement before navigations
    */
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
};

// logout function 

const handleLogout = () => {
  
}

//
const Status_BarHeight =
  Platform.OS === "ios" ? constants.statusBarHeight : StatusBar.currentHeight;

function CreateAccountForms(props) {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeT, setagreeT] = useState(false);

  return (
    <>
      <StatusBar backgroundColor={Color.colorDarkslateblue_200} />
      <View style={styles.container}>
        <View>
          <View style={styles.imageTop}>
            <Image
              contentFit="cover"
              style={{
                height: 60,
                width: 60,
                position: "absolute",
                top: hp("8%"),
                left: wp("40%"),
              }}
              source={require("../assets/ellipse-1.png")}
            />
            <Text
              style={{
                top: hp("18%"),
                left: wp("30%"),
                color: Color.colorDarkslateblue_300,
                fontFamily: FontFamily.poppinsBold,
                fontSize: 15,
              }}
            >
              Create An Account
            </Text>
          </View>
        </View>
        <View
          // first and last name
          style={{
            flexDirection: "row",
            top: hp("22%"),
          }}
        >
          <TextInput
            placeholder="First Name"
            onChange={firstName}
            onChangeText={() => setFirstname(firstName)}
            style={styles.inputLF}
          ></TextInput>
          <TextInput
            placeholder="Last Name"
            onChange={lastName}
            onChangeText={() => setLastname(lastName)}
            style={[styles.inputLF, styles.lastN]}
          ></TextInput>
        </View>
        <View
          style={{
            top: hp("24%"),
          }}
          // others form area
        >
          <TextInput
            style={[styles.inputLL]}
            placeholder="Email"
            onChange={email}
            onChangeText={() => setEmail(email)}
          />
          <TextInput
            style={[styles.inputLL]}
            placeholder="Password"
            onChange={password}
            onChangeText={() => setPassword(password)}
            secureTextEntry
          />
          <TextInput
            style={[styles.inputLL]}
            placeholder="Confirm Password"
            onChange={confirmPassword}
            onChangeText={() => setConfirmPassword(confirmPassword)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            top: hp("24%"),
            justifyContent: "center",
          }}
          // others here
        >
          <View
            style={{
              height: 50,
              width: 50,
            }}
          >
            <CheckBox
              uncheckedColor={Color.colorDarkslateblue_200}
              style={{
                position: "absolute",
                backgroundColor: "transparent",
                borderWidth: 0,
                margin: 0,
                padding: 0,
              }}
              checked={agreeT}
              containerStyle={styles.checkboxContainer}
              textStyle={styles.checkboxText}
              onPress={() => setagreeT(!agreeT)}
            />
          </View>
          <Text
            style={{
              top: 15,
              fontFamily: FontFamily.interBold,
              color: Color.colorDarkslateblue_600,
            }}
          >
            I agree to Terms and Conditions
          </Text>
        </View>
        <View
          //
          style={{
            flexDirection: "row",
            top: hp("25%"),
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.interBold,
              color: Color.colorDarkslateblue_600,
            }}
          >
            Already have an account ?
          </Text>
          <TouchableOpacity
          // handle onpress later
          >
            <Text
              style={{
                paddingLeft: 8,
                color: "#2356D7",
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <View
          // submit button
          style={{
            justifyContent: "center",
            top: hp("30%"),
          }}
        >
          <TouchableOpacity
            // on submit press
            onPress={handleSubmit}
            style={styles.submitB}
          >
            <Text
              style={{
                top: 10,
                fontFamily: FontFamily.dMSansBold,
                fontWeight: "bold",
                color: Color.colorDarkslateblue_600,
                textAlign: "center",
                color: Color.colorWhitesmoke_200,
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Status_BarHeight,
    width: wp("100%"),
    justifyContent: "flex-start",
  },
  imageTop: {
    top: "50%",
  },
  submitB: {
    height: wp("10%"),
    width: wp("50%"),
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkslateblue_200,
    left: "25%",
    borderRadius: 12,
    borderStyle: "solid",
  },
  inputLF: {
    borderWidth: 1,
    borderColor: Color.colorDarkslateblue_300,
    height: wp("12%"),
    width: wp("40%"),
    borderRadius: 12,
    borderStyle: "solid",
    padding: 10,
    left: wp("3.5%"),
    backgroundColor: "#E7F0FE",
    marginBottom: 10,
  },
  lastN: {
    left: wp("15%"),
  },
  inputLL: {
    borderWidth: 1,
    borderColor: "#E7F0FE",
    height: wp("12%"),
    width: wp("90%"),
    borderRadius: 12,
    borderStyle: "solid",
    padding: 10,
    left: wp("3.5%"),
    backgroundColor: "#E7F0FE",
    marginBottom: 20,
  },
});
export default CreateAccountForms;
