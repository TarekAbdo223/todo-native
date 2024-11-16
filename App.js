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
import GoalInput from "./component/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function deleteGoal(id) {
    console.log("Deleteddd");
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  function startAddGoalItem() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalItem} />
      <GoalInput
        setGoals={setGoals}
        modalIsVisible={modalIsVisible}
        onCloseModal={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem itemData={itemData} onDeleteInput={deleteGoal} />;
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

  goalsContainer: {
    flex: 5,
  },
});
