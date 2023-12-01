import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, createContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useCartContext } from "../store/CartContext";

const Recommend = ({ id, thumbnail, price, title }) => {
  const [favoriteStatus, setFavoriteStatus] = useState(false);
  const {
    addToCart,
    addToFavorites,
    removeFromFavorites,
    isFavorite: isFavoriteContext,
  } = useCartContext();

  React.useEffect(() => {
    setFavoriteStatus(isFavoriteContext(id));
  }, [isFavoriteContext, id]);

  const handleFavoriteToggle = () => {
    const product = { id, thumbnail, price, title };

    if (favoriteStatus) {
      removeFromFavorites(id);
    } else {
      addToFavorites(product);
    }
    setFavoriteStatus(!favoriteStatus);
  };

  const handleAddToCart = () => {
    addToCart({ id, thumbnail, price, title });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFavoriteToggle}>
        <AntDesign
          name={favoriteStatus ? "heart" : "hearto"}
          size={14}
          color={favoriteStatus ? "red" : "black"}
          style={styles.heart}
        />
      </TouchableOpacity>
      <Image style={styles.thumbnail} source={{ uri: thumbnail }} />
      <View style={styles.flex}>
        <View>
          <Text style={styles.priceText}>${price}</Text>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <TouchableOpacity onPress={handleAddToCart}>
          <AntDesign
            name="pluscircle"
            size={24}
            color="#2A4BA0"
            style={styles.plusBtn}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 194,
    backgroundColor: "#E7ECF0",
    marginRight: 15,
    borderRadius: 12,
  },
  thumbnail: {
    width: 68,
    height: 68,
    borderRadius: 12,
    marginTop: 20,
    marginLeft: 46,
  },
  heart: {
    position: "absolute",
    margin: 10,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 45,
  },
  priceText: {
    fontSize: 14,
    // fontFamily: "Manrope",
    marginLeft: 17,
  },
  titleText: {
    fontSize: 12,
    // fontFamily: "Manrope",
    color: "#616A7D",
    marginLeft: 17,
  },
  plusBtn: {
    marginRight: 17,
  },
});

export default Recommend;
