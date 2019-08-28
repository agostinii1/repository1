import React from "react";
import { View, StyleSheet, Text } from "react-native";

const printClass = props => {
  return (
    <View>
      <Text>text1</Text>
      <Text>text2 {props.rat}</Text>
    </View>
  );
};

export default printClass;
