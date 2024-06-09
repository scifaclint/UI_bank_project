import * as React from "react";
import { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { CheckBox } from "react-native-elements";
import ForgotPassword from "../modals/ForgotPassword";
import BackgroundFaceScan from "../modals/BackgroundFaceScan";

const SplashScreen = () => {
  // checkbox logic also not implemented yet
  const [rememberMe, setRememberMe] = useState("false");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic using phoneNumber and password
    //not implemented yet (logic )
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
  };

  // handle forgot password
  const [visible, setvisible] = useState(false);

  const [onclose, setOnclose] = useState(false);

  const getItClosed = () => {
    setvisible(false);
  };

  // handle face scanning and detection background
  const [faceScanVisible, setFaceScanVisible] = useState(false);
  const handleLoginButton = () => {
    /*
    implement firebase logic here
    to authorise user ones everything set 
    then continue with face scan 
    */
    setFaceScanVisible(true);
  };
  const closeFaceScan = () => {
    setFaceScanVisible(false);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.splashScreen}>
          <Image
            style={[styles.splashScreenChild, styles.phonePosition]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.welcomeToUnionpayContainer}>
            <Text
              style={[styles.welcomeToUnionpay, styles.loginTypo1]}
            >{`Welcome to Unionpay
`}</Text>
            <Text style={styles.dontHaveAnAccountSignUp}>
              <Text style={styles.dontHaveAnTypo}>{`
Don’t have an account? `}</Text>
              <View>
                <TouchableOpacity
                /// text button sign up
                // logic not implemented yet
                >
                  <Text style={styles.loginTypo1}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </Text>
          </Text>
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter
            Your
            Email"
            style={[
              styles.enterPhoneNumber,
              styles.loginTypo,
              styles.phone,
              styles.phoneLayout,
            ]}
          ></TextInput>

          <TextInput
            placeholder="Enter Your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={[
              styles.password1,
              styles.password1Typo,
              styles.password,
              styles.tickBoxBorder,
            ]}
          ></TextInput>

          <Image
            style={styles.viewHidePass}
            contentFit="cover"
            source={require("../assets/view-hide-pass.png")}
          />
          <View
            style={{
              top: hp("58%"),
              left: wp("3%"),
              width: wp("46%"),
            }}
          >
            <CheckBox
              style={{
                position: "absolute",
                backgroundColor: "transparent",
                borderWidth: 0,
                margin: 0,
                padding: 0,
              }}
              title="Remember Me"
              checked={rememberMe}
              containerStyle={styles.checkboxContainer}
              textStyle={styles.checkboxText}
              onPress={() => setRememberMe(!rememberMe)}
            />
          </View>
          <View
            style={{
              top: hp("54%"),
              left: wp("58%"),
              width: wp("46%"),
              borderWidth: 1, // Border width
              borderColor: "transparent", // Border color
              borderRadius: 5, // Border radius for rounded corners
              padding: 10, // Padding inside the rectangle
              backgroundColor: "transparent",
            }}
          >
            <TouchableOpacity
              // forgot password logic wont be implemented for this project
              onPress={() => setvisible(true)}
            >
              <Text style={styles.checkboxText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={handleLoginButton}
            // container styles
            // onpress or button logic not implemented yet
            style={styles.loginContainer}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.contactHomeText}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <TouchableOpacity>
              <Text style={[styles.contactUs, styles.password1Typo]}>
                Contact Us
              </Text>
            </TouchableOpacity>
          </View>
          <ForgotPassword onClose={getItClosed} isVisible={visible} />
          <BackgroundFaceScan
            isVisible={faceScanVisible}
            onClose={closeFaceScan}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  phonePosition: {
    left: "50%",
    top: "40%",
  },
  checkboxText: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "bold",
  },
  checkboxContainer: {
    backgroundColor: "transparent", // Background color of the checkbox container
    borderWidth: 0, // Remove border
    padding: 0, // Padding
    margin: 0, // Margin
  },
  loginText: {
    color: Color.lightPrimaryKeyBackground,
    textAlign: "left",
    fontWeight: "bold",
    position: "absolute",
    paddingLeft: wp("15%"),
    marginTop: 10,
  },
  loginContainer: {
    position: "absolute",
    top: hp("66%"),
    borderRadius: Border.br_31xl,
    width: wp("40%"),
    height: hp("6%"),
    left: wp("28%"),
    backgroundColor: Color.colorDarkslateblue_200,
  },
  loginTypo1: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    color: Color.colorDarkslateblue_200,
  },
  phoneLayout: {
    height: 49,
    position: "absolute",
  },
  loginTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  tickBoxBorder: {
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
  password1Typo: {
    color: Color.lightText,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  splashScreenChild: {
    marginTop: -248,
    marginLeft: -57,
    width: wp("30%"),
    height: hp("15%"),
    position: "absolute",
  },
  welcomeToUnionpay: {
    fontSize: FontSize.size_xl,
  },
  dontHaveAnTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  dontHaveAnAccountSignUp: {
    fontSize: FontSize.size_sm,
    position: "relative",
  },
  welcomeToUnionpayContainer: {
    top: hp("30%"),
    left: wp("25%"),
    color: Color.colorDarkslateblue_200,
    textAlign: "left",
    position: "absolute",
  },
  phone: {
    marginTop: 0,
    marginLeft: -148,
    backgroundColor: "#e2e1e1",
    width: "75%",
    borderRadius: Border.br_3xs,
    left: "45%",
    top: "40%",
  },
  enterPhoneNumber: {
    top: "42%",
    left: "25%",
    color: "rgba(0, 0, 0, 0.9)",
    width: "75%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    padding:10
  },
  flagsIcon: {
    top: "42%",
    left: "12%",
    width: wp("8%"),
    height: hp("2%"),
    position: "absolute",
    overflow: "hidden",
  },
  password: {
    top: "49%",
    left: "7%",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: "75%",
    height: 46,
    borderRadius: Border.br_3xs,
  },
  password1: {
    top: "50%",
    width: "90%",
    left: "20%",
    fontFamily: FontFamily.interRegular,
    padding:10
  },
  // viewHidePass: {
  //   top: "50%",
  //   left: "70%",
  //   width: 24,
  //   height: 24,
  //   position: "absolute",
  // },

  rememberMeForgot: {
    top: 456,
    width: 283,
    left: 58,
    fontFamily: FontFamily.interRegular,
  },
  splashScreenItem: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkslateblue_200,
    width: 209,
  },
  login: {
    top: hp("70%"),
    left: 168,
    letterSpacing: 0.3,
    color: Color.lightPrimaryKeyBackground,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  vectorIcon: {
    height: "23.97%",
    width: "18.25%",
    top: "0%",
    right: "30.66%",
    bottom: "76.03%",
    left: "51.09%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  contactUs: {
    top: hp("5%"),
    left: wp("10%"),
  },
  contactHomeText: {
    top: hp("85%"),
    left: wp("25%"),
    width: wp("32%"),
    height: hp("8%"),
    position: "absolute",
  },
  splashScreen: {
    borderRadius: Border.br_4xs,
    flex: 1,
    width: "100%",
    height: hp("100%"),
    overflow: "hidden",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
});

export default SplashScreen;
