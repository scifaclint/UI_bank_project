import * as React from "react";
import Yup from "yup";
import { Formik } from "formik";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const CreateAnAccount = () => {
  return (
    <View style={styles.createAnAccount}>
      <View
        style={[styles.createANewAccountParent, styles.upperedge]}
        ///container upper edge
      >
        <Text style={[styles.createANew, styles.textTypo]}>
          Create a new account
        </Text>
        <Text style={[styles.text, styles.textTypo]}>1/3</Text>
      </View>
      <View
      // container enter your details
      >
        <Text style={styles.enterYourDetails}>
          Enter your details to get started
        </Text>
      </View>
      <Formik
        // implementing create an account forms
        initialValues={{
          firstName: "",
          lastName: "",
          emailAddress: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <KeyboardAvoidingView
            behavior='padding' style={{ flex: 1 }}
            >
              <ScrollView keyboardShouldPersistTaps="handled"
              style={{flexGrow:1}}
              >
                <View
                  style={{
                    alignItems: "center",
                    top: hp("10%"),
                    width: wp("100%"),
                    height: hp("100%"),
                    overflow: "hidden",
                  }}
                >
                  <Text
                    style={{
                      top: hp("6%"),
                      left: "10%",
                      position: "absolute",
                      ...styles.textstyling,
                    }}
                  >
                    First Name
                  </Text>
                  <TextInput
                    placeholder="First Name"
                    paddingLeft={wp("5%")}
                    style={styles.firstName}
                  ></TextInput>
                  <Text
                    style={{
                      top: hp("17%"),
                      left: "10%",
                      position: "absolute",
                      ...styles.textstyling,
                    }}
                  >
                    Last Name
                  </Text>
                  <TextInput
                    placeholder="Last Name"
                    paddingLeft={wp("5%")}
                    style={styles.lastName}
                  ></TextInput>
                  <Text
                    style={{
                      top: hp("27%"),
                      left: "10%",
                      position: "absolute",
                      ...styles.textstyling,
                    }}
                  >
                    Email adress
                  </Text>
                  <TextInput
                    placeholder="Email address"
                    paddingLeft={wp("5%")}
                    style={styles.emailAddress}
                  ></TextInput>
                  <Text
                    style={{
                      top: hp("37%"),
                      left: "10%",
                      position: "absolute",
                      ...styles.textstyling,
                    }}
                  >
                    Phone number
                  </Text>
                  <TextInput
                    placeholder="Phone number"
                    paddingLeft={wp("5%")}
                    style={styles.phoneNumber}
                  ></TextInput>
                  <Text
                    style={{
                      top: hp("48%"),
                      left: "10%",
                      position: "absolute",
                      ...styles.textstyling,
                    }}
                  >
                    Password
                  </Text>
                  <TextInput
                    placeholder="password"
                    paddingLeft={wp("5%")}
                    secureTextEntry
                    style={styles.password}
                  ></TextInput>
                  <Text
                    style={{
                      top: hp("59%"),
                      left: "10%",
                      position: "absolute",
                      ...styles.textstyling,
                    }}
                  >
                    Confirm password
                  </Text>
                  <TextInput
                    placeholder="password"
                    paddingLeft={wp("5%")}
                    secureTextEntry
                    style={styles.conf_password}
                  ></TextInput>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  nameLayout: {
    width: 303,
    height: 499,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    height: hp("100%"),
  },

  textPlaceholder: {
    color: Color.colorWhitesmoke_200,
    fontFamily: FontFamily.poppinsLight,
    fontSize: FontSize.size_xs_9,
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
  lastName: {
    top: hp("20%"),
    width: wp("80%"),
    height: wp("12%"),
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderRadius: 12,
    backgroundColor: Color.lightPrimaryKeyBackground,
    left: wp("9.5%"),
    position: "absolute",
  },
  textstyling: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "bold",
    color: Color.colorDarkslateblue_600,
  },
  phoneNumber: {
    top: hp("40%"),
    width: wp("80%"),
    height: wp("12%"),
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderRadius: 12,
    backgroundColor: Color.lightPrimaryKeyBackground,
    left: wp("9.5%"),
    position: "absolute",
  },
  password: {
    top: hp("52%"),
    width: wp("80%"),
    height: wp("12%"),
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderRadius: 12,
    backgroundColor: Color.lightPrimaryKeyBackground,
    left: wp("9.5%"),
    position: "absolute",
  },
  conf_password: {
    top: hp("64%"),
    width: wp("80%"),
    height: wp("12%"),
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderRadius: 12,
    backgroundColor: Color.lightPrimaryKeyBackground,
    left: wp("9.5%"),
    position: "absolute",
  },
  emailAddress: {
    top: hp("30%"),
    width: wp("80%"),
    height: wp("12%"),
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderRadius: 12,
    backgroundColor: Color.lightPrimaryKeyBackground,
    left: wp("9.5%"),
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

  upperedge: {
    height: hp("10%"),
    width: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },

  enterYourDetails: {
    fontSize: 18,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    width: wp("100%"),
    left: wp("19%"),
    top: hp("13%"),
    position: "relative",
    paddingBottom: hp("3%"),
    overflow: "hidden",
  },

  firstName: {
    top: hp("10%"),
    height: wp("12%"),
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderRadius: 12,
    width: wp("80%"),
    backgroundColor: Color.lightPrimaryKeyBackground,
    left: wp("9.5%"),

    position: "absolute",
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

  createAnAccount: {
    flex: 1,
    overflow: "hidden",
    width: wp("100%"),
    height: hp("100%"),
    backgroundColor: Color.lightPrimaryKeyBackground,
    // main container had a height
  },
});

export default CreateAnAccount;
