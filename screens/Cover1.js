import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Cover1 = () => {
  return (
    <View style={styles.cover0}>
      <Image
        style={styles.cover0Child}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cover0Child: {
    position: "absolute",
    marginTop: -69,
    marginLeft: -58,
    top: "50%",
    left: "50%",
    width: 115,
    height: 116,
  },
  cover0: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorDarkslateblue_100,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Cover1;
