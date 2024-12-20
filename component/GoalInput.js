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
  Image,
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
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={handleInputValue}
          value={text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Close"
              onPress={props.onCloseModal}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGolaHndler} color="#b180f0" />
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

    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: "6px",
    width: "100%",
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
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
