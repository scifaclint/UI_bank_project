import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

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
        Succesfull !
      </Text>
      <Text
        style={[styles.ourSystemVerified, styles.succesfullTypo]}
      >{`Our system verified you  `}</Text>
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
    width: 114,
    height: 135,
    position: "absolute",
  },
  verifiedItem: {
    top: -25,
    left: 45,
    width: 111,
    height: 94,
    position: "absolute",
  },
  verifiedInner: {
    top: 360,
    left: 225,
    width: 205,
    height: 209,
    position: "absolute",
  },
  vectorIcon: {
    height: "12.81%",
    width: "25%",
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
    top: 139,
    left: 94,
    fontSize: FontSize.size_5xl,
    color: "#3877d5",
  },
  ourSystemVerified: {
    top: 182,
    left: 81,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslateblue_200,
  },
  verified: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.lightPrimaryKeyBackground,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Verified;
