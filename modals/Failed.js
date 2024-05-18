import { React, useState } from "react";
import { View, StyleSheet } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import AppBottom from "../components/AppBottom";

function Failed({ style }) {
  const [hasPlayed, setHasPlayed] = useState(false);
  return (
    <>
      <View style={[styles.mainContainer, style]}>
        <AppBottom
          // implement logic via
          // close the model when pressed
          onPress={console.log("pressed")}
          text={"Retry"}
          style={styles.Bottom}
        />
        <LottieView
          source={require("../data/failed.json")}
          autoPlay={!hasPlayed} // Only autoPlay if animation hasn't played
          progress={hasPlayed ? 1 : 0}
          loop={false}
          style={styles.lottie}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#add8e6",
    alignItems: "center",
    justifyContent: "center",
    width: wp("100%"),
    height: hp("60%"),
    top: hp("20%"),
  },
  lottie: {
    width: wp("50%"),
    height: wp("50%"),
    top: -hp("20%"),
  },
  Bottom: {
    top: hp("50%"),
    marginLeft: -wp("50%"),
  },
});

export default Failed;
