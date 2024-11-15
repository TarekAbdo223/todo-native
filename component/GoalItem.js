import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = ({ itemData }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.textGoalItem}>{itemData.item.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderWidth: 1,
    backgroundColor: "#5e0acc",
    borderRadius: 4,
  },
  textGoalItem: {
    color: "white",
  },
});
