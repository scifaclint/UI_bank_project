import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Scanning = () => {
  return (
    <View style={styles.scanning}>
      <Image
        style={styles.scanningChild}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={styles.faceIcon}
        contentFit="cover"
        source={require("../assets/face.png")}
      />
      <Text style={[styles.scanning1, styles.scanning1FlexBox]}>
        <Text style={styles.scanning2}>Scanning</Text>
        <Text style={styles.text}>....</Text>
      </Text>
      <Text
        style={[styles.moveYourHead, styles.scanning1FlexBox]}
      >{`Move your head slowly
 to complete the circle
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scanning1FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  scanningChild: {
    top: 208,
    left: 54,
    width: 268,
    height: 236,
    position: "absolute",
  },
  faceIcon: {
    marginTop: -34,
    marginLeft: -39,
    top: "50%",
    left: "50%",
    width: 85,
    height: 70,
    position: "absolute",
  },
  scanning2: {
    
  },
  text: {
    color: Color.lightText,
  },
  scanning1: {
    top: 134,
    left: 130,
    
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
  },
  moveYourHead: {
    top: 479,
    left: 99,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    
  },
  scanning: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.lightPrimaryKeyBackground,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Scanning;
