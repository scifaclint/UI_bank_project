import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { StatusBar } from "expo-status-bar";
const WelcomeBack = () => {
  return (
    <View style={styles.welcomeBack}>
      <StatusBar backgroundColor={Color.colorDarkslateblue_200} />
      <Image
        style={styles.welcomeBackChild}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Text style={[styles.welcomeBackClintonContainer, styles.loginFlexBox]}>
        <Text
          style={[styles.welcomeBackClinton, styles.loginTypo]}
        >{`Welcome back, Clinton
`}</Text>
        <Text style={styles.notYourAccountLogout}>
          <Text style={styles.notYourAccountTypo}>{`
Not your account? `}</Text>
          <Text style={styles.loginTypo}>Logout</Text>
        </Text>
      </Text>
      <View style={styles.password} />
      <Text style={[styles.password1, styles.passwordTypo]}>Password</Text>
      <Image
        style={styles.viewHidePass}
        contentFit="cover"
        source={require("../assets/view-hide-pass.png")}
      />
      <Text style={[styles.forgotPassword, styles.passwordTypo]}>
        {" "}
        Forgot Password?
      </Text>
      <View style={[styles.welcomeBackItem, styles.faceIdAuthenBg]} />
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <View style={[styles.faceIdAuthen, styles.faceIdAuthenBg]}>
        <Image
          style={styles.iconssystem24faceidglyph}
          contentFit="cover"
          source={require("../assets/iconssystem24faceidglyph.png")}
        />
      </View>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.contactUs, styles.passwordTypo]}>Contact Us</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  passwordTypo: {
    color: Color.lightText,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  faceIdAuthenBg: {
    backgroundColor: Color.colorDarkslateblue_200,
    position: "absolute",
  },
  welcomeBackChild: {
    marginTop: -241,
    marginLeft: -56,
    top: "50%",
    width: 115,
    height: 116,
    left: "50%",
    position: "absolute",
  },
  welcomeBackClinton: {
    fontSize: FontSize.size_xl,
  },
  notYourAccountTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  notYourAccountLogout: {
    fontSize: FontSize.size_sm,
  },
  welcomeBackClintonContainer: {
    top: 209,
    left: 72,
    color: Color.colorDarkslateblue_200,
    width: 229,
    height: 78,
  },
  password: {
    top: 292,
    left: 32,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: 297,
    height: 46,
    position: "absolute",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
  password1: {
    top: 306,
    left: 58,
    width: 173,
    fontFamily: FontFamily.interRegular,
    color: Color.lightText,
  },
  viewHidePass: {
    top: 303,
    left: 294,
    width: 24,
    height: 24,
    position: "absolute",
  },
  forgotPassword: {
    top: 347,
    left: 36,
    width: 283,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  welcomeBackItem: {
    top: 374,
    left: 77,
    borderRadius: Border.br_xl,
    width: 209,
    height: 45,
  },
  login: {
    top: 388,
    left: 160,
    fontSize: FontSize.size_mini,
    letterSpacing: 0.3,
    color: Color.lightPrimaryKeyBackground,
    textAlign: "left",
    position: "absolute",
  },
  iconssystem24faceidglyph: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  faceIdAuthen: {
    marginLeft: -33,
    top: 447,
    borderRadius: 12,
    width: 63,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    height: 46,
    left: "50%",
  },
  vectorIcon: {
    height: "2.73%",
    width: "6.94%",
    top: "86.09%",
    right: "45.83%",
    bottom: "11.17%",
    left: "47.22%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  contactUs: {
    top: "89.84%",
    left: "40.28%",
    fontFamily: FontFamily.interRegular,
    color: Color.lightText,
  },
  welcomeBack: {
    borderRadius: Border.br_4xs,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
});

export default WelcomeBack;
