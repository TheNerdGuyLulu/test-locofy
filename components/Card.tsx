import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

export type CardType = {
  title?: string;
};

const Card = ({ title }: CardType) => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.seedParent}>
        <Text style={[styles.seed, styles.seedTypo]}>{title}</Text>
        <Text style={[styles.seedValueDetermines, styles.seedTypo]}>
          Seed value determines how image generation starts. The same seed will
          generate the same image.
        </Text>
      </View>
      <Image
        style={styles.switchIcon}
        resizeMode="cover"
        source={require("../assets/switch.png")}
      />
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
  seed: {
    top: "0%",
    fontSize: FontSize.bodyRegular_size,
    letterSpacing: 0,
    lineHeight: 22,
    color: Color.systemBackgroundDarkBasePrimary,
  },
  seedValueDetermines: {
    top: "57.89%",
    fontSize: FontSize.size_smi,
    lineHeight: 18,
    color: Color.colorGray,
    display: "flex",
    overflow: "hidden",
    height: 16,
    width: 264,
    alignItems: "center",
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
    width: 363,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
    position: "absolute",
  },
});

export default Card;
