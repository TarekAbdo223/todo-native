import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

const GoalInput = (props) => {
  const [text, setText] = useState("");

  function handleInputValue(enteredText) {
    console.log(enteredText);
    setText(enteredText);
  }

  function addGolaHndler() {
    console.log(props.text);
    props.setGoals((prevGoals) => [
      ...prevGoals,
      { text: text, id: Math.floor(Math.random() * 101) },
    ]);
    setText("");
    props.onCloseModal();
  }
  return (
    <Modal animationType="slide" visible={props.modalIsVisible}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={handleInputValue}
          value={text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGolaHndler} />
          </View>
          <View style={styles.button}>
            <Button title="Close" onPress={props.onCloseModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    flex: 1,
    paddingHorizontal: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",

    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginTop: 16,
  },
  button: {
    width: 120,
  },
});
