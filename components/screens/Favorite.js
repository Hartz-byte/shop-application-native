import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useCartContext } from "../store/CartContext";
import { Ionicons } from "@expo/vector-icons";

const Favorite = () => {
  const { favorites, removeFromFavorites } = useCartContext();

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity
        onPress={() => removeFromFavorites(item.id)}
        style={styles.removeBtn}
      >
        <Text style={styles.removeText}>Remove from favorites</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.flex}>
        <TouchableOpacity>
          <Ionicons
            name="chevron-back"
            size={20}
            color="black"
            style={styles.backBtn}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Fovorites</Text>
      </View>
      {favorites.length === 0 ? (
        <Text style={styles.noFavText}>No favorite items yet :-/</Text>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginLeft: 30,
  },
  item: {
    marginTop: 10,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
  },
  flex: {
    flexDirection: "row",
  },
  backBtn: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#E7ECF0",
    paddingLeft: 5,
    paddingTop: 4,
  },
  headerText: {
    fontSize: 16,
    marginLeft: 21,
    marginTop: 5,
  },
  noFavText: {
    marginTop: "80%",
    marginLeft: "16%",
    fontSize: 20,
  },
  thumbnail: {
    width: 30,
    height: 30,
    borderRadius: 6,
    marginTop: 4,
  },
  textContainer: {
    marginLeft: 10,
  },
  removeBtn: {
    backgroundColor: "#E7ECF0",
    width: 160,
    height: 30,
    borderRadius: 10,
    justifyContent: "center",
    paddingLeft: 10,
    marginLeft: 50,
  },
});

export default Favorite;
