import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import GoalItem from "./component/GoalItem";

export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);

  function handleInputValue(enteredText) {
    console.log(enteredText);
    setText(enteredText);
  }

  function addGolaHndler() {
    console.log(text);
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: text, id: Math.floor(Math.random() * 101) },
    ]);
    console.log(goals);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={handleInputValue}
        />
        <Button title="Add Goal" onPress={addGolaHndler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem itemData={itemData} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,

    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
