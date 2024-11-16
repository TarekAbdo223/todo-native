import React from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";

const GoalItem = ({ itemData, onDeleteInput }) => {
  console.log(itemData);

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onDeleteInput.bind(this, itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressesItem}
      >
        <Text style={styles.textGoalItem}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderWidth: 1,
    backgroundColor: "#5e0acc",
    borderRadius: 4,
  },
  textGoalItem: {
    color: "white",
    padding: 8,
  },
  pressesItem: {
    backgroundColor: "#4a0080",
    borderColor: "#4a0080",
    borderWidth: 1,
    opacity: 0.5,
  },
});
