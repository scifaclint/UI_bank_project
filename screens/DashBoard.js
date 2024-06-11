import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import UserDashboard from "../modals/UserDashboard";

const Status_BarHeight =
  Platform.OS === "ios" ? constants.statusBarHeight : StatusBar.currentHeight;
function DashBoard(props) {
  /*
  animation functions
  */
  // handle modal here

  const [modalVisible, setModalVisible] = React.useState(false);

  const handleUserDashboard = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };
  const handleLogout = () => {
    /*
    implement logout function here 
    alert or display a message for user to confirm logout
    on yes : close both modals and navigate to login screen 
    on no , just close alert 

    */
  };
  const handleTransferButton = () => {
    // handle transfer button pressed here
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Color.colorDarkslateblue_200} />
      <View
        // bottom bar here
        style={[styles.bottomBar, styles.bottomLayout]}
      >
        <Image
          style={[styles.bottomBarChild, styles.bottomLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-19368.png")}
        />
        <View style={[styles.bottomBarInner, styles.groupChild18Layout]}>
          <View style={[styles.groupChild18, styles.groupChild18Layout]} />
        </View>
        <View style={[styles.groupParent1, styles.parentLayout]}>
          <View style={[styles.homeParent, styles.parentLayout]}>
            <Text style={styles.home1}>Home</Text>
            <Image
              style={[styles.iconlybulkhome, styles.iconlybulkhomePosition]}
              contentFit="cover"
              source={require("../assets/iconlybulkhome.png")}
            />
          </View>
          <TouchableOpacity
            style={[styles.cardsParent, styles.moreGroupPosition]}
          >
            <Text style={[styles.cards, styles.cardsTypo]}>Cards</Text>
            <Image
              style={[styles.iconlybulkticket, styles.iconlybulkticketPosition]}
              contentFit="cover"
              source={require("../assets/iconlybulkticket.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.billsParent}>
            <Text style={[styles.bills, styles.cardsTypo]}>Bills</Text>
            <Image
              style={[styles.iconlybulkticket1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconlybulkticket1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.moreGroup, styles.moreGroupPosition]}
          >
            <Text style={[styles.cards, styles.cardsTypo]}>More</Text>
            <Image
              style={[
                styles.iconlybulkcategory,
                styles.iconlybulkticketPosition,
              ]}
              contentFit="cover"
              source={require("../assets/iconlybulkcategory.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            // transfer button here
            onPress={handleTransferButton}
            style={styles.iconlybulkticketParent}
          >
            <Image
              style={[
                styles.iconlybulkticket2,
                styles.iconlybulkticketPosition,
              ]}
              contentFit="cover"
              source={require("../assets/iconlybulkticket2.png")}
            />
            <Text style={[styles.cards, styles.cardsTypo]}>Transfer</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        // upper bar
        // notification and account
        style={{
          width: wp("100%"),
          height: hp("10%"),
          top: hp("4%"),
          justifyContent: "center",
          flexDirection: "row",
          paddingTop: 15,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          // onpress action not done yet
          style={{
            height: 35,
            width: 40,
            backgroundColor: "#ECEEF2",
            justifyContent: "center",
            left: wp("40%"),
          }}
        >
          <Ionicons
            style={{
              left: 5,
            }}
            name="notifications"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          // onpress action not done yet
          // menu bar here
          onPress={handleUserDashboard}
          style={{
            height: 35,
            width: 40,
            backgroundColor: "#ECEEF2",
            justifyContent: "center",
            left: -wp("44%"),
          }}
        >
          <Entypo
            style={{
              left: 5,
            }}
            name="menu"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View
        // would implement soon
        style={{
          top: hp("8%"),
          height: hp("15%"),
          width: wp("100%"),
          backgroundColor: "#ECEEF6",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            top: 0,
            position: "absolute",
            left: wp("35%"),
            fontFamily: FontFamily.interExtraBold,
            fontSize: FontSize.size_xl,
            color: Color.colorDarkslateblue_200,
          }}
        >
          DashBoard
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontFamily: FontFamily.dMSansMedium,
            color: Color.colorDarkslateblue_200,
            fontSize: FontSize.size_base,
          }}
        >
          Welcome back, [User Name]! It's great to see you again.
        </Text>
      </View>
      <View
        style={{
          top: hp("30%"),
          position: "absolute",
        }}
      >
        <View
          // vector and account balance
          style={{
            width: wp("90%"),
            backgroundColor: "#FFFFFF",
            height: hp("15%"),
            left: "5%",
            right: "5%",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#ECEEF2",
              justifyContent: "center",
              top: 40,
              left: "80%",
              borderRadius: Border.br_3xs,
            }}
          >
            <Ionicons
              style={{
                left: 10,
              }}
              name="wallet"
              size={25}
              color="black"
            />
          </View>
          <Text
            style={{
              left: 24,
              fontFamily: FontFamily.interExtraBold,
              fontSize: 18,
              color: Color.colorDarkslateblue_200,
            }}
          >
            ₵ {"0.00"}
          </Text>
          <Text
            style={{
              top: 3,
              left: 24,
              fontFamily: FontFamily.interMedium,
              color: Color.colorSilver,
              fontWeight: "bold",
            }}
          >
            Available Balance
          </Text>
        </View>
      </View>
      <UserDashboard
        isVisible={modalVisible}
        onclose={handleModalClose}
        animation={"fade"}
        logout={handleLogout}
      ></UserDashboard>
      {
        // rejected code for now
        /*

        <TouchableOpacity
        onPress={handleTransferButton}
        // Transfer money
        style={{
          flexDirection: "row",
          width: wp("90%"),
          height: hp("8%"),
          left: "5%",
          right: "5%",
          borderRadius: 10,
          top: "48%",
          position: "absolute",
          backgroundColor: "#e4f0ff",
        }}
      >
        <View
          style={{
            top: "20%",
            height: 35,
            width: 33,
            backgroundColor: "#DA7CF5",
            borderRadius: 10,
            left: "85%",
            position: "absolute",
          }}
        >
          <Feather
            style={{
              top: 7,
              left: 3,
            }}
            name="send"
            size={24}
            color="white"
          />
        </View>
        <Text
          style={{
            top: 20,
            left: 10,
            fontFamily: FontFamily.interExtraBold,
            color: "#4e4e54",
            fontSize: 15,
          }}
        >
          Transfer Money{" "}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        // explore no need for action
        style={{
          flexDirection: "row",
          width: wp("90%"),
          height: hp("15%"),
          left: "5%",
          right: "5%",
          borderRadius: 10,
          top: "58%",
          position: "absolute",
          backgroundColor: "#edfcec",
        }}
      >
        <View
          style={{
            top: "25%",
            borderRadius: 10,
            left: "7%",
            position: "absolute",
          }}
        >
          <FontAwesome5 name="money-check-alt" size={40} color="#DA7CF5" />
        </View>
        <Text
          style={{
            top: 41,
            left: "85%",
            fontFamily: FontFamily.interExtraBold,
            color: "#4e4e54",
            fontSize: 15,
          }}
        >
          Explore Budget
        </Text>
      </TouchableOpacity>
        */
      }
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Status_BarHeight,
    width: wp("100%"),
    justifyContent: "flex-start",
    backgroundColor: "#ECEEF2",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },

  bottomLayout: {
    height: 98,
    width: wp("100%"),
    position: "absolute",
  },
  groupChild18Layout: {
    width: 139,
    height: 6,
    position: "absolute",
  },
  parentLayout: {
    height: 49,
    position: "absolute",
  },
  iconlybulkhomePosition: {
    left: "12.81%",
    width: "76.56%",
  },
  moreGroupPosition: {
    height: 46,
    top: 1,
    position: "absolute",
  },
  cardsTypo: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.dMSansMedium,
    fontSize: FontSize.size_xs_2,
    lineHeight: 20,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  iconlybulkticketPosition: {
    bottom: "47.31%",
    height: "52.69%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
  },

  groupChild: {
    borderColor: Color.colorWhitesmoke_300,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
    height: 64,
    width: 348,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },

  n400WasSent: {
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorDarkslateblue_300,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.size_2xs,
    left: 0,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },

  iconlybulkdownload: {
    top: "39.06%",
    right: "88.79%",
    bottom: "40.63%",
    left: "7.47%",
  },

  rectangleGroup: {
    marginTop: 7,
  },
  groupParent: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    top: hp("5%"),
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    left: wp("3%"),
  },

  ellipseParent: {
    marginLeft: -wp("35%"),
    top: hp("17%"),
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 18,
    backgroundColor: "rgba(49, 52, 95, 0.8)",
    width: 266,
    height: 126,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "50%",
    overflow: "hidden",
    position: "absolute",
  },

  transfer: {
    marginLeft: -28,
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
    position: "absolute",
    fontSize: FontSize.size_sm,
  },

  more: {
    marginLeft: -17.5,
    top: 67,
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
  },
  notificationWrapper: {
    padding: Padding.p_3xs,
    left: 0,
  },
  notificationIcon1: {
    zIndex: 0,
    display: "none",
  },
  notificationMessageChild: {
    top: 9,
    left: 20,
    width: 6,
    zIndex: 1,
    height: 6,
    position: "absolute",
  },
  notificationMessage: {
    left: 1,
    padding: 10,
    height: 39,
    width: 36,
  },
  frameGroup: {
    right: wp("18%"),
    top: hp("8%"),
    position: "absolute",
  },
  bottomBarChild: {
    left: 0,
    top: 0,
  },
  groupChild18: {
    borderRadius: 9,
    backgroundColor: Color.colorDarkslateblue_300,
    left: 0,
    top: 0,
  },
  bottomBarInner: {
    top: 82,
    left: 116,
    display: "none",
  },
  home1: {
    top: 29,
    fontFamily: FontFamily.dMSansMedium,
    fontSize: FontSize.size_xs_2,
    color: Color.colorDarkslateblue_300,
    lineHeight: 20,
    left: 0,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  iconlybulkhome: {
    height: "50.52%",
    right: "10.63%",
    bottom: "49.48%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
    top: "0%",
    left: "12.81%",
    width: "76.56%",
  },
  homeParent: {
    width: 32,
    left: 0,
    top: 0,
  },
  cards: {
    top: 27,
    left: 0,
  },
  iconlybulkticket: {
    right: "10.62%",
    left: "12.81%",
    width: "76.56%",
  },
  cardsParent: {
    left: 225,
    width: 32,
  },
  bills: {
    marginLeft: -10.75,
    top: 28,
    left: "50%",
  },
  iconlybulkticket1: {
    height: "51.58%",
    bottom: "48.42%",
    left: "0%",
    right: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "0%",
    width: "100%",
  },
  billsParent: {
    marginLeft: -1.25,
    width: 24,
    height: 48,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  iconlybulkcategory: {
    width: "87.5%",
    right: "12.5%",
    left: "0%",
  },
  moreGroup: {
    left: 297,
    width: 28,
  },
  iconlybulkticket2: {
    width: "50%",
    right: "22.86%",
    left: "27.14%",
  },
  iconlybulkticketParent: {
    height: "95.88%",
    width: "15.1%",
    top: "2.06%",
    right: "62.93%",
    bottom: "2.06%",
    left: "21.97%",
    position: "absolute",
  },
  groupParent1: {
    top: 25,
    left: 26,
    width: 325,
  },
  bottomBar: {
    bottom: 0,
  },
});
export default DashBoard;
