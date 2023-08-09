import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [data, setData] = useState([
    { text: "Shopping", key: 1 },
    { text: "Jogging", key: 2 },
    { text: "Play with Benny", key: 3 },
    { text: "Watch some Movies", key: 4 },
    { text: "Go to Burger King", key: 5 },
  ]);
  const [input, setInput] = useState("");

  const changeHandler = (value) => {
    setInput(value);
  };
  const pressButtonHandler = () => {
    if (input.length > 3) {
      setData((prevData) => {
        return [...prevData, { text: input, key: new Date().toString() }];
      });
      setInput("");
    } else {
      Alert.alert(
        "OOPS!",
        "what are you gonna do? at least put more than 3 character!",
        [
          {
            text: "OK",
            onPress: () => console.log("OK!"),
          },
        ]
      );
    }
    0;
  };
  const pressItemHandler = (key) => {
    setData((prevData) => {
      return prevData.filter((item) => item.key !== key);
    });
  };
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>To Do App</Text>
      </View>
      {/* content */}
      <View style={styles.content}>
        {/*form to add todo list  */}
        <View>
          <TextInput
            onChangeText={changeHandler}
            value={input}
            style={styles.input}
            placeholder="what's going todo..."
          />
          <Button title="Add" color="coral" onPress={pressButtonHandler} />
        </View>
        {/* list */}
        <View style={styles.list}>
          <ScrollView>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => pressItemHandler(item.key)}>
                  <Text style={styles.text}>{item.text}</Text>
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "coral",
    height: 80,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#444",
  },
  content: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    paddingHorizontal: 4,
    paddingVertical: 6,
    fontSize: 12,
  },
  text: {
    borderWidth: 1,
    borderColor: "#333",
    borderStyle: "dashed",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  list: {
    flex: 1,
  },
});
