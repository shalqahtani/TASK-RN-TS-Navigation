import { DimensionValue, StyleSheet, Text, View } from "react-native";
import React from "react";

const Line = ({ width, color }: { width: DimensionValue; color: string }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: color,
        borderRadius: 10,
        width: width,
        marginTop: 10,
      }}
    />
  );
};

export default Line;

const styles = StyleSheet.create({});
