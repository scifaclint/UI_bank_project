import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.homeChild, styles.homeChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Text style={[styles.hiDavid, styles.hiDavidTypo]}>Hi, David</Text>
      <Text style={[styles.recentTransactions, styles.quickActionsTypo]}>
        Recent transactions
      </Text>
      <Text style={[styles.viewAll, styles.hiDavidTypo]}>View all</Text>
      <View style={styles.homeItem} />
      <View style={styles.frameParent}>
        <View style={styles.groupParent}>
          <View style={styles.rectangleLayout}>
            <View style={styles.groupChild} />
            <Image
              style={styles.iconlybulkarrowRight}
              contentFit="cover"
              source={require("../assets/iconlybulkarrow--right.png")}
            />
            <View style={styles.n400WasSentIntoYourAccounParent}>
              <Text style={styles.n400WasSent}>
                N400 was sent into your account
              </Text>
              <Text style={[styles.thJune2021, styles.airtimeLayout]}>
                25th June 2021
              </Text>
            </View>
            <View style={[styles.groupItem, styles.groupItemLayout]} />
            <Image
              style={[
                styles.iconlybulkdownload,
                styles.iconlybulkdownloadLayout,
              ]}
              contentFit="cover"
              source={require("../assets/iconlybulkdownload.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupChild} />
            <Image
              style={styles.iconlybulkarrowRight}
              contentFit="cover"
              source={require("../assets/iconlybulkarrow--right.png")}
            />
            <View style={styles.n400WasSentIntoYourAccounParent}>
              <Text style={styles.n400WasSent}>
                N400 was sent into your account
              </Text>
              <Text style={[styles.thJune2021, styles.airtimeLayout]}>
                25th June 2021
              </Text>
            </View>
            <View style={[styles.rectangleView, styles.groupItemLayout]} />
            <Image
              style={[
                styles.iconlybulkdownload,
                styles.iconlybulkdownloadLayout,
              ]}
              contentFit="cover"
              source={require("../assets/iconlybulkdownload1.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupChild} />
            <Image
              style={styles.iconlybulkarrowRight}
              contentFit="cover"
              source={require("../assets/iconlybulkarrow--right.png")}
            />
            <View style={styles.n400WasSentIntoYourAccounParent}>
              <Text style={styles.n400WasSent}>
                N400 was sent into your account
              </Text>
              <Text style={[styles.thJune2021, styles.airtimeLayout]}>
                25th June 2021
              </Text>
            </View>
            <View style={[styles.rectangleView, styles.groupItemLayout]} />
            <Image
              style={[
                styles.iconlybulkdownload,
                styles.iconlybulkdownloadLayout,
              ]}
              contentFit="cover"
              source={require("../assets/iconlybulkdownload1.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupChild} />
            <Image
              style={styles.iconlybulkarrowRight}
              contentFit="cover"
              source={require("../assets/iconlybulkarrow--right.png")}
            />
            <View style={styles.n400WasSentIntoYourAccounParent}>
              <Text style={styles.n400WasSent}>
                N400 was sent into your account
              </Text>
              <Text style={[styles.thJune2021, styles.airtimeLayout]}>
                25th June 2021
              </Text>
            </View>
            <View style={[styles.groupItem, styles.groupItemLayout]} />
            <Image
              style={[
                styles.iconlybulkdownload,
                styles.iconlybulkdownloadLayout,
              ]}
              contentFit="cover"
              source={require("../assets/iconlybulkdownload.png")}
            />
          </View>
        </View>
        <View style={styles.groupParent}>
          <View style={styles.rectangleLayout}>
            <View style={styles.groupChild} />
            <Image
              style={styles.iconlybulkarrowRight}
              contentFit="cover"
              source={require("../assets/iconlybulkarrow--right.png")}
            />
            <View style={styles.n400WasSentIntoYourAccounParent}>
              <Text style={styles.n400WasSent}>
                N400 was sent into your account
              </Text>
              <Text style={[styles.thJune2021, styles.airtimeLayout]}>
                25th June 2021
              </Text>
            </View>
            <View style={[styles.groupItem, styles.groupItemLayout]} />
            <Image
              style={[
                styles.iconlybulkdownload,
                styles.iconlybulkdownloadLayout,
              ]}
              contentFit="cover"
              source={require("../assets/iconlybulkdownload.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupChild} />
            <Image
              style={styles.iconlybulkarrowRight}
              contentFit="cover"
              source={require("../assets/iconlybulkarrow--right.png")}
            />
            <View style={styles.n400WasSentIntoYourAccounParent}>
              <Text style={styles.n400WasSent}>
                N400 was sent into your account
              </Text>
              <Text style={[styles.thJune2021, styles.airtimeLayout]}>
                25th June 2021
              </Text>
            </View>
            <View style={[styles.rectangleView, styles.groupItemLayout]} />
            <Image
              style={[
                styles.iconlybulkdownload5,
                styles.iconlybulkdownloadLayout,
              ]}
              contentFit="cover"
              source={require("../assets/iconlybulkdownload1.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupChild} />
            <Image
              style={styles.iconlybulkarrowRight}
              contentFit="cover"
              source={require("../assets/iconlybulkarrow--right.png")}
            />
            <View style={styles.n400WasSentIntoYourAccounParent}>
              <Text style={styles.n400WasSent}>
                N400 was sent into your account
              </Text>
              <Text style={[styles.thJune2021, styles.airtimeLayout]}>
                25th June 2021
              </Text>
            </View>
            <View style={[styles.rectangleView, styles.groupItemLayout]} />
            <Image
              style={[
                styles.iconlybulkdownload5,
                styles.iconlybulkdownloadLayout,
              ]}
              contentFit="cover"
              source={require("../assets/iconlybulkdownload1.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupChild} />
            <Image
              style={styles.iconlybulkarrowRight}
              contentFit="cover"
              source={require("../assets/iconlybulkarrow--right.png")}
            />
            <View style={styles.n400WasSentIntoYourAccounParent}>
              <Text style={styles.n400WasSent}>
                N400 was sent into your account
              </Text>
              <Text style={[styles.thJune2021, styles.airtimeLayout]}>
                25th June 2021
              </Text>
            </View>
            <View style={[styles.groupItem, styles.groupItemLayout]} />
            <Image
              style={[
                styles.iconlybulkdownload,
                styles.iconlybulkdownloadLayout,
              ]}
              contentFit="cover"
              source={require("../assets/iconlybulkdownload.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-13.png")}
        />
        <Text style={[styles.availableBalance, styles.textPosition]}>
          Available balance
        </Text>
        <Text style={[styles.text, styles.textPosition]}>1006255489</Text>
        <Image
          style={[styles.iconParkSoliddownC, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/iconparksoliddownc.png")}
        />
        <Text style={[styles.text1, styles.textPosition]}>******</Text>
        <Image
          style={[styles.quilleyeClosedIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/quilleyeclosed.png")}
        />
      </View>
      <Text style={[styles.quickActions, styles.quickActionsTypo]}>
        Quick Actions
      </Text>
      <View style={[styles.ellipseGroup, styles.ellipsePosition]}>
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-645.png")}
        />
        <Image
          style={[styles.iconlybulkswap, styles.iconlybulkswapPosition]}
          contentFit="cover"
          source={require("../assets/iconlybulkswap.png")}
        />
        <Text style={[styles.transfer, styles.morePosition]}>Transfer</Text>
      </View>
      <View style={styles.ellipseContainer}>
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-645.png")}
        />
        <Image
          style={[styles.iconlybulkwallet, styles.iconlybulkswapPosition]}
          contentFit="cover"
          source={require("../assets/iconlybulkwallet.png")}
        />
        <Text style={[styles.airtime, styles.airtimePosition]}>Airtime</Text>
      </View>
      <View style={[styles.ellipseParent1, styles.ellipsePosition]}>
        <Image
          style={[styles.groupChild14, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-645.png")}
        />
        <Image
          style={[styles.iconlybulkwork, styles.iconlybulkswapPosition]}
          contentFit="cover"
          source={require("../assets/iconlybulkwork.png")}
        />
        <Text style={[styles.statement, styles.morePosition]}>Statement</Text>
      </View>
      <View style={[styles.moreParent, styles.parentPosition]}>
        <Text style={[styles.more, styles.moreTypo]}>More</Text>
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-645.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
      <View style={[styles.bettingParent, styles.parentPosition]}>
        <Text style={[styles.betting, styles.moreTypo]}>Betting</Text>
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/group-12879.png")}
        />
      </View>
      <View style={[styles.internetParent, styles.parentPosition]}>
        <Text style={[styles.internet, styles.moreTypo]}>Internet</Text>
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/group-12878.png")}
        />
      </View>
      <Text style={[styles.welcome, styles.moreTypo]}>Welcome!</Text>
      <View style={[styles.frameGroup, styles.frameGroupLayout]}>
        <View style={[styles.notificationWrapper, styles.notificationPosition]}>
          <Image
            style={styles.notificationIconLayout}
            contentFit="cover"
            source={require("../assets/notification.png")}
          />
        </View>
        <View style={[styles.notificationMessage, styles.notificationPosition]}>
          <Image
            style={[styles.notificationIcon1, styles.notificationIconLayout]}
            contentFit="cover"
            source={require("../assets/notification1.png")}
          />
          <Image
            style={styles.notificationMessageChild}
            contentFit="cover"
            source={require("../assets/ellipse-23.png")}
          />
        </View>
      </View>
      <View style={[styles.bottomBar, styles.bottomLayout]}>
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
          <View style={[styles.cardsParent, styles.moreGroupPosition]}>
            <Text style={[styles.cards, styles.cardsTypo]}>Cards</Text>
            <Image
              style={[styles.iconlybulkticket, styles.iconlybulkticketPosition]}
              contentFit="cover"
              source={require("../assets/iconlybulkticket.png")}
            />
          </View>
          <View style={styles.billsParent}>
            <Text style={[styles.bills, styles.cardsTypo]}>Bills</Text>
            <Image
              style={[styles.iconlybulkticket1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconlybulkticket1.png")}
            />
          </View>
          <View style={[styles.moreGroup, styles.moreGroupPosition]}>
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
              source={require("../assets/iconlybulkticket2.png")}
            />
            <Text style={[styles.cards, styles.cardsTypo]}>Transfers</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  homeChildPosition: {
    top: 56,
    position: "absolute",
  },
  hiDavidTypo: {
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  quickActionsTypo: {
    left: 23,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  airtimeLayout: {
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
    position: "absolute",
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
  iconlybulkdownloadLayout: {
    width: "3.74%",
    height: "20.31%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  rectangleLayout: {
    height: 64,
    width: 348,
  },
  textPosition: {
    color: Color.lightPrimaryKeyBackground,
    left: 14,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    left: 102,
    overflow: "hidden",
    position: "absolute",
  },
  ellipsePosition: {
    height: 87,
    top: 324,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 59,
    width: 59,
    top: 0,
    position: "absolute",
  },
  iconlybulkswapPosition: {
    bottom: "52.87%",
    top: "19.54%",
    height: "27.59%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  morePosition: {
    top: 67,
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
  },
  airtimePosition: {
    marginLeft: -24.5,
    top: 67,
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
  },
  parentPosition: {
    height: 88,
    top: 443,
    width: 59,
    left: "50%",
    position: "absolute",
  },
  moreTypo: {
    color: Color.colorDarkslateblue_600,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  frameGroupLayout: {
    height: 39,
    width: 36,
  },
  notificationPosition: {
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  notificationIconLayout: {
    height: 19,
    width: 16,
  },
  bottomLayout: {
    height: 98,
    width: 375,
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
  groupIcon: {
    height: "99.63%",
    bottom: "0.37%",
    opacity: 0.15,
    left: "0%",
    right: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "0%",
    width: "100%",
  },
  homeChild: {
    left: 22,
    height: 60,
    width: 60,
  },
  hiDavid: {
    top: 64,
    fontSize: FontSize.size_5xl,
    left: 98,
  },
  recentTransactions: {
    fontSize: FontSize.size_sm,
    top: 563,
  },
  viewAll: {
    left: 281,
    fontSize: FontSize.size_sm,
    top: 563,
  },
  homeItem: {
    marginLeft: -154.5,
    top: 146,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 8,
    elevation: 8,
    width: 309,
    height: 123,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "50%",
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
  iconlybulkarrowRight: {
    top: 26,
    left: 316,
    width: 17,
    height: 17,
    position: "absolute",
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
  thJune2021: {
    top: 16,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
  },
  n400WasSentIntoYourAccounParent: {
    top: 15,
    left: 55,
    width: 177,
    height: 36,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorHoneydew,
    borderColor: Color.colorLightgreen,
  },
  iconlybulkdownload: {
    top: "39.06%",
    right: "88.79%",
    bottom: "40.63%",
    left: "7.47%",
  },
  rectangleView: {
    backgroundColor: Color.colorMistyrose,
    borderColor: Color.colorLightcoral,
  },
  rectangleGroup: {
    marginTop: 7,
  },
  groupParent: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconlybulkdownload5: {
    top: "59.38%",
    right: "85.06%",
    bottom: "20.31%",
    left: "11.21%",
  },
  frameParent: {
    marginLeft: -173.5,
    top: 600,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    top: -68,
    left: -107,
    width: 261,
    height: 261,
    position: "absolute",
  },
  availableBalance: {
    top: 14,
    fontSize: 13,
    left: 14,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  text: {
    top: 42,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    left: 14,
  },
  iconParkSoliddownC: {
    width: 15,
    height: 15,
    top: 42,
  },
  text1: {
    top: 91,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 14,
    fontSize: FontSize.size_sm,
  },
  quilleyeClosedIcon: {
    top: 89,
    width: 19,
    height: 18,
  },
  ellipseParent: {
    marginLeft: -132.5,
    top: 145,
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
  quickActions: {
    top: 287,
    fontSize: FontSize.size_sm,
  },
  ellipseIcon: {
    left: 0,
  },
  iconlybulkswap: {
    width: "40%",
    right: "30%",
    left: "30%",
  },
  transfer: {
    marginLeft: -28,
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
    position: "absolute",
    fontSize: FontSize.size_sm,
  },
  ellipseGroup: {
    left: 40,
    width: 60,
  },
  iconlybulkwallet: {
    width: "40.68%",
    right: "28.81%",
    left: "30.51%",
  },
  airtime: {
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
    position: "absolute",
    fontSize: FontSize.size_sm,
  },
  ellipseContainer: {
    left: 152,
    width: 59,
    height: 87,
    top: 324,
    position: "absolute",
  },
  groupChild14: {
    left: 3,
  },
  iconlybulkwork: {
    width: "32.43%",
    right: "39.19%",
    left: "28.38%",
  },
  statement: {
    marginLeft: -37,
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorDarkslateblue_400,
    position: "absolute",
    fontSize: FontSize.size_sm,
  },
  ellipseParent1: {
    left: 264,
    width: 74,
  },
  more: {
    marginLeft: -17.5,
    top: 67,
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
  },
  vectorIcon: {
    height: "22.84%",
    width: "34.07%",
    top: "20.45%",
    right: "33.73%",
    bottom: "56.7%",
    left: "32.2%",
  },
  moreParent: {
    marginLeft: 79.5,
  },
  betting: {
    marginLeft: -24.5,
    top: 67,
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
  },
  bettingParent: {
    marginLeft: -35.5,
  },
  internet: {
    marginLeft: -27.5,
    top: 67,
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
  },
  internetParent: {
    marginLeft: -147.5,
  },
  welcome: {
    top: 108,
    fontWeight: "200",
    fontFamily: FontFamily.poppinsExtraLight,
    left: 98,
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
    left: 324,
    top: 56,
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
    marginLeft: -187.5,
    bottom: 0,
    left: "50%",
  },
  home: {
    flex: 1,
    height: 821,
    width: "100%",
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
});

export default Home;
