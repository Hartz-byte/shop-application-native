import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Header from "../comp/Header";
import Discount from "../comp/Discount";
import Recommend from "../comp/Recommend";

import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`);
        const result = await response.json();
        // console.log(result.products);
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={styles.indicator}
      />
    );
  }

  const navigation = useNavigation();

  return (
    <ScrollView>
      {/* header section */}
      <Header />

      {/* discount card section */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data.products}
        contentContainerStyle={styles.flatlistContainer}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Detail", {
                  index: item.id,
                  id: item.id,
                  title: item.title,
                  rating: item.rating,
                  images: item.images,
                  price: item.price,
                  discountPercentage: item.discountPercentage,
                  description: item.description,
                });
              }}
            >
              <Discount
                discountPercentage={item.discountPercentage}
                thumbnail={item.thumbnail}
              />
            </TouchableOpacity>
          );
        }}
      />

      {/* recommended card section */}
      <Text style={styles.recommended}>Recommended</Text>
      <FlatList
        data={data.products}
        contentContainerStyle={styles.flatlistContainer}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Detail", {
                  index: item.id,
                  id: item.id,
                  title: item.title,
                  rating: item.rating,
                  images: item.images,
                  price: item.price,
                  discountPercentage: item.discountPercentage,
                  description: item.description,
                });
              }}
            >
              <Recommend
                id={item.id}
                thumbnail={item.thumbnail}
                price={item.price}
                title={item.title}
              />
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    gap: 20,
    margin: 25,
    rowGap: 20,
  },
  recommended: {
    // fontFamily: "Manrope",
    fontSize: 30,
    marginLeft: 25,
  },
});

export default Home;
