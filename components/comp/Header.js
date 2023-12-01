import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SimpleLineIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const [searchText, setSearchText] = useState(true);
  const navigation = useNavigation();

  const navigateToCart = () => {
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.header}>
      {/* hey text & cart icon */}
      <View style={styles.topText}>
        <Text style={styles.hiText}>Hey, Harsh</Text>
        <TouchableOpacity style={styles.cartIcon} onPress={navigateToCart}>
          <SimpleLineIcons name="handbag" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* search bar */}
      <View style={styles.inputContainer}>
        {/* search btn */}
        <TouchableOpacity>
          <AntDesign
            style={styles.searchBtn}
            name="search1"
            size={15}
            color="#F8F9FB"
          />
        </TouchableOpacity>

        {/* search space */}
        <TextInput
          placeholder="Search Products or store"
          placeholderTextColor="#8891A5"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          style={styles.textInputContainer}
        />

        {/* clear cross btn */}
        {searchText.length > 0 ? (
          <TouchableOpacity>
            <Entypo
              name="cross"
              size={22}
              color="gray"
              style={styles.crossBtn}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>

      {/* delivery and time */}
      <View style={styles.deliveryTime}>
        <View style={styles.deliveryText}>
          <Text style={styles.lightColor}>DELIVERY TO</Text>
          <Text style={styles.darkColor}>Green Way 3000, Sylhet</Text>
        </View>
        <View style={styles.timeText}>
          <Text style={styles.lightColor}>WITHIN</Text>
          <Text style={styles.darkColor}>1 Hour</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 252,
    backgroundColor: "#2A4BA0",
  },
  topText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hiText: {
    color: "white",
    fontSize: 22,
    marginTop: "17%",
    marginLeft: "6%",
  },
  cartIcon: {
    marginTop: "17%",
    marginRight: "7%",
  },
  inputContainer: {
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "#153075",
    alignItems: "center",
    padding: "3%",
    marginTop: "8%",
    marginLeft: "6%",
    marginRight: "6%",
  },
  searchBtn: {
    marginLeft: 10,
  },
  textInputContainer: {
    marginLeft: 8,
    color: "#8891A5",
  },
  deliveryTime: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deliveryText: {
    marginTop: "7%",
    marginLeft: "6%",
  },
  timeText: {
    marginTop: "7%",
    marginRight: "6%",
  },
  lightColor: {
    fontSize: 11,
    color: "#A9B4BC",
  },
  darkColor: {
    fontSize: 14,
    color: "#F8F9FB",
  },
  crossBtn: {
    paddingLeft: "30%",
  },
});
