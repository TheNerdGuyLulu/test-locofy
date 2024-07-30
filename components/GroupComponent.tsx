import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

export type GroupComponentType = {
  subtitle?: string;
  title?: string;
};

const GroupComponent = ({
  subtitle = "Seed value determines how image generation starts. The same seed will generate the same image.",
  title = "Seed",
}: GroupComponentType) => {
  return (
    <View style={styles.vectorParent}>
      <Image
        style={styles.componentChild}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <View style={styles.groupParent}>
        <View style={styles.seedParent}>
          <Text style={[styles.seed, styles.seedTypo]}>{title}</Text>
          <Text style={[styles.seedValueDetermines, styles.seedTypo]}>
            {subtitle}
          </Text>
        </View>
        <Image
          style={styles.switchIcon}
          resizeMode="cover"
          source={require("../assets/switch.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  seedTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
    left: "0%",
    position: "absolute",
  },
  componentChild: {
    height: "100%",
    width: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  seed: {
    fontSize: FontSize.bodyRegular_size,
    letterSpacing: 0,
    lineHeight: 22,
    color: Color.systemBackgroundDarkBasePrimary,
    top: "0%",
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
  },
  seedValueDetermines: {
    top: "57.89%",
    fontSize: FontSize.size_smi,
    lineHeight: 18,
    color: Color.colorGray,
    display: "flex",
    height: 16,
    width: 264,
    alignItems: "center",
    overflow: "hidden",
  },
  seedParent: {
    height: 38,
    width: 264,
  },
  switchIcon: {
    width: 51,
    height: 31,
  },
  groupParent: {
    top: 0,
    left: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
    position: "absolute",
    width: 363,
  },
  vectorParent: {
    height: 56,
    width: 363,
  },
});

export default GroupComponent;
