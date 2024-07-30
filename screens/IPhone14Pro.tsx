import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Card from "../components/Card";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const IPhone14Pro = () => {
  return (
    <View style={[styles.iphone14Pro14, styles.iphone14Pro14Layout]}>
      <View style={[styles.statusbar, styles.statusbarPosition]}>
        <View style={[styles.leftSide, styles.sideFlexBox]}>
          <View style={styles.statusbarTime}>
            <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
          </View>
        </View>
        <View style={[styles.dynamicIsland, styles.sideFlexBox]}>
          <View style={styles.statusbarDynamicisland}>
            <View style={[styles.truedepthCamera, styles.cameraPosition]} />
            <View style={[styles.facetimeCamera, styles.cameraPosition]} />
          </View>
        </View>
        <View style={[styles.rightSide, styles.sideFlexBox]}>
          <View style={styles.signalWifiBattery}>
            <Image
              style={styles.iconMobileSignal}
              resizeMode="cover"
              source={require("../assets/icon--mobile-signal.png")}
            />
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../assets/wifi1.png")}
            />
            <Image
              style={styles.statusbarBatteryIcon}
              resizeMode="cover"
              source={require("../assets/-statusbarbattery.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.cameraPosition]} />
      </View>
      <View style={[styles.leftAccessory, styles.leftPosition]}>
        <Image
          style={styles.backIcon}
          resizeMode="cover"
          source={require("../assets/back-icon.png")}
        />
        <Text style={[styles.leftTitle, styles.leftLayout]} numberOfLines={1}>
          Back
        </Text>
      </View>
      <View style={[styles.leftAccessory1, styles.leftPosition]}>
        <Text style={[styles.leftTitle1, styles.leftLayout]} numberOfLines={1}>
          Save
        </Text>
      </View>
      <View style={[styles.vectorParent, styles.groupLayout]}>
        <Image
          style={[styles.instanceChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <View style={styles.groupParent}>
          <View style={styles.seedParent}>
            <Text style={[styles.seed, styles.seedPosition]}>
              Text Guidance
            </Text>
            <Text style={[styles.seedValueDetermines, styles.howManyStepsClr]}>
              How ‘literally’ the text input should be treated. Higher would be
              more faithful to the text while lower would have more artistic
              liberty.
            </Text>
          </View>
          <Image
            style={styles.switchIconLayout}
            resizeMode="cover"
            source={require("../assets/switch.png")}
          />
        </View>
      </View>
      <View style={[styles.vectorGroup, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Text style={[styles.steps, styles.stepsPosition]}>Steps</Text>
        <Text
          style={[styles.howManySteps, styles.stepsPosition]}
          numberOfLines={1}
        >
          How many steps to be applied for image...
        </Text>
        <Image
          style={[styles.switchIcon1, styles.switchIconLayout]}
          resizeMode="cover"
          source={require("../assets/dark-modefalse-activefalse.png")}
        />
      </View>
      <View style={styles.title}>
        <Text style={[styles.title1, styles.cameraPosition]}>
          Advanced settings
        </Text>
      </View>
      <View style={[styles.vectorContainer, styles.groupLayout]}>
        <Image
          style={[styles.instanceChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Card title="322" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone14Pro14Layout: {
    overflow: "hidden",
    width: "100%",
  },
  statusbarPosition: {
    top: 0,
    left: 0,
  },
  sideFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  timeTypo: {
    textAlign: "center",
    fontWeight: "600",
    color: Color.systemBackgroundDarkBasePrimary,
    fontFamily: FontFamily.bodyRegular,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.bodyRegular_size,
  },
  cameraPosition: {
    left: "50%",
    position: "absolute",
  },
  leftPosition: {
    paddingBottom: Padding.p_4xs,
    paddingRight: Padding.p_4xs,
    paddingTop: Padding.p_4xs,
    paddingLeft: Padding.p_6xs,
    width: 130,
    height: 42,
    marginTop: -371,
    top: "50%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  leftLayout: {
    height: 22,
    display: "flex",
    color: Color.defaultSystemBlueLight,
    fontFamily: FontFamily.bodyRegular,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.bodyRegular_size,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  groupLayout: {
    height: 56,
    width: 363,
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  seedPosition: {
    top: "0%",
    left: "0%",
  },
  howManyStepsClr: {
    color: Color.colorGray,
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },
  stepsPosition: {
    left: 16,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
    position: "absolute",
  },
  switchIconLayout: {
    height: 31,
    width: 51,
  },
  time: {
    top: 1,
    height: 20,
    width: 54,
    left: 0,
    position: "absolute",
  },
  statusbarTime: {
    borderRadius: Border.br_5xl,
    height: 21,
    width: 54,
  },
  leftSide: {
    justifyContent: "center",
    flex: 1,
  },
  truedepthCamera: {
    marginLeft: -62.5,
    width: 80,
    top: "50%",
    marginTop: -18.5,
    left: "50%",
    height: 37,
    backgroundColor: Color.systemBackgroundDarkBasePrimary,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  facetimeCamera: {
    marginLeft: 25.5,
    width: 37,
    top: "50%",
    marginTop: -18.5,
    left: "50%",
    height: 37,
    backgroundColor: Color.systemBackgroundDarkBasePrimary,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  statusbarDynamicisland: {
    width: 125,
    height: 37,
    backgroundColor: Color.systemBackgroundDarkBasePrimary,
    borderRadius: Border.br_81xl,
  },
  dynamicIsland: {
    paddingTop: Padding.p_5xs,
  },
  iconMobileSignal: {
    height: 12,
    width: 18,
  },
  wifiIcon: {
    width: 17,
    marginLeft: 8,
    height: 12,
  },
  statusbarBatteryIcon: {
    width: 27,
    height: 13,
    marginLeft: 8,
  },
  signalWifiBattery: {
    flexDirection: "row",
  },
  rightSide: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  statusbar: {
    width: 393,
    height: 53,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    width: 134,
    height: 5,
    backgroundColor: Color.systemBackgroundDarkBasePrimary,
    borderRadius: Border.br_81xl,
    left: "50%",
  },
  homeindicator: {
    top: 818,
    width: 390,
    height: 34,
    left: 0,
    position: "absolute",
  },
  backIcon: {
    height: 24,
    width: 18,
  },
  leftTitle: {
    marginLeft: 5,
    textAlign: "left",
  },
  leftAccessory: {
    left: 0,
  },
  leftTitle1: {
    textAlign: "right",
  },
  leftAccessory1: {
    left: 263,
    justifyContent: "flex-end",
  },
  instanceChild: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    top: "0%",
    overflow: "hidden",
    width: "100%",
  },
  seed: {
    left: "0%",
    textAlign: "left",
    color: Color.systemBackgroundDarkBasePrimary,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.bodyRegular,
    position: "absolute",
  },
  seedValueDetermines: {
    top: "57.89%",
    height: 16,
    width: 264,
    left: "0%",
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
    position: "absolute",
  },
  seedParent: {
    height: 38,
    width: 264,
  },
  groupParent: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_4xs,
    width: 363,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorParent: {
    top: 241,
    left: 14,
    height: 56,
    position: "absolute",
  },
  groupChild: {
    height: 56,
    width: 363,
    left: 0,
    top: 0,
  },
  steps: {
    top: 9,
    color: Color.systemBackgroundDarkBasePrimary,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.bodyRegular_size,
  },
  howManySteps: {
    top: 30,
    width: 258,
    height: 18,
    color: Color.colorGray,
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },
  switchIcon1: {
    top: 13,
    left: 296,
    position: "absolute",
  },
  vectorGroup: {
    top: 329,
    left: 14,
    height: 56,
    position: "absolute",
  },
  title1: {
    marginLeft: -73.5,
    top: 10,
    textAlign: "center",
    fontWeight: "600",
    color: Color.systemBackgroundDarkBasePrimary,
    fontFamily: FontFamily.bodyRegular,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.bodyRegular_size,
  },
  title: {
    right: 130,
    left: 130,
    height: 42,
    marginTop: -371,
    top: "50%",
    position: "absolute",
  },
  vectorContainer: {
    top: 153,
    left: 14,
    height: 56,
    position: "absolute",
  },
  iphone14Pro14: {
    borderRadius: 56,
    backgroundColor: "#f2f2f7",
    height: 852,
    flex: 1,
  },
});

export default IPhone14Pro;
