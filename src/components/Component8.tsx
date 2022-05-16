import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Component8ShowUsers from './Component8ShowUser';

const Component8: React.FC = () => {
    //const [state, setState] = useState(initialState);
    const [users, setUsers] = useState([]);//initialize users as empty array
    const styles = StyleSheet.create({
      text: {
        color: "#fff",
        fontSize: 12,
        backgroundColor: "blue",
        padding: 6,
        alignItems: "center",
      },
    });
    const fetchData = async (url: string) => {
        try {
            let response = await fetch(url);
            let data = await response.json()
            setUsers(data);
        } catch (error) {
            setUsers([]);
        }
    };
    useEffect(() => {
        fetchData(`https://jsonplaceholder.typicode.com/users`);
    }, []); //the second parameter [] will ensure that this useEffect runs only once.
    return (
        <View>
            <Text style={styles.text}>Greetings from Component8.</Text>
            <View>
                <Component8ShowUsers users={users} />
            </View>
        </View>
    )
}

export default Component8;