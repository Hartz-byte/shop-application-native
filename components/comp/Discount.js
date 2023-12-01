import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Discount = ({ discountPercentage, thumbnail }) => {
  const discountPer = discountPercentage.toFixed(0);

  return (
    <View style={styles.discountCard}>
      <View>
        <Image style={styles.thumbnail} source={{ uri: thumbnail }} />
      </View>
      <View style={styles.offerText}>
        <Text style={styles.lightColor}>Get</Text>
        <Text style={styles.darkColor}>{discountPer}% OFF</Text>
        <Text style={styles.lightColor2}>On First 03 order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  discountCard: {
    width: 269,
    height: 123,
    backgroundColor: "#F9B023",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  thumbnail: {
    width: 68,
    height: 68,
    borderRadius: 12,
    marginTop: 26,
    marginLeft: 22,
  },
  offerText: {
    marginTop: 17,
    marginRight: 24,
  },
  lightColor: {
    fontSize: 20,
    color: "#E7ECF0",
  },
  lightColor2: {
    fontSize: 13,
    color: "#E7ECF0",
  },
  darkColor: {
    fontSize: 26,
    color: "white",
  },
});

export default Discount;
