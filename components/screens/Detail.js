import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import { useCartContext } from "../store/CartContext";

const Detail = ({ navigation, route }) => {
  const [favoriteStatus, setFavoriteStatus] = useState(false);
  const [cartStatus, setCartStatus] = useState(false);
  const {
    addToFavorites,
    removeFromFavorites,
    addToCart,
    isFavorite: isFavoriteContext,
  } = useCartContext();

  const navigateToCart = () => {
    navigation.navigate("Cart");
  };

  useEffect(() => {
    setFavoriteStatus(isFavoriteContext(route.params.id));
  }, [isFavoriteContext, route.params.id]);

  const handleFavoriteToggle = () => {
    const product = {
      id: route.params.id,
      thumbnail: route.params.thumbnail,
      price: route.params.price,
      title: route.params.title,
    };

    if (favoriteStatus) {
      removeFromFavorites(route.params.id);
    } else {
      addToFavorites(product);
    }
    setFavoriteStatus(!favoriteStatus);
  };

  const handleAddToCart = () => {
    const product = {
      id: route.params.id,
      thumbnail: route.params.thumbnail,
      price: route.params.price,
      title: route.params.title,
    };

    addToCart(product);
    setCartStatus(true);
  };

  return (
    <ScrollView style={styles.masterContainer}>
      {/* top icons */}
      <View style={styles.container}>
        <TouchableOpacity>
          <Ionicons
            name="chevron-back"
            size={24}
            color="black"
            style={styles.backBtn}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToCart}>
          <SimpleLineIcons
            name="handbag"
            size={24}
            color="black"
            style={styles.cartBtn}
          />
        </TouchableOpacity>
      </View>

      {/* product title */}
      <Text style={styles.title}>{route.params.title}</Text>

      {/* stars and rating */}
      <View style={styles.flex}>
        <FontAwesome
          name="star"
          size={18}
          color="#F9B023"
          style={styles.stars}
        />
        <FontAwesome
          name="star"
          size={18}
          color="#F9B023"
          style={styles.stars}
        />
        <FontAwesome
          name="star"
          size={18}
          color="#F9B023"
          style={styles.stars}
        />
        <FontAwesome
          name="star"
          size={18}
          color="#F9B023"
          style={styles.stars}
        />
        <FontAwesome
          name="star-half-empty"
          size={18}
          color="#F9B023"
          style={styles.stars}
        />

        <Text style={styles.rating}>Rating: {route.params.rating}</Text>
      </View>

      {/* images */}
      <View>
        <ScrollView horizontal style={styles.scrollView}>
          <FlatList
            horizontal
            data={route.params.images}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <Image source={{ uri: item }} style={styles.image} />
              </View>
            )}
          />
        </ScrollView>

        {/* image section icons */}
        <Feather
          name="image"
          size={70}
          color="#A1ABC0"
          style={styles.imageIcon}
        />
        <Ionicons
          name="remove-outline"
          size={24}
          color="#F9B023"
          style={styles.outline1}
        />
        <Ionicons
          name="remove-outline"
          size={24}
          color="#E7ECF0"
          style={styles.outline2}
        />
        <Ionicons
          name="remove-outline"
          size={24}
          color="#E7ECF0"
          style={styles.outline3}
        />
        <TouchableOpacity onPress={handleFavoriteToggle} style={styles.heart}>
          <AntDesign
            name={favoriteStatus ? "heart" : "hearto"}
            size={24}
            color={favoriteStatus ? "red" : "black"}
          />
        </TouchableOpacity>
      </View>

      {/* price and discount */}
      <View style={styles.flex}>
        <Text style={styles.price}>${route.params.price}</Text>
        <View style={styles.discountContainer}>
          <Text style={styles.discountText}>
            {route.params.discountPercentage}% OFF
          </Text>
        </View>
      </View>

      {/* buttons */}
      <View style={styles.flex2}>
        <TouchableOpacity
          style={styles.btnContainer1}
          onPress={handleAddToCart}
        >
          <Text style={styles.btnText1}>
            {cartStatus ? "Added to Cart" : "Add to Cart"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContainer2}>
          <Text style={styles.btnText2}>Buy Now</Text>
        </TouchableOpacity>
      </View>

      {/* details */}
      <View style={styles.detailContainer}>
        <Text>Details</Text>
        <View style={styles.detailContainer2}>
          <Text style={styles.detailText}>{route.params.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  masterContainer: {},
  scrollView: {
    width: "100%",
    height: 207,
    backgroundColor: "#F8F9FB",
  },
  container: {
    marginLeft: "10%",
    marginTop: "15%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backBtn: {
    height: 40,
    width: 40,
    borderRadius: 15,
    backgroundColor: "#E7ECF0",
    paddingLeft: 6,
    paddingTop: 6,
  },
  cartBtn: {
    marginRight: "10%",
  },
  title: {
    fontSize: 50,
    marginLeft: 35,
    marginTop: 20,
  },
  flex: {
    flexDirection: "row",
    marginLeft: "9%",
    marginTop: "5%",
  },
  rating: {
    color: "#A1A1AB",
    marginLeft: "2%",
  },
  stars: {
    marginLeft: "1%",
    marginBottom: "4%",
  },
  imageContainer: {
    width: "100%",
    height: 207,
    backgroundColor: "red",
    marginTop: "7%",
  },
  imageIcon: {
    position: "absolute",
    marginLeft: 140,
    marginTop: 60,
  },
  image: {
    width: "100%",
    height: 207,
  },
  outline1: {
    position: "absolute",
    marginTop: "45%",
    marginLeft: 20,
  },
  outline2: {
    position: "absolute",
    marginTop: "45%",
    marginLeft: 40,
  },
  outline3: {
    position: "absolute",
    marginTop: "45%",
    marginLeft: 60,
  },
  heartContainer: {
    position: "absolute",
    marginLeft: "80%",
    marginTop: "5%",
    width: 1,
    height: 25,
  },
  heart: {
    position: "absolute",
    marginLeft: "80%",
    marginTop: "5%",
  },
  price: {
    fontSize: 16,
    color: "#2A4BA0",
    fontWeight: "bold",
    marginRight: 10,
  },
  discountContainer: {
    width: 80,
    height: 25,
    backgroundColor: "#2A4BA0",
    borderRadius: 70,
    marginTop: 1,
    justifyContent: "center",
    paddingLeft: 8,
  },
  discountText: {
    fontSize: 12,
    color: "#C5CDD2",
  },
  flex2: {
    flexDirection: "row",
    marginTop: "8%",
    justifyContent: "space-between",
  },
  btnContainer1: {
    width: 169,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2A4BA0",
    borderRadius: 20,
    marginLeft: 20,
  },
  btnContainer2: {
    width: 169,
    height: 56,
    backgroundColor: "#2A4BA0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 20,
  },
  btnText1: {
    color: "#2A4BA0",
    fontSize: 14,
  },
  btnText2: {
    color: "white",
    fontSize: 14,
  },
  detailContainer: {
    marginTop: "9%",
    marginLeft: 20,
  },
  detailContainer2: {
    marginTop: 10,
    width: 327,
    height: 180,
  },
  detailText: {
    color: "#8891A5",
  },
});

export default Detail;
