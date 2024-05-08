import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const FaceIdAuthen = () => {
  return (
    <View style={styles.faceIdAuthen}>
      <Text
        style={[styles.completeEventBy, styles.scanMyFaceTypo]}
      >{`            Complete event  by 
          scanning your face`}</Text>
      <Image
        style={styles.faceIdAuthenChild}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <View style={styles.faceIdAuthenItem} />
      <Text style={[styles.scanMyFace, styles.scanMyFaceTypo]}>
        Scan my face
      </Text>
      <Image
        style={styles.faceIcon}
        contentFit="cover"
        source={require("../assets/face.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scanMyFaceTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  completeEventBy: {
    marginLeft: -142,
    top: 125,
    color: Color.colorDarkslateblue_200,
    width: 309,
    height: 71,
    left: "50%",
  },
  faceIdAuthenChild: {
    top: 216,
    left: 80,
    width: 204,
    height: 190,
    position: "absolute",
  },
  faceIdAuthenItem: {
    top: 495,
    left: 66,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkslateblue_200,
    width: 231,
    height: 45,
    position: "absolute",
  },
  scanMyFace: {
    top: 506,
    left: 116,
    color: Color.lightPrimaryKeyBackground,
  },
  faceIcon: {
    marginTop: -34,
    marginLeft: -39,
    top: "50%",
    width: 85,
    height: 70,
    left: "50%",
    position: "absolute",
  },
  faceIdAuthen: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.lightPrimaryKeyBackground,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default FaceIdAuthen;
