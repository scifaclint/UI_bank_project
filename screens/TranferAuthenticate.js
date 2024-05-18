import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const TranferAuthenticate = () => {
  return (
    <View style={styles.tranferAuthenticate}>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group3.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text
          style={[styles.destinationBank, styles.bankFlexBox]}
        >{`Destination Bank `}</Text>
      </View>
      <View style={styles.youAreAboutToSendN6000TParent}>
        <Text
          style={[styles.youAreAbout, styles.youAreAboutTypo]}
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
            style={[styles.groupInner, styles.groupInnerLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-6462.png")}
          />
        </View>
        <View style={[styles.koredeOjoParent, styles.parentLayout]}>
          <Text style={[styles.koredeOjo, styles.bankFlexBox]}>Korede Ojo</Text>
          <View style={[styles.neoBankParent, styles.parentLayout]}>
            <Text style={[styles.neoBank, styles.bankFlexBox]}>NEO BANK</Text>
            <Text style={[styles.text, styles.textPosition]}>0102034749</Text>
          </View>
        </View>
        <View style={[styles.n50000Parent, styles.groupInnerLayout]}>
          <Text style={[styles.n50000, styles.bankFlexBox]}>500.00</Text>
          <View style={styles.n2500Parent}>
            <Text style={[styles.n2500, styles.feeTypo]}>25.00</Text>
            <Text style={[styles.fee, styles.feeTypo]}>fee</Text>
          </View>
        </View>
        <Text
          style={[styles.youWillBe, styles.bankFlexBox]}
        >{`You will be charged a transaction fee of N25.00 `}</Text>
        <View style={[styles.finish, styles.textPosition]}>
          <Text
            style={[styles.proceed, styles.textPosition]}
          >{`Proceed `}</Text>
        </View>
      </View>
      <Text
        style={[styles.transferPayment, styles.youAreAboutTypo]}
      >{`Transfer & Payment`}</Text>
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
  bankFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  youAreAboutTypo: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  frameChildPosition: {
    marginLeft: -178.5,
    height: 64,
    width: 348,
    left: "50%",
    position: "absolute",
  },
  groupInnerLayout: {
    height: 36,
    position: "absolute",
  },
  parentLayout: {
    width: 159,
    position: "absolute",
  },
  textPosition: {
    top: "50%",
    position: "absolute",
  },
  feeTypo: {
    fontSize: FontSize.size_4xs,
    color: Color.colorDarkslateblue_500,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    top: 0,
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
    color: Color.colorDarkslateblue_400,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  rectangleParent: {
    marginLeft: -173.5,
    top: 108,
    height: 89,
    width: 348,
    left: "50%",
    position: "absolute",
  },
  youAreAbout: {
    top: 16,
    left: 20,
    color: Color.colorDarkslateblue_500,
    fontSize: FontSize.size_sm,
  },
  phxBoldIcon: {
    top: 18,
    left: 348,
    width: 17,
    height: 17,
    overflow: "hidden",
    position: "absolute",
  },
  frameChild: {
    top: 110,
    backgroundColor: Color.colorWhitesmoke_200,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_300,
    borderStyle: "solid",
    marginLeft: -178.5,
    borderRadius: Border.br_3xs,
  },
  groupItem: {
    top: 0,
  },
  groupInner: {
    top: 14,
    left: 16,
    width: 34,
  },
  rectangleGroup: {
    top: 66,
  },
  koredeOjo: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslateblue_400,
    left: 0,
    top: 0,
  },
  neoBank: {
    color: Color.colorDarkslateblue_500,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
    top: 0,
  },
  text: {
    left: 77,
    marginTop: -10.5,
    top: "50%",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorDarkslateblue_500,
    fontFamily: FontFamily.poppinsRegular,
  },
  neoBankParent: {
    top: 21,
    height: 21,
    left: 0,
  },
  koredeOjoParent: {
    top: 77,
    left: 70,
    height: 42,
  },
  n50000: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkslateblue_500,
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
  },
  n2500: {
    left: 0,
  },
  fee: {
    left: 32,
  },
  n2500Parent: {
    top: 22,
    width: 47,
    height: 14,
    left: 0,
    position: "absolute",
  },
  n50000Parent: {
    top: 80,
    left: 288,
    width: 59,
  },
  youWillBe: {
    marginLeft: -128.5,
    top: 146,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    left: "50%",
  },
  proceed: {
    marginLeft: -29,
    fontFamily: FontFamily.poppinsBold,
    color: Color.lightPrimaryKeyBackground,
    marginTop: -10.5,
    top: "50%",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontWeight: "700",
    left: "50%",
  },
  finish: {
    marginTop: 24,
    marginLeft: -147.5,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorDarkslateblue_200,
    width: 296,
    height: 51,
    left: "50%",
    overflow: "hidden",
  },
  youAreAboutToSendN6000TParent: {
    marginLeft: -187.5,
    bottom: 0,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 375,
    height: 628,
    borderRadius: Border.br_3xs,
    left: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  transferPayment: {
    marginLeft: -76.5,
    top: 58,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslateblue_400,
    left: "50%",
  },
  tranferAuthenticate: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
});

export default TranferAuthenticate;
