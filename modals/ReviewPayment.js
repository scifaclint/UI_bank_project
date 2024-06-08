import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import BackArrow from "../components/BackArrow";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const dataTesting = {
  //testing data
  Recipient: "Yaw Acheampong",
  Amount: "GHS 100.00",
  Charges: "GHS 0.50",
  Total: "GHS 100.50",
};
function ReviewPayment(props) {
  const [receiverName, setReceivername] = useState("Yaw Acheampong Clinton");
  return (
    <>
      <View style={styles.container}>
        <View style={styles.reviewPayment}>
          <BackArrow
            color={Color.colorDarkslateblue_400}
            //gotta implement onPress action here
          />
          <Text style={styles.textStyle}>Review and Pay </Text>
        </View>
        <View style={styles.confirmSendPayment}>
          <Text style={styles.transferstyle}>confirm Transfer Details</Text>
          <Text style={styles.sendingtextstyle}>
            Sending money to {dataTesting.Recipient}
          </Text>
        </View>
        <View style={styles.transferdetails}>
          <Text style={styles.transdettext}> Transfer Details</Text>
          <View style={styles.inline} />
        </View>
        <View
          style={{
            flexDirection: "row",
            top: "40%",
            left: "5%",
          }}
          // container sending payment details
          // get data and render here
          // recipient
        >
          <Text
            style={{
              width: 100,
            }}
          >
            {" "}
            Recipient
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              paddingLeft: 90,
            }}
          >
            Get Recipient
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            top: "40%",
            left: "5%",
          }}
          // container sending payment details
          // get data and render here
          // amount
        >
          <Text
            style={{
              width: 100,
            }}
          >
            {" "}
            Amount
          </Text>
          <Text
            style={{
              textAlign: "right",
              fontWeight: "bold",
              paddingLeft: 90,
            }}
          >
            Get amount
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            top: "40%",
            left: "5%",
          }}
          // container sending payment details
          // get data and render here
          // tax
        >
          <Text
            style={{
              width: 100,
            }}
          >
            {" "}
            Tax
          </Text>
          <Text
            style={{
              textAlign: "right",
              fontWeight: "bold",
              paddingLeft: 90,
            }}
          >
            Get Tax
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            top: "40%",
            left: "5%",
          }}
          // container sending payment details
          // get data and render here
          // total
        >
          <Text
            style={{
              width: 100,
              fontWeight: "bold",
              top: 30,
            }}
          >
            {" "}
            Total
          </Text>
          <Text
            style={{
              textAlign: "right",
              fontWeight: "bold",
              paddingLeft: 90,
              fontWeight: "bold",
              top: 30,
            }}
          >
            Get total
          </Text>
        </View>
        <View
          // balance amount remaining if proceeded
          style={styles.balanceContainer}
        >
          <Text style={styles.containtextbalance}>
            Current Balance {dataTesting.Amount}{" "}
          </Text>
        </View>
        <View
          // amount remaining if proceeded
          style={styles.remainbalance}
        >
          <Text style={styles.textstyleremainconfirm}>
            GHS 30.00 left if you complete this payment.
          </Text>
        </View>
        <View
          style={styles.paybutton}
          // button pay
        >
          <TouchableOpacity style={styles.bottomStyle}>
            <Text style={styles.bottomText}>Pay</Text>
          </TouchableOpacity>
        </View>
        <View
          // cancel button
          style={styles.cancelbutton}
        >
          <TouchableOpacity style={styles.stylecancelellipse}>
            <Text style={styles.canceltext}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp("100%"),
    width: wp("100%"),
    justifyContent: "flex-start",
  },
  reviewPayment: {
    top: "7%",
    left: "5%",
  },
  containtextbalance: {
    top: 15,
    left: 5,
    color: Color.colorDarkslateblue_400,
    fontWeight: "bold",
  },
  textstyleremainconfirm: {
    top: 8,
    color: Color.colorDarkslateblue_400,
    left: 5,
    fontWeight: "heavy",
    fontFamily: FontFamily.dMSansBold,
  },
  balanceContainer: {
    top: "35%",
    backgroundColor: "#F2EFEF",
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "90%",
    left: "5%",
    position: "relative",
  },
  remainbalance: {
    top: "35%",
    height: 45,
    width: "90%",
    left: "5%",
    backgroundColor: "#E8E8E8",
    position: "relative",
  },
  textStyle: {
    marginLeft: -99.5,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
    left: "50%",
    position: "absolute",
  },
  confirmSendPayment: {
    top: "8%",
    backgroundColor: "#F2EFEF",
    height: 80,
  },
  transferstyle: {
    color: Color.colorDarkslateblue_400,
    textAlign: "center",
    fontSize: 15,
    top: 8,
    fontFamily: FontFamily.dMSansMedium,
  },
  sendingtextstyle: {
    top: 13,
    textAlign: "center",
    color: Color.colorDarkslateblue_400,
    fontWeight: "bold",
  },
  transferdetails: {
    top: "17%",
    left: "7%",
  },
  transdettext: {
    color: Color.colorDarkslateblue_400,
    fontSize: 15,
    fontWeight: "bold",
  },
  inline: {
    backgroundColor: "#F2EFEF",
    width: "100%",
    height: 2,
    top: 3,
  },

  bottomStyle: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkslateblue_200,
    width: wp("25%"),
    position: "absolute",
    height: 43,
    position: "absolute",
  },
  bottomText: {
    color: Color.lightPrimaryKeyBackground,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    position: "absolute",
    left: wp("7%"),
    top: 5,
  },
  paybutton: {
    top: "48%",
    left: "60%",
    position: "relative",
  },
  cancelbutton: {
    top: "48%",
    left: "20%",
    position: "relative",
  },
  stylecancelellipse: {
    borderRadius: Border.br_xl,
    width: wp("25%"),
    position: "absolute",
    height: 43,
    borderColor: "black",
    borderWidth: 2,
  },
  canceltext: {
    color: "black",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    position: "absolute",
    left: wp("4%"),
    top: 5,
  },
});

export default ReviewPayment;
