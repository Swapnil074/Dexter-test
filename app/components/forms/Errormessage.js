import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText";

export default function Errormessage({ error, visible }) {
  if (!error || !visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}
const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
