import * as React from "react";
import { useState } from "react";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Constants from "expo-constants";

import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { CheckBox } from "react-native-elements";
import ForgotPassword from "../modals/ForgotPassword";
import BackgroundFaceScan from "../modals/BackgroundFaceScan";
import Success from "../modals/Success";
import Failed from "../modals/Failed";

const LoginScreen = () => {
  // checkbox logic also not implemented yet
  const [rememberMe, setRememberMe] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  // handle forgot password
  const [visible, setvisible] = useState(false);

  const [onclose, setOnclose] = useState(false);

  const getItClosed = () => {
    setvisible(false);
  };

  // handle face scanning and detection background success and failed
  const [faceScanVisible, setFaceScanVisible] = useState(false);
  const [successVerified, setSuccessVerified] = useState(false);
  const [failedVer, setfailVer] = useState(false);

  // stop scan
  const closeFaceScan = () => {
    setFaceScanVisible(false);
  };
  // sleep here
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  // start scan
  const startScan = async () => {
    // l
    setFaceScanVisible(true);
    await sleep(7000);
    setFaceScanVisible(false);
    succedded();
  };

  // success
  const succedded = () => {
    setSuccessVerified(true);
  };

  // failed
  const faileded = () => {
    setfailVer(true);
  };
  const handleLoginButton = () => {
    /*
    implement firebase logic here
    to authorise user ones everything set 
    then continue with face scan 
    */
    if (!faceScanVisible) {
      startScan();
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
      >
        <StatusBar backgroundColor={Color.colorDarkslateblue_200} />
        <View style={styles.splashScreen}>
          <View
            style={{
              top: "10%",
              position: "absolute",
              left: "33%",
            }}
          >
            <Image
              style={[styles.splashScreenChild]}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
          </View>
          <View
            //
            style={{
              top: hp("23%"),
              left: wp("20%"),
            }}
          >
            <Text style={styles.welcomeToUnionpay}>Welcome to UnionPay</Text>
          </View>
          <View
            /// dont have and sign up
            style={{
              flexDirection: "row",
              width: "100%",
              position: "absolute",
              top: hp("33%"),
              left: wp("20%"),
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily.interRegular,
                fontSize: 15,
                color: Color.colorDarkslateblue_200,
              }}
            >
              Don't have an account?
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  left: 4,
                  fontFamily: FontFamily.interExtraBold,
                  color: Color.colorDarkslateblue_200,
                }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              top: "40%",
              flex: 1,
              position: "absolute",
              width: "100%",
              left: "3%",
            }}
          >
            <TextInput
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="Enter
            Your
            Email"
              style={{
                left: "7%",
                borderColor: Color.colorGray_200,
                borderWidth: 1,
                width: "75%",
                height: 46,
                borderRadius: Border.br_3xs,
                padding: 10,
                backgroundColor: "#c5c6c7",
              }}
            ></TextInput>

            <TextInput
              placeholder="Enter Your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={{
                left: "7%",
                borderColor: Color.colorGray_200,
                borderWidth: 1,
                width: "75%",
                height: 46,
                borderRadius: Border.br_3xs,
                padding: 10,
                top: "15%",
              }}
            ></TextInput>
          </View>

          <View
            style={{
              top: hp("56.5%"),
              left: wp("3%"),
              width: wp("46%"),
              position: "absolute",
              flexDirection: "row",
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
              top: hp("56.5%"),
              left: wp("58%"),
              width: wp("46%"),
              backgroundColor: "transparent",
              position: "absolute",
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
          <Success
            // onclose should navigate to dashboard
            //
            isVisible={successVerified}
            onClose={() => setSuccessVerified(false)}
            messagebox={"Face recognized! You're in"}
          />
          <Failed
            messagebox={"Authentication failed. Please retry again"}
            isVisible={failedVer}
            onClose={() => setfailVer(false)}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  checkboxText: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "bold",
    color: Color.colorDarkslateblue_100,
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
    top: hp("70%"),
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
    width: wp("30%"),
    height: hp("15%"),
  },
  welcomeToUnionpay: {
    fontSize: FontSize.size_5xl,
    color: Color.colorDarkslateblue_200,
    fontWeight: "bold",
  },
  dontHaveAnTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  dontHaveAnAccountSignUp: {
    fontSize: FontSize.size_sm,
    position: "relative",
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
    left: "25%",
    color: "rgba(0, 0, 0, 0.9)",
    width: "75%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    padding: 10,
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
    padding: 10,
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
    width: "100%",
    height: hp("100%"),
    backgroundColor: Color.lightPrimaryKeyBackground,
    paddingTop: Constants.statusBarHeight,
  },
});

export default LoginScreen;
