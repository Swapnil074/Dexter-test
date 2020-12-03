import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/NavigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import * as Notifications from "expo-notifications";
import { AppButton } from "./app/components/forms";

export default function Demo() {
  const showNotification = () => {
    Notifications.presentNotificationAsync({
      title: "caint",
      body: "fhdsgsad",
    });
  };
  return <AppButton title="tap" onPress={showNotification} />;
}

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    justifyContent: "center",
  },
});
