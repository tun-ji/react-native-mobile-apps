import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Component2 from "./Component2";


type Props = {
  name?: string;
};
const Component3: React.FC<Props> = (props) => {
  //const [state, setState] = useState(initialState);
  const [name, setName] = useState(props.name);
  const [count, setCount] = useState(0);
  const changeNameToGreet = (text: string) => {
    setName(text);
  };
  // const textSize = useContext(fontSize)
  const styles = StyleSheet.create({
    text: {
      color: "#fff",
      // fontSize: textSize,
      fontSize: 12,
      backgroundColor: "blue",
      padding: 6,
      alignItems: "center",
    },
  });
  return (
    <View>
      <Text style={styles.text}>Hello {name}. Greetings from from React-Native.</Text>
      <View>
        <TextInput
          placeholder="Write a name here..."
          onChangeText={changeNameToGreet}
          // autoFocus
        />
      </View>
      <View>
        <Text style={styles.text}>You clicked {count} times</Text>
        <Button title="Rank" onPress={() => <Component2 name="Test" />}/>
        <Button title="Click Me" onPress={() => setCount(count + 1)} />
        <Button title="Clear" onPress={()=> setCount(0)} />       
      </View>
    </View>
  );
};

Component3.defaultProps = {
  name: "John",
};
export default Component3;
