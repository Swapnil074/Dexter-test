import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AppText from "../forms/AppText";

export default function PickerItem({ item, label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
