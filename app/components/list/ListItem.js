import React from "react";
import { View, Image, TouchableHighlight } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import AppText from "../forms/AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function ListItem({
  image,
  title,
  subtitle,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image}></Image>}

          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subtitle && (
              <AppText style={styles.subtitle} numberOfLines={2}>
                {subtitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  title: {
    fontWeight: "700",
  },
  subtitle: {
    color: colors.medium,
  },
});
