import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SplashScreen = () => {
  return (
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
          <Text style={styles.loginTypo1}>Sign Up</Text>
        </Text>
      </Text>
      <View style={[styles.phone, styles.phoneLayout]} />
      <Text style={[styles.enterPhoneNumber, styles.loginTypo]}>
        Enter Phone Number
      </Text>
      <Image
        style={styles.flagsIcon}
        contentFit="cover"
        source={require("../assets/flags.png")}
      />
      <View style={[styles.password, styles.tickBoxBorder]} />
      <Text style={[styles.password1, styles.password1Typo]}>Password</Text>
      <Image
        style={styles.viewHidePass}
        contentFit="cover"
        source={require("../assets/view-hide-pass.png")}
      />
      <View style={[styles.tickBox, styles.tickBoxBorder]} />
      <Text style={[styles.rememberMeForgot, styles.password1Typo]}>
        Remember me Forgot Password?
      </Text>
      <View style={[styles.splashScreenItem, styles.phoneLayout]} />
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <View style={styles.contactHomeText}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.contactUs, styles.password1Typo]}>Contact Us</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phonePosition: {
    left: "50%",
    top: "50%",
  },
  loginTypo1: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  phoneLayout: {
    height: 45,
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
    width: 115,
    height: 116,
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
  },
  welcomeToUnionpayContainer: {
    top: 210,
    left: 89,
    color: Color.colorDarkslateblue_200,
    width: 229,
    height: 78,
    textAlign: "left",
    position: "absolute",
  },
  phone: {
    marginTop: 0,
    marginLeft: -148,
    backgroundColor: "#e2e1e1",
    width: 296,
    borderRadius: Border.br_3xs,
    left: "50%",
    top: "50%",
  },
  enterPhoneNumber: {
    top: 333,
    left: 95,
    color: "rgba(0, 0, 0, 0.9)",
    width: 157,
    height: 25,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  flagsIcon: {
    top: 334,
    left: 45,
    width: 27,
    height: 17,
    position: "absolute",
    overflow: "hidden",
  },
  password: {
    top: 380,
    left: 32,
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: 297,
    height: 46,
    borderRadius: Border.br_3xs,
  },
  password1: {
    top: 394,
    width: 173,
    left: 58,
    fontFamily: FontFamily.interRegular,
  },
  viewHidePass: {
    top: 391,
    left: 294,
    width: 24,
    height: 24,
    position: "absolute",
  },
  tickBox: {
    top: 457,
    left: 36,
    borderRadius: 1,
    borderColor: Color.lightText,
    borderWidth: 2,
    width: 19,
    height: 16,
  },
  rememberMeForgot: {
    top: 456,
    width: 283,
    left: 58,
    fontFamily: FontFamily.interRegular,
  },
  splashScreenItem: {
    top: 495,
    left: 85,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkslateblue_200,
    width: 209,
  },
  login: {
    top: 509,
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
    top: "24.66%",
    left: "32.85%",
  },
  contactHomeText: {
    top: 562,
    left: 112,
    width: 137,
    height: 73,
    position: "absolute",
  },
  splashScreen: {
    borderRadius: Border.br_4xs,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
});

export default SplashScreen;
