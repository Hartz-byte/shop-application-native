import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useCartContext } from "../store/CartContext";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity } = useCartContext();
  const [checkoutText, setCheckoutText] = useState("");
  const navigation = useNavigation();

  // subtotal price
  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  // total price with delivery charge
  const total = subtotal + 2;

  // checkout text
  const handleCheckout = () => {
    if (cart.length > 0) {
      setCheckoutText("Checkout successful!");

      // Clear the message after 5 seconds
      setTimeout(() => {
        setCheckoutText("");
      }, 5000);
    } else {
      setCheckoutText("Your cart is empty. Add items before checkout.");

      // Clear the message after 5 seconds
      setTimeout(() => {
        setCheckoutText("");
      }, 5000);
    }
  };

  return (
    <View>
      {/* back btn and text */}
      <View style={styles.mainContainer}>
        <View style={styles.flex}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons
              name="chevron-back"
              size={20}
              color="black"
              style={styles.backBtn}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Shopping Cart</Text>
        </View>

        {/* cart section */}
        <ScrollView contentContainerStyle={styles.container}>
          {cart.length === 0 ? (
            <Text style={styles.emptyText}>Your cart is empty :-/</Text>
          ) : (
            cart.map((product) => (
              <View key={product.id}>
                {/* cart products */}
                <View style={styles.product}>
                  <Image
                    source={{ uri: product.thumbnail }}
                    style={styles.image}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>{product.title}</Text>
                    <Text style={styles.text}>${product.price}</Text>
                  </View>

                  {/* incr decr btns */}
                  <View style={styles.flex2}>
                    <TouchableOpacity
                      style={styles.decreament}
                      onPress={() => decrementQuantity(product.id)}
                    >
                      <Entypo
                        name="minus"
                        size={18}
                        color="black"
                        style={styles.minus}
                      />
                    </TouchableOpacity>
                    <Text style={styles.count}>{product.quantity}</Text>
                    <TouchableOpacity
                      style={styles.decreament}
                      onPress={() => incrementQuantity(product.id)}
                    >
                      <Entypo
                        name="plus"
                        size={18}
                        color="black"
                        style={styles.minus}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.border} />
              </View>
            ))
          )}
        </ScrollView>

        {/* price section */}
        <View style={styles.priceContainer}>
          <View style={styles.flex3}>
            <Text style={styles.leftText}>Subtotal</Text>
            <Text style={styles.rightText}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.flex3}>
            <Text style={styles.leftText}>Delivery</Text>
            <Text style={styles.rightText}>$2.00</Text>
          </View>
          <View style={styles.flex3}>
            <Text style={styles.leftText}>Total</Text>
            <Text style={styles.rightText}>${total.toFixed(2)}</Text>
          </View>

          {/* checkout btn */}
          <TouchableOpacity
            style={styles.checkoutBtn}
            onPress={handleCheckout}
            activeOpacity={0.8}
          >
            <Text style={styles.checkoutText}>Proceed To Checkout</Text>
          </TouchableOpacity>
        </View>

        {/* Display checkout message */}
        {checkoutText !== "" && (
          <Text style={styles.checkoutMessage}>{checkoutText}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: 30,
    marginTop: 60,
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
  emptyText: {
    marginLeft: "22%",
    marginTop: "80%",
    fontSize: 20,
  },
  product: {
    marginTop: 50,
    flexDirection: "row",
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 5,
    marginTop: 4,
  },
  textContainer: {
    marginLeft: 20,
  },
  text: {
    fontSize: 14,
    color: "#1E222B",
  },
  flex2: {
    flexDirection: "row",
    marginLeft: "32%",
  },
  decreament: {
    width: 40,
    height: 40,
    backgroundColor: "#E7ECF0",
    borderRadius: 30,
    justifyContent: "center",
  },
  count: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  minus: {
    paddingLeft: 10,
  },
  border: {
    width: "90%",
    height: 1,
    marginTop: 15,
    backgroundColor: "#E7ECF0",
  },
  container: {
    flexGrow: 1,
    width: "100%",
    height: 480,
  },
  flex3: {
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 36,
    justifyContent: "space-between",
  },
  priceContainer: {
    width: 310,
    height: 266,
    backgroundColor: "#E7ECF0",
    borderRadius: 30,
  },
  leftText: {
    fontSize: 14,
    color: "#616A7D",
  },
  rightText: {
    fontSize: 14,
    color: "#1E222B",
    marginRight: 36,
  },
  checkoutBtn: {
    width: 280,
    height: 46,
    backgroundColor: "#2A4BA0",
    marginTop: 22,
    marginLeft: 15,
    borderRadius: 20,
    justifyContent: "center",
  },
  checkoutText: {
    paddingLeft: 80,
    color: "white",
  },
  checkoutMessage: {
    position: "absolute",
    marginTop: "70%",
    marginLeft: 12,
    fontSize: 15,
  },
});

export default Cart;
