import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
/*
nb : has not imported this yet to app.js
for faceverification succefull
include some animations here 
display for some few seconds and quit to home screen 

*/
const Verified = () => {
  return (
    <View style={styles.verified}>
      <Image
        style={styles.verifiedChild}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={styles.verifiedItem}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={styles.verifiedInner}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.succesfull, styles.succesfullTypo]}>
        Verification Succesfull !
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  succesfullTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  verifiedChild: {
    top: -15,
    left: -28,
    width: wp("30%"),
    height: hp("18%"),
    position: "absolute",
  },
  verifiedItem: {
    top: -25,
    left: 45,
    width: wp("30%"),
    height: hp("13%"),
    position: "absolute",
  },
  verifiedInner: {
    top: hp("48%"),
    left: wp("55%"),
    width: wp("54%"),
    height: hp("26%"),
    position: "absolute",
  },
  vectorIcon: {
    height: "12.81%",
    width: wp("29%"),
    top: "44.53%",
    right: "41.67%",
    bottom: "42.66%",
    left: "33.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  succesfull: {
    top: hp("26%"),
    left: wp("18%"),
    fontSize: FontSize.size_5xl,
    color: "#3877d5",
  },

  verified: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.lightPrimaryKeyBackground,
    flex: 1,
    width: "100%",
    height: 709,
    overflow: "hidden",
  },
});

export default Verified;
