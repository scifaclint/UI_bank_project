import * as React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Cover = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.cover1}>
        <Text style={styles.aSecureWay}>A Secure Way to Bank</Text>
        <View style={styles.lineParent}>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <View style={[styles.frameItem, styles.frameBorder]} />
          <View style={[styles.frameInner, styles.frameBorder]} />
        </View>
        <Image
          /// Ui image here
          style={styles.illustrationIcon}
          contentFit="cover"
          source={require("../assets/illustration.png")}
        />
        <View
          style={[styles.createAnAccount, styles.loginLayout]}
          /// button here create an account
        >
          <Text style={[styles.createAnAccount1, styles.login1Typo]}>
            Create an account
          </Text>
        </View>
        <View
          style={[styles.login, styles.loginLayout]}
          /// button login (not implemented yet)
        >
          <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 1,
    borderTopWidth: 1,
  },
  frameBorder: {
    borderColor: Color.lightPrimaryKeyBackground,
    borderStyle: "solid",
  },
  loginLayout: {
    height: 51,
    width: 296,
    borderRadius: Border.br_31xl,
    position: "absolute",
    overflow: "hidden",
  },
  login1Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_sm,
    top: "50%",
    marginTop: -10.5,
    textAlign: "left",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  aSecureWay: {
    marginLeft: -136,
    top: 111,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.dMSansBold,
    width: 257,
    textAlign: "left",
    fontWeight: "700",
    color: Color.lightPrimaryKeyBackground,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    borderColor: Color.colorGray_300,
    width: 64,
    zIndex: 0,
    borderStyle: "solid",
    borderTopWidth: 1,
  },
  frameItem: {
    width: 63,
    zIndex: 1,
    marginLeft: 130,
    height: 1,
    borderTopWidth: 1,
  },
  frameInner: {
    top: 0,
    left: 95,
    width: 65,
    zIndex: 2,
    height: 1,
    borderTopWidth: 1,
    position: "absolute",
  },
  lineParent: {
    marginLeft: -128,
    top: 78,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  illustrationIcon: {
    height: "37.5%",
    width: "68.06%",
    top: "25.47%",
    right: "20.83%",
    bottom: "37.03%",
    left: "11.11%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.8,
    position: "absolute",
    overflow: "hidden",
  },
  createAnAccount1: {
    marginLeft: -67,
    color: Color.lightPrimaryKeyBackground,
    fontSize: FontSize.size_sm,
    top: "50%",
    marginTop: -10.5,
  },
  createAnAccount: {
    top: 720,
    left: 60,
    borderWidth: 2,
    borderColor: Color.lightPrimaryKeyBackground,
    borderStyle: "solid",
  },
  login1: {
    marginLeft: -19,
    color: Color.colorDarkslateblue_200,
  },
  login: {
    top: 650,
    left: 60,
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
  cover1: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorDarkslateblue_100,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Cover;
