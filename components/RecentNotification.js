import * as React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { StyleSheet, Text, View } from "react-native";

function RecentNotification({style}) {
  return (
    <View
      /*
      implement a logic where to display this box 
      and the message inside it 
      an icon for sent and icon for receive
      */

      style={[styles.mainContainer, style]}
    >
      <View style={[styles.rectangleGroup, styles.groupChild]}>
        <Image
          contentFit="cover"
          style={styles.iconlybulkarrowRight}
          source={require("../assets/iconlybulkarrow--right.png")}
        ></Image>
        <Text style={styles.n400WasSent}>Transaction notifications</Text>
        <Text style={[styles.date_tansaction, styles.airtimeLayout]}>
          Transaction date here
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  n400WasSent: {
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorDarkslateblue_300,
    fontWeight: "bold",
    lineHeight: 20,
    fontSize: 13,
    left: wp("40%"),
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroup: {
    marginTop: 7,
  },
  groupChild: {
    borderColor: Color.colorWhitesmoke_300,
    borderWidth: 1,
    borderStyle: "solid",
    left: wp("2%"),
    top: hp("2%"),
    height: 64,
    width: wp("95%"),
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
  iconlybulkarrowRight: {
    top: 26,
    left: 316,
    width: 17,
    height: 17,
    position: "absolute",
  },
  n400WasSentIntoYourAccounParent: {
    top: 15,
    left: 55,
    width: 177,
    height: 36,
    position: "absolute",
  },
  iconlybulkdownload: {
    top: "39.06%",
    right: "88.79%",
    bottom: "40.63%",
    left: "7.47%",
  },
  iconlybulkdownloadLayout: {
    width: "3.74%",
    height: "20.31%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorMistyrose,
    borderColor: Color.colorLightcoral,
  },
  groupItemLayout: {
    height: 28,
    width: 27,
    borderRadius: Border.br_81xl,
    left: 19,
    top: 17,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  date_tansaction: {
    top: 20,
    fontSize: 11,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
    fontWeight: "bold",
    left: wp("40%"),
  },
  airtimeLayout: {
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
    position: "absolute",
  },
});
export default RecentNotification;
