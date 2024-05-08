import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const TransferMainPage = () => {
  return (
    <View style={styles.transferMainPage}>
      <Image
        style={[styles.groupIcon, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group2.png")}
      />
      <Text style={[styles.beneficiaries, styles.viewAllTypo]}>
        Beneficiaries
      </Text>
      <View style={styles.viewAllWrapper}>
        <Text style={[styles.viewAll, styles.viewAllTypo]}>View All</Text>
      </View>
      <Text style={styles.transferPayment}>{`Transfer & Payment`}</Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Image
          style={[styles.frameInner, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6461.png")}
        />
        <Text style={[styles.koredeOjo, styles.koredeOjoTypo]}>Korede Ojo</Text>
        <Text style={[styles.opeyemiFalogun, styles.koredeOjoTypo]}>
          Opeyemi Falogun
        </Text>
        <Image
          style={[styles.ellipseIcon, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6451.png")}
        />
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
          <View style={styles.groupChild} />
          <Image
            style={styles.currencyIcon}
            contentFit="cover"
            source={require("../assets/currency.png")}
          />
          <Text style={styles.sourceAccount}>Source Account</Text>
          <Text style={[styles.text, styles.textTypo]}>12,000.00</Text>
          <Image
            style={styles.iconParkSoliddownC}
            contentFit="cover"
            source={require("../assets/iconparksoliddownc1.png")}
          />
          <Text style={[styles.davidAdebayo, styles.text1Typo]}>
            DAVID ADEBAYO
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
          <View style={styles.groupChild} />
          <Text style={styles.sourceAccount}>Destination Account</Text>
        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <View style={styles.groupChild} />
          <Text style={styles.sourceAccount}>Amount</Text>
        </View>
        <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
          <View style={styles.groupChild} />
          <Image
            style={[styles.groupChild1, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/group-12932.png")}
          />
          <Text style={styles.sourceAccount}>Category</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
          <View style={styles.groupChild} />
          <Text style={styles.sourceAccount}>Remark (Optional)</Text>
        </View>
        <View style={styles.rectangleParent3}>
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
          <View style={[styles.finish, styles.finishPosition]}>
            <Text style={[styles.proceed, styles.textTypo]}>{`Proceed `}</Text>
          </View>
          <Text style={[styles.scheduleTransfer, styles.saveBeneficiaryTypo]}>
            Schedule transfer
          </Text>
          <Text
            style={[styles.saveBeneficiary, styles.saveBeneficiaryTypo]}
          >{`Save beneficiary `}</Text>
        </View>
        <Text style={[styles.text1, styles.text1Typo]}>1006255489</Text>
      </View>
      <View style={[styles.bottomBar, styles.bottomLayout]}>
        <Image
          style={[styles.bottomBarChild, styles.bottomLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-19368.png")}
        />
        <View style={[styles.bottomBarInner, styles.groupChild5Layout]}>
          <View style={[styles.groupChild5, styles.groupChild5Layout]} />
        </View>
        <View style={[styles.groupContainer, styles.homeParentLayout]}>
          <View style={[styles.homeParent, styles.homeParentLayout]}>
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            <Image
              style={[styles.iconlybulkhome, styles.iconlybulkhomePosition]}
              contentFit="cover"
              source={require("../assets/iconlybulkhome1.png")}
            />
          </View>
          <View style={[styles.cardsParent, styles.parentPosition]}>
            <Text style={[styles.cards, styles.cardsTypo]}>Cards</Text>
            <Image
              style={[styles.iconlybulkticket, styles.iconlybulkticketPosition]}
              contentFit="cover"
              source={require("../assets/iconlybulkticket.png")}
            />
          </View>
          <View style={styles.billsParent}>
            <Text style={[styles.bills, styles.homeTypo]}>Bills</Text>
            <Image
              style={[styles.iconlybulkticket1, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/iconlybulkticket3.png")}
            />
          </View>
          <View style={[styles.moreParent, styles.parentPosition]}>
            <Text style={[styles.cards, styles.cardsTypo]}>More</Text>
            <Image
              style={[
                styles.iconlybulkcategory,
                styles.iconlybulkticketPosition,
              ]}
              contentFit="cover"
              source={require("../assets/iconlybulkcategory.png")}
            />
          </View>
          <View style={styles.iconlybulkticketParent}>
            <Image
              style={[
                styles.iconlybulkticket2,
                styles.iconlybulkticketPosition,
              ]}
              contentFit="cover"
              source={require("../assets/iconlybulkticket4.png")}
            />
            <Text style={[styles.transfers, styles.cardsTypo]}>Transfers</Text>
          </View>
        </View>
      </View>
      <View style={styles.statusBar}>
        <Image
          style={[styles.batteryIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={[styles.wifiIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.cellularConnectionIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <Text style={styles.text2}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  viewAllTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
  },
  frameLayout: {
    height: 100,
    width: 111,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: 19,
  },
  frameInnerLayout: {
    height: 31,
    width: 31,
    top: 19,
    position: "absolute",
  },
  koredeOjoTypo: {
    fontSize: FontSize.textSublabel_size,
    top: 60,
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupParentLayout: {
    height: 89,
    width: 348,
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  text1Typo: {
    color: Color.colorDarkslateblue_300,
    fontSize: FontSize.size_6xs,
    top: 67,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 20,
    width: 20,
    borderWidth: 0.7,
    borderColor: Color.colorDarkslateblue_300,
    backgroundColor: Color.colorLavender,
    borderRadius: Border.br_29xl,
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  finishPosition: {
    top: 93,
    left: "50%",
    position: "absolute",
  },
  saveBeneficiaryTypo: {
    color: Color.lightText,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    left: 28,
    textAlign: "left",
    position: "absolute",
  },
  bottomLayout: {
    height: 98,
    width: 375,
    position: "absolute",
  },
  groupChild5Layout: {
    height: 6,
    width: 139,
    position: "absolute",
  },
  homeParentLayout: {
    height: 49,
    position: "absolute",
  },
  homeTypo: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_xs_2,
    color: Color.colorDimgray,
    textAlign: "left",
    position: "absolute",
  },
  iconlybulkhomePosition: {
    left: "12.81%",
    width: "76.56%",
  },
  parentPosition: {
    height: 46,
    top: 1,
    position: "absolute",
  },
  cardsTypo: {
    top: 27,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_xs_2,
    left: 0,
    textAlign: "left",
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
  iconLayout: {
    height: 11,
    position: "absolute",
  },
  groupIcon: {
    height: "100.74%",
    bottom: "-0.74%",
    opacity: 0.15,
    left: "0%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    width: "100%",
  },
  beneficiaries: {
    marginLeft: -159.5,
    width: 86,
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
    left: "50%",
    top: 93,
    position: "absolute",
  },
  viewAll: {
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
  },
  viewAllWrapper: {
    top: 83,
    left: 285,
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  transferPayment: {
    marginLeft: -76.5,
    top: 59,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    zIndex: 0,
  },
  frameItem: {
    marginLeft: 20,
    zIndex: 1,
  },
  frameInner: {
    left: 38,
    zIndex: 2,
  },
  koredeOjo: {
    left: 24,
    zIndex: 3,
  },
  opeyemiFalogun: {
    left: 138,
    zIndex: 4,
  },
  ellipseIcon: {
    left: 170,
    zIndex: 5,
  },
  rectangleParent: {
    top: 135,
    width: 247,
    height: 104,
    left: 28,
    flexDirection: "row",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -174,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorWhitesmoke_300,
    borderWidth: 1,
    height: 64,
    borderStyle: "solid",
    top: 25,
    width: 348,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
  currencyIcon: {
    left: 10,
    width: 19,
    height: 19,
    top: 42,
    overflow: "hidden",
    position: "absolute",
  },
  sourceAccount: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    left: 0,
    top: 0,
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
    position: "absolute",
  },
  text: {
    left: 32,
    color: Color.colorDarkslateblue_200,
    fontFamily: FontFamily.poppinsRegular,
    top: 42,
  },
  iconParkSoliddownC: {
    top: 45,
    left: 100,
    height: 15,
    width: 15,
    overflow: "hidden",
    position: "absolute",
  },
  davidAdebayo: {
    left: 14,
  },
  rectangleGroup: {
    zIndex: 0,
  },
  rectangleContainer: {
    marginTop: 16,
    zIndex: 1,
  },
  groupView: {
    marginTop: 16,
    zIndex: 2,
  },
  groupChild1: {
    height: "15.73%",
    width: "4.02%",
    top: "58.43%",
    right: "5.17%",
    bottom: "25.84%",
    left: "90.8%",
  },
  rectangleParent1: {
    marginTop: 16,
    zIndex: 3,
  },
  rectangleParent2: {
    marginTop: 16,
    zIndex: 4,
  },
  groupChild3: {
    top: 0,
  },
  groupChild4: {
    top: 34,
  },
  proceed: {
    marginTop: -10.5,
    marginLeft: -29,
    top: "50%",
    fontFamily: FontFamily.poppinsBold,
    color: Color.lightPrimaryKeyBackground,
    fontWeight: "700",
    left: "50%",
  },
  finish: {
    marginLeft: -134.5,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorDarkslateblue_200,
    width: 296,
    height: 51,
    left: "50%",
    overflow: "hidden",
  },
  scheduleTransfer: {
    top: 36,
  },
  saveBeneficiary: {
    top: 2,
  },
  rectangleParent3: {
    width: 323,
    height: 144,
    marginTop: 16,
    zIndex: 5,
  },
  text1: {
    left: 114,
    zIndex: 6,
  },
  groupParent: {
    marginLeft: -173.5,
    top: 263,
    height: 792,
    left: "50%",
    position: "absolute",
  },
  bottomBarChild: {
    left: 0,
    top: 0,
  },
  groupChild5: {
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
  home: {
    top: 29,
    color: Color.colorDimgray,
    left: 0,
  },
  iconlybulkhome: {
    height: "50.52%",
    right: "10.63%",
    bottom: "49.48%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    color: Color.colorDimgray,
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
    color: Color.colorDimgray,
    left: "50%",
  },
  iconlybulkticket1: {
    height: "51.58%",
    bottom: "48.42%",
    left: "0%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    width: "100%",
  },
  billsParent: {
    marginLeft: -1.25,
    height: 48,
    width: 24,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  iconlybulkcategory: {
    width: "87.5%",
    right: "12.5%",
    left: "0%",
  },
  moreParent: {
    left: 297,
    width: 28,
  },
  iconlybulkticket2: {
    width: "50%",
    right: "22.86%",
    left: "27.14%",
  },
  transfers: {
    color: Color.colorDarkslateblue_400,
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
  groupContainer: {
    left: 26,
    width: 325,
    top: 25,
    height: 49,
  },
  bottomBar: {
    marginLeft: -187.5,
    bottom: 0,
    left: "50%",
  },
  batteryIcon: {
    right: 15,
    top: 17,
    height: 11,
    width: 24,
  },
  wifiIcon: {
    right: 44,
    top: 17,
    height: 11,
    width: 15,
  },
  cellularConnectionIcon: {
    top: 18,
    right: 64,
    width: 17,
  },
  text2: {
    top: 16,
    left: 22,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.textSublabel,
    color: Color.colorDarkslateblue_600,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  statusBar: {
    top: -1,
    height: 44,
    width: 375,
    left: 0,
    overflow: "hidden",
    position: "absolute",
  },
  transferMainPage: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
});

export default TransferMainPage;
