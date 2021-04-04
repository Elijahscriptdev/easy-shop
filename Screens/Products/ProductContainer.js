import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
} from "react-native";

const data = require("../../assets/data/products.json");
const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
    return () => {
      setProducts([]);
    };
  }, []);

  console.log("Products", products);
  return (
    <View>
      <Text>Product Container</Text>
      <FlatList
      keyExtractor={item => item.name}
        data={products}
        renderItem={({ item }) => <Text>{item.brand}</Text>}
      />
    </View>
  );
};

export default ProductContainer;
