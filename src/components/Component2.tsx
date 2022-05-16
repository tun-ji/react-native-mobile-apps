import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
type Props = {
  name?: string;
};


const Component2: React.FC<Props> = (props) => {
  const styles = StyleSheet.create({
    text: {
      color: "#fff",
      fontSize: 12,
      backgroundColor: "blue",
      padding: 6,
      alignItems: "center",
    },
  });
  return (
    <View>
      <Text style={styles.text}>
        Hello <Text style={{ color: "red" }}>{props.name}</Text>. Greetings from React Native
      </Text>
    </View>
  );
};


Component2.defaultProps = {
  name: "John",
};
export default Component2;
