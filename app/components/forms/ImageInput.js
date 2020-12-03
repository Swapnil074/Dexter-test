import React, { useEffect, useState } from "react";
import * as Permissions from "expo-permissions";
import { View, Image, StyleSheet, Alert } from "react-native";
import colors from "../../config/colors";
import MaterialComminityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Screen from "../Screen";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

export default function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("Permission required");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (ex) {
      console.log(ex.message);
    }
  };

  const handlePress = async () => {
    if (!imageUri) selectImage();
    else {
      Alert.alert("delete", "Are you sure you want to delete the image", [
        { text: "no" },
        { text: "Yes", onPress: () => onChangeImage(null) },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialComminityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.Image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    height: 100,
    width: 100,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
});
