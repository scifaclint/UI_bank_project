/*
// text input first name 
     <View
        style={[styles.firstName, styles.nameLayout]}
        /// box container
      >
        <TextInput
          placeholder="first name"
          /// would work on text input handling from here
          style={[
            styles.firstName1,
            styles.firstName1Typo,
            styles.textPlaceholder,
          ]}
          /// highlighted first name ( text box)//implementing text input
        ></TextInput>
      </View>

     others
     




     images 





     create account styles button 
      <View
        style={[styles.login2, styles.login2Bg]}
        /// button create account
      >
        <Text style={[styles.login, styles.textTypo]}>Create an Account</Text>
      </View>

      styles
 login2Bg: {
    backgroundColor: Color.colorDarkslateblue_200,
    position: "absolute",
  },

  styles 2 container 
   login2: {
    top: 703,
    borderRadius: Border.br_31xl,
    width: 304,
    height: 48,
    left: "40%",
    marginLeft: -151.5,
    backgroundColor: Color.colorDarkslateblue_200,
    overflow: "hidden",



    png images 
     source={require("../assets/flags.png")}
   source={require("../assets/frame-2.png")}
    source={require("../assets/vector3.png")}



     /////////////////////////// combined
     const styles = StyleSheet.create({
  nameLayout: {
    width: 303,
    height: 499,
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
  upperedge: {
    height: hp("10%"),
    width: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },

  framePosition: {
    height: "30%",
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
    fontSize: 18,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    width: wp("100%"),
    left: wp("19%"),
    top: hp("13%"),
    position: "relative",
  },
  firstName1: {
    marginLeft: -127.65,
    marginTop: -8.65,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs_9,
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
    marginLeft: -149.5,
    left: wp("40%"),
    position: "absolute",
  },

  firstName2: {
    top: 163,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 38,
    position: "absolute",
  },
 
  textPlaceholder: {
    width: "100%",
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
    position: "relative",
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
    overflow: "hidden",
    width: wp("100%"),
    height: hp("100%"),
    backgroundColor: Color.lightPrimaryKeyBackground,
    // main container had a height
  },
});

export default CreateAnAccount;

*/ */