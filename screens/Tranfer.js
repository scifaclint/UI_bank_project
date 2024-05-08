import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Tranfer = () => {
  return (
    <View style={styles.tranfer}>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text
          style={[styles.destinationBank, styles.feeTypo]}
        >{`Destination Bank `}</Text>
        <Image
          style={styles.iconParkSoliddownC}
          contentFit="cover"
          source={require("../assets/iconparksoliddownc1.png")}
        />
      </View>
      <View style={[styles.youAreAboutToSendN6000TParent, styles.parentLayout]}>
        <Text
          style={[styles.youAreAbout, styles.feeClr]}
        >{`You are about to send N6,000 to `}</Text>
        <Image
          style={styles.phxBoldIcon}
          contentFit="cover"
          source={require("../assets/phxbold.png")}
        />
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <View style={[styles.rectangleGroup, styles.frameChildPosition]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Image
            style={[styles.groupInner, styles.groupInnerPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-646.png")}
          />
        </View>
        <View
          style={[
            styles.enterYour4DigitPinToConfParent,
            styles.groupChild1Layout,
          ]}
        >
          <Text style={[styles.enterYour4Digit, styles.groupInnerPosition]}>
            Enter your 4-digit PIN to confirm
          </Text>
          <Image
            style={[styles.groupChild1, styles.groupChild1Layout]}
            contentFit="cover"
            source={require("../assets/group-21.png")}
          />
        </View>
        <View style={[styles.koredeOjoParent, styles.parentPosition1]}>
          <Text style={[styles.koredeOjo, styles.letterTypo]}>Korede Ojo</Text>
          <View style={[styles.gtbankParent, styles.parentPosition]}>
            <Text style={[styles.gtbank, styles.feeClr]}>GTBank</Text>
            <Text style={[styles.text, styles.textPosition]}>0102034749</Text>
          </View>
        </View>
        <View style={[styles.n50000Parent, styles.parentPosition1]}>
          <Text style={[styles.n50000, styles.letterTypo]}>N500.00</Text>
          <View style={[styles.n000Parent, styles.parentPosition]}>
            <Text style={[styles.n000, styles.feeClr]}>N.000</Text>
            <Text style={[styles.fee, styles.feeClr]}>fee</Text>
          </View>
        </View>
        <View style={[styles.keypad, styles.keypadLayout]}>
          <View style={[styles.homeIndicator, styles.keypadLayout]}>
            <View style={styles.homeIndicator1} />
          </View>
          <View style={[styles.key, styles.keyLayout1]}>
            <Text style={[styles.number, styles.numberTypo]}>1</Text>
            <Text style={[styles.label, styles.labelFlexBox]} />
          </View>
          <View style={[styles.key1, styles.keyLayout]}>
            <Text style={[styles.number1, styles.numberTypo]}>7</Text>
            <Text style={[styles.label, styles.labelFlexBox]}>pqrs</Text>
          </View>
          <View style={[styles.key2, styles.keyPosition2]}>
            <Text style={[styles.number1, styles.numberTypo]}>4</Text>
            <Text style={[styles.label, styles.labelFlexBox]}>ghi</Text>
          </View>
          <View style={[styles.key3, styles.keyShadowBox]}>
            <Text style={[styles.number, styles.numberTypo]}>2</Text>
            <Text style={[styles.label, styles.labelFlexBox]}>abc</Text>
          </View>
          <View style={[styles.key4, styles.keyShadowBox]}>
            <Text style={[styles.number1, styles.numberTypo]}>8</Text>
            <Text style={[styles.label, styles.labelFlexBox]}>tuv</Text>
          </View>
          <View style={[styles.key5, styles.keyPosition1]}>
            <Text style={[styles.letter, styles.letterFlexBox]}>0</Text>
            <Image
              style={[styles.icon, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
          </View>
          <View style={[styles.key6, styles.iconPosition1]}>
            <Text style={[styles.letter1, styles.letterFlexBox]}>+*#</Text>
            <Image
              style={[styles.icon, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
          </View>
          <View style={[styles.key7, styles.keyPosition]}>
            <Text style={[styles.letter2, styles.iconPosition1]}>+*#</Text>
            <Image
              style={[styles.icon2, styles.iconPosition2]}
              contentFit="cover"
              source={require("../assets/icon1.png")}
            />
          </View>
          <View style={[styles.key8, styles.keyShadowBox]}>
            <Text style={[styles.number1, styles.numberTypo]}>5</Text>
            <Text style={[styles.label, styles.labelFlexBox]}>jkl</Text>
          </View>
          <View style={[styles.key9, styles.keyPosition]}>
            <Text style={[styles.number, styles.numberTypo]}>3</Text>
            <Text style={[styles.label, styles.labelFlexBox]}>def</Text>
          </View>
          <View style={[styles.key10, styles.keyPosition]}>
            <Text style={[styles.number1, styles.numberTypo]}>9</Text>
            <Text style={[styles.label, styles.labelFlexBox]}>wxyz</Text>
          </View>
          <View style={[styles.key11, styles.keyPosition]}>
            <Text style={[styles.number1, styles.numberTypo]}>6</Text>
            <Text style={[styles.label, styles.labelFlexBox]}>mno</Text>
          </View>
        </View>
        <Text
          style={[styles.youWillBe, styles.feeTypo]}
        >{`You will be charged a transaction fee of N25.00 `}</Text>
        <View style={[styles.smallColoredDotsParent, styles.parentLayout]}>
          <Image
            style={[styles.smallColoredDots, styles.keypadLayout]}
            contentFit="cover"
            source={require("../assets/small-colored-dots.png")}
          />
          <Image
            style={styles.phxBoldIcon}
            contentFit="cover"
            source={require("../assets/phxbold.png")}
          />
          <Text style={[styles.successful, styles.successfulTypo]}>
            Successful
          </Text>
          <Text
            style={[styles.yourTransactionIs, styles.labelFlexBox]}
          >{`Your transaction is has been processed.
Thank you for choosing NEO`}</Text>
          <View style={styles.done}>
            <Text style={[styles.withdrawal, styles.text1Typo]}>Done</Text>
          </View>
        </View>
      </View>
      <Text
        style={[styles.transferPayment, styles.successfulTypo]}
      >{`Transfer & Payment`}</Text>
      <View style={[styles.statusBar, styles.keypadLayout]}>
        <Image
          style={[styles.batteryIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={[styles.wifiIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.cellularConnectionIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <Text style={[styles.text1, styles.text1Typo]}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 64,
    marginLeft: -174,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_300,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    width: 348,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
  feeTypo: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  parentLayout: {
    height: 628,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 375,
    marginLeft: -187.5,
    borderRadius: Border.br_3xs,
    left: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  feeClr: {
    color: Color.colorDarkslateblue_500,
    textAlign: "left",
  },
  frameChildPosition: {
    marginLeft: -178.5,
    height: 64,
    width: 348,
    left: "50%",
    position: "absolute",
  },
  groupInnerPosition: {
    left: 10,
    position: "absolute",
  },
  groupChild1Layout: {
    width: 195,
    position: "absolute",
  },
  parentPosition1: {
    top: 75,
    position: "absolute",
  },
  letterTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  parentPosition: {
    top: 28,
    left: 0,
    position: "absolute",
  },
  textPosition: {
    marginTop: -10.5,
    top: "50%",
    fontSize: FontSize.size_sm,
  },
  keypadLayout: {
    width: 375,
    position: "absolute",
  },
  keyLayout1: {
    height: 46,
    top: 6,
  },
  numberTypo: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    fontSize: FontSize.textRegularLowercase_size,
    display: "flex",
    textAlign: "center",
    color: Color.lightText,
    width: 117,
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
    position: "absolute",
  },
  labelFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  keyLayout: {
    height: 47,
    top: 113,
  },
  keyPosition2: {
    top: 59,
    height: 47,
  },
  keyShadowBox: {
    left: 129,
    width: 117,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    position: "absolute",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
  keyPosition1: {
    top: 167,
    height: 46,
  },
  letterFlexBox: {
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.lightText,
    fontSize: FontSize.textRegularLowercase_size,
    width: 117,
    top: "50%",
    left: 0,
  },
  iconPosition1: {
    display: "none",
    position: "absolute",
  },
  keyPosition: {
    left: 252,
    width: 117,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  iconPosition2: {
    height: 32,
    width: 32,
    marginLeft: -15.5,
    marginTop: -16,
    top: "50%",
    left: "50%",
    overflow: "hidden",
  },
  successfulTypo: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
    left: "50%",
    position: "absolute",
  },
  text1Typo: {
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 11,
    position: "absolute",
  },
  groupIcon: {
    height: "100.74%",
    top: "0%",
    right: "0%",
    bottom: "-0.74%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.15,
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  groupChild: {
    top: 25,
  },
  destinationBank: {
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconParkSoliddownC: {
    top: 50,
    left: 305,
    height: 15,
    width: 15,
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -173.5,
    top: 92,
    height: 89,
    width: 348,
    left: "50%",
    position: "absolute",
  },
  youAreAbout: {
    top: 20,
    left: 20,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  phxBoldIcon: {
    top: 22,
    left: 348,
    height: 17,
    width: 17,
    overflow: "hidden",
    position: "absolute",
  },
  frameChild: {
    top: 110,
    backgroundColor: Color.colorWhitesmoke_200,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_300,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    marginLeft: -178.5,
  },
  groupItem: {
    top: 0,
  },
  groupInner: {
    top: 14,
    width: 34,
    height: 36,
  },
  rectangleGroup: {
    top: 66,
  },
  enterYour4Digit: {
    color: Color.colorDarkslateblue_500,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    top: 0,
  },
  groupChild1: {
    top: 37,
    height: 40,
    left: 0,
  },
  enterYour4DigitPinToConfParent: {
    left: 90,
    height: 77,
    top: 257,
  },
  koredeOjo: {
    fontSize: FontSize.size_sm,
    position: "absolute",
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
    left: 0,
    top: 0,
  },
  gtbank: {
    fontSize: FontSize.size_sm,
    position: "absolute",
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
    top: 0,
  },
  text: {
    left: 78,
    top: "50%",
    color: Color.colorDarkslateblue_500,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  gtbankParent: {
    height: 21,
    width: 160,
  },
  koredeOjoParent: {
    left: 64,
    height: 49,
    width: 160,
  },
  n50000: {
    color: Color.colorDarkslateblue_500,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
    left: 0,
    top: 0,
  },
  n000: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  fee: {
    left: 36,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    top: 0,
    position: "absolute",
  },
  n000Parent: {
    width: 54,
    height: 17,
  },
  n50000Parent: {
    left: 288,
    width: 59,
    height: 45,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightText,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    height: 34,
    top: 257,
    left: 0,
  },
  number: {
    marginTop: -22,
  },
  label: {
    bottom: 2,
    fontSize: FontSize.textSublabel_size,
    letterSpacing: 2,
    color: Color.lightText,
    textAlign: "center",
    width: 117,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
  },
  key: {
    width: 117,
    borderRadius: Border.br_8xs,
    left: 6,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Color.lightPrimaryKeyBackground,
    position: "absolute",
  },
  number1: {
    marginTop: -21.5,
  },
  key1: {
    width: 117,
    borderRadius: Border.br_8xs,
    left: 6,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Color.lightPrimaryKeyBackground,
    position: "absolute",
  },
  key2: {
    width: 117,
    borderRadius: Border.br_8xs,
    left: 6,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Color.lightPrimaryKeyBackground,
    position: "absolute",
  },
  key3: {
    height: 46,
    top: 6,
  },
  key4: {
    height: 47,
    top: 113,
  },
  letter: {
    marginTop: -20,
    display: "flex",
    height: 41,
    position: "absolute",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  icon: {
    height: 32,
    width: 32,
    marginLeft: -15.5,
    marginTop: -16,
    top: "50%",
    left: "50%",
    overflow: "hidden",
  },
  key5: {
    left: 129,
    width: 117,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    position: "absolute",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
  letter1: {
    fontFamily: FontFamily.textRegularLowercase,
    display: "flex",
    height: 41,
    position: "absolute",
    marginTop: -22,
  },
  key6: {
    top: 167,
    height: 46,
    width: 117,
    borderRadius: Border.br_8xs,
    left: 6,
  },
  letter2: {
    textTransform: "lowercase",
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.lightText,
    fontSize: FontSize.textRegularLowercase_size,
    width: 117,
    top: "50%",
    left: 0,
    marginTop: -22,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  icon2: {
    position: "absolute",
  },
  key7: {
    top: 167,
    height: 46,
  },
  key8: {
    top: 59,
    height: 47,
  },
  key9: {
    height: 46,
    top: 6,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
  key10: {
    height: 47,
    top: 113,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
  key11: {
    top: 59,
    height: 47,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
  keypad: {
    bottom: 0,
    height: 220,
    marginLeft: -187.5,
    width: 375,
    left: "50%",
    overflow: "hidden",
  },
  youWillBe: {
    marginLeft: -128.5,
    top: 148,
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  smallColoredDots: {
    marginTop: -320,
    height: 491,
    top: "50%",
    marginLeft: -187.5,
    width: 375,
    left: "50%",
  },
  successful: {
    marginTop: -44,
    marginLeft: -84.5,
    fontSize: 32,
    top: "50%",
  },
  yourTransactionIs: {
    marginTop: 14,
    marginLeft: -121.5,
    width: 244,
    top: "50%",
    color: Color.colorDarkslateblue_400,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    left: "50%",
  },
  withdrawal: {
    marginLeft: -19,
    fontFamily: FontFamily.poppinsBold,
    color: Color.lightPrimaryKeyBackground,
    top: "50%",
    marginTop: -10.5,
    fontSize: FontSize.size_sm,
    left: "50%",
  },
  done: {
    marginLeft: -147.5,
    top: 419,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorDarkslateblue_200,
    width: 296,
    height: 51,
    left: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  smallColoredDotsParent: {
    marginTop: -314,
    top: "50%",
  },
  youAreAboutToSendN6000TParent: {
    bottom: 9,
  },
  transferPayment: {
    marginLeft: -76.5,
    top: 58,
    fontSize: FontSize.size_base,
  },
  batteryIcon: {
    right: 15,
    width: 24,
    top: 17,
    height: 11,
  },
  wifiIcon: {
    right: 44,
    top: 17,
    height: 11,
    width: 15,
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
    color: Color.colorDarkslateblue_600,
  },
  statusBar: {
    top: -2,
    height: 44,
    left: 0,
    overflow: "hidden",
  },
  tranfer: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
});

export default Tranfer;
