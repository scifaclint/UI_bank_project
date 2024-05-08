import * as React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const CreateAnAccount = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.createAnAccount}>
        <Text
          style={styles.enterYourDetails}
        >{`Enter your details to get started `}</Text>
        <View
          style={[styles.firstName, styles.nameLayout]}
          /// box container
        >
          <Text
            style={[styles.firstName1, styles.firstName1Typo]}
            /// highlighted first name ( text box)
          >
            First name
          </Text>
        </View>
        <Text style={[styles.firstName2, styles.nameTypo]}>First name</Text>
        <Text style={[styles.lastName, styles.nameTypo]}>Last name</Text>
        <View style={[styles.lastName1, styles.nameLayout]}>
          <Text
            style={[styles.firstName1, styles.firstName1Typo]}
            /// highlighted name "last name"
          >
            Last name
          </Text>
        </View>
        <Text
          style={[styles.emailAddress, styles.nameTypo]}
          /// container email address
        >
          Email address
        </Text>
        <View style={[styles.emailAddress1, styles.nameLayout]}>
          <Text style={[styles.firstName1, styles.firstName1Typo]}>
            Email address
          </Text>
        </View>
        <Text style={[styles.phoneNumber, styles.nameTypo]}>Phone number</Text>
        <Text style={[styles.enterReferralCode, styles.nameTypo]}>
          Enter referral code
        </Text>
        <View style={[styles.referral, styles.namePosition]}>
          <Text style={[styles.referralCodeOptional, styles.firstName1Typo]}>
            Referral Code (Optional)
          </Text>
        </View>
        <View
          style={[styles.login2, styles.login2Bg]}
          /// button create account
        >
          <Text style={[styles.login, styles.textTypo]}>Create an Account</Text>
        </View>
        <View style={styles.framePosition} />
        <View style={[styles.frame1, styles.namePosition]} />
        <View style={styles.frame2} />
        <View style={[styles.frame3, styles.frame3Position]} />
        <View style={styles.framePosition} />
        <View style={[styles.frame1, styles.namePosition]} />
        <View style={styles.frame2} />
        <View style={[styles.frame3, styles.frame3Position]} />
        <View style={styles.framePosition}>
          <View
            style={[styles.createANewAccountParent, styles.framePosition]}
            ///container upper edge
          >
            <Text style={[styles.createANew, styles.textTypo]}>
              Create a new account
            </Text>
            <Text style={[styles.text, styles.textTypo]}>1/3</Text>
          </View>

          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
        </View>
        <View style={[styles.frame1, styles.namePosition]}>
          <View style={[styles.phoneNumber1, styles.nameLayout]}>
            <Text style={[styles.phoneNumber2, styles.firstName1Typo]}>
              Phone number
            </Text>
            <Image
              style={[styles.phoneNumberChild, styles.checkboxIconPosition]}
              contentFit="cover"
              source={require("../assets/frame-2.png")}
            />
          </View>
          <Image
            style={styles.flagsIcon}
            contentFit="cover"
            source={require("../assets/flags.png")}
          />
        </View>
        <View style={styles.frame2}>
          <Image
            /// checkbox to accept terms and condition
            style={[styles.checkboxIcon, styles.checkboxIconPosition]}
            contentFit="cover"
            source={require("../assets/checkbox.png")}
          />
          <Text style={styles.iAgreeToContainer}>
            <Text style={styles.nameTypo1}>
              <Text style={styles.iAgreeTo}>I agree to Neo’s</Text>
              <Text style={styles.text2}>{` `}</Text>
            </Text>
            <Text style={styles.text2}>
              <Text style={[styles.privacy1, styles.login1Typo]}>privacy</Text>
              <Text style={styles.nameTypo1}>{` `}</Text>
            </Text>
            <Text style={styles.nameTypo1}>
              <Text style={styles.iAgreeTo}>and</Text>
            </Text>
            <Text
              style={[styles.termsOfUse, styles.login1Typo]}
            >{` terms of use 
`}</Text>
            <Text style={[styles.byClickingCreate, styles.nameTypo1]}>
              by clicking “Create an Account “
            </Text>
          </Text>
        </View>
        <View style={[styles.frame3, styles.frame3Position]}>
          <Text style={[styles.alreadyHaveAn, styles.nameTypo]}>
            Already have an account?
          </Text>
          <View
            style={styles.loginWrapper}
            /// text button here (login)
          >
            <Text style={[styles.login1, styles.nameTypo, styles.Logintextpos]}>
              Login
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nameLayout: {
    width: 303,
    height: 47,
    overflow: "hidden",
  },
  firstName1Typo: {
    color: Color.colorWhitesmoke_200,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs_9,
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  nameTypo: {
    color: Color.colorDarkslateblue_600,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  namePosition: {
    left: 38,
    position: "absolute",
  },
  login2Bg: {
    backgroundColor: Color.colorDarkslateblue_200,
    position: "absolute",
  },
  textTypo: {
    color: Color.lightPrimaryKeyBackground,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  frame3Position: {
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    height: 84,
    width: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 11,
    position: "absolute",
  },
  checkboxIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  login1Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  nameTypo1: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  loginPosition: {
    top: "50%",
    left: "50%",
  },
  enterYourDetails: {
    marginTop: -290,
    fontSize: 18,
    color: Color.colorDarkslateblue_100,
    width: 317,
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    marginLeft: -151.5,
    position: "absolute",
  },
  firstName1: {
    marginLeft: -127.65,
    marginTop: -8.65,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs_9,
  },
  firstName: {
    top: 189,
    height: 47,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderRadius: 12,
    width: 303,
    backgroundColor: Color.lightPrimaryKeyBackground,
    marginLeft: -149.5,
    left: "40%",
    position: "absolute",
  },
  firstName2: {
    top: 163,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 38,
    position: "absolute",
  },
  lastName: {
    top: 253,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 38,
    position: "absolute",
  },
  lastName1: {
    top: 279,
    height: 47,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderRadius: 12,
    width: 303,
    backgroundColor: Color.lightPrimaryKeyBackground,
    marginLeft: -149.5,
    left: "40%",
    position: "absolute",
  },
  emailAddress: {
    top: 342,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 38,
    position: "absolute",
  },
  emailAddress1: {
    top: 368,
    height: 47,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderRadius: 12,
    width: 303,
    backgroundColor: Color.lightPrimaryKeyBackground,
    marginLeft: -149.5,
    left: "40%",
    position: "absolute",
  },
  phoneNumber: {
    top: 431,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 38,
    position: "absolute",
  },
  enterReferralCode: {
    top: 521,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 38,
    position: "absolute",
  },
  referralCodeOptional: {
    marginTop: -8.6,
    marginLeft: -127.6,
  },
  referral: {
    top: 547,
    height: 47,
    width: 303,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderRadius: 12,
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
  login: {
    marginTop: -10,
    marginLeft: -67,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_sm,
    color: Color.lightPrimaryKeyBackground,
    left: "50%",
    top: "50%",
  },
  login2: {
    top: 703,
    borderRadius: Border.br_31xl,
    width: 304,
    height: 48,
    left: "40%",
    marginLeft: -151.5,
    backgroundColor: Color.colorDarkslateblue_200,
    overflow: "hidden",
  },
  frame1: {
    top: 457,
    height: 47,
    width: 303,
    overflow: "hidden",
  },
  frame2: {
    top: 642,
    left: 39,
    width: 294,
    height: 37,
    position: "absolute",
    overflow: "hidden",
  },
  frame3: {
    top: 754,
    height: 59,
  },
  createANew: {
    marginTop: 10,
    marginLeft: -75.5,
    fontSize: 14,
    fontFamily: FontFamily.dMSansBold,
    color: Color.lightPrimaryKeyBackground,
    left: "50%",
    top: "50%",
  },
  text: {
    top: 52,
    left: 333,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_sm,
    color: Color.lightPrimaryKeyBackground,
  },
  createANewAccountParent: {
    backgroundColor: Color.colorDarkslateblue_600,
  },
  batteryIcon: {
    right: 15,
    width: 24,
    top: 17,
    height: 11,
  },
  wifiIcon: {
    right: 44,
    width: 15,
    top: 17,
    height: 11,
  },
  cellularConnectionIcon: {
    top: 18,
    right: 64,
    width: 17,
  },
  text1: {
    top: 16,
    left: 22,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.textSublabel,
  },
  statusBar: {
    height: 44,
    top: 0,
  },
  vectorIcon: {
    top: 53,
    left: 19,
    width: 18,
    height: 16,
    position: "absolute",
  },
  phoneNumber2: {
    marginLeft: -80.25,
    marginTop: -8.65,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs_9,
  },
  Logintextpos: {
    position: "absolute",
    left: "50%",
  },
  phoneNumberChild: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    width: 52,
    display: "none",
    height: 47,
  },
  phoneNumber1: {
    marginLeft: -151.55,
    top: 0,
    height: 47,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderRadius: 12,
    width: 303,
    backgroundColor: Color.lightPrimaryKeyBackground,
    left: "50%",
    position: "absolute",
  },
  flagsIcon: {
    top: 15,
    left: 15,
    width: 27,
    height: 17,
    position: "absolute",
    overflow: "hidden",
  },
  checkboxIcon: {
    width: 33,
    height: 33,
  },
  iAgreeTo: {
    color: Color.colorSilver,
  },
  text2: {
    color: Color.colorDarkslateblue_200,
  },
  privacy1: {
    fontFamily: FontFamily.poppinsBold,
  },
  termsOfUse: {
    color: Color.colorDarkslateblue_200,
    fontFamily: FontFamily.poppinsBold,
  },
  byClickingCreate: {
    color: Color.colorSilver,
  },
  iAgreeToContainer: {
    top: 1,
    left: 41,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  alreadyHaveAn: {
    marginLeft: -96.5,
    top: 40,
    fontFamily: FontFamily.poppinsRegular,
    left: "40%",
    position: "absolute",
  },
  login1: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
    top: 40,
    left: 20,
  },
  loginWrapper: {
    left: 243,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
    top: 0,
    position: "absolute",
  },
  createAnAccount: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
});

export default CreateAnAccount;
