import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import AppText from "../components/forms/AppText";
import colors from "../config/colors";
import ListItem from "../components/list/ListItem";
import { Image } from "react-native-expo-image-cache";
import ContactSellerForm from "../components/contactSellerForm";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="white"
        style={styles.image}
      ></Image>
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>Rs.{listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/logo-red.png")}
            title="Mosh"
            subtitle="5 listings"
          ></ListItem>
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
