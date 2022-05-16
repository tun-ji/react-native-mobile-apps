import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";


type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type Props = {
  user: User; 
};
const Component5ShowUser: React.FC<Props> = (props) => {
  const styles = StyleSheet.create({
    text: {
      color: "#fff",
      fontSize: 12,
      backgroundColor: "blue",
      padding: 6,
      alignItems: "center",
    },
  });
  const showUser = () => {
    const user: User = props.user;
    try {
      if (user.id !== undefined) {
        return (
          <View>
            <Text style={styles.text}>User data fetched from remote source:</Text>
            <Text style={styles.text}>id: {user.id}</Text>
            <Text style={styles.text}>name: {user.name}</Text>
            <Text style={styles.text}>username: {user.username}</Text>
            <Text style={styles.text}>email: {user.email}</Text>
            <Text style={styles.text}>street address: {user.address.street}</Text>
            <Text style={styles.text}>phone: {user.phone}</Text>
            <Text style={styles.text}>website: {user.website}</Text>
            <Text style={styles.text}>company name: {user.company.name}</Text>
          </View>
        );
      } else {
        return <Text style={styles.text}>No user to display</Text>; //user is null or elements are undefined
      }
    } catch (error: any) {
      return <Text style={styles.text}>Problem displaying user: ${error.message}</Text>;
    }
  };

  return <View>{showUser()}</View>;
};

Component5ShowUser.defaultProps = {
  user: undefined,
};


export default Component5ShowUser;
