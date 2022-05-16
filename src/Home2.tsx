import React from 'react';
import {StyleSheet, Button, SafeAreaView} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
type HomeScreenStackParamList = {
 HomeScreen: undefined; //no parameters expected to be passed to route when called
 Component1Screen: {demoParam:string};
 Component2Screen: {title:string} | undefined; //means that title may be optionally passed
 Component4Screen: undefined;
 Component5Screen: undefined;
 Component6Screen: undefined;
 Component7Screen: undefined;
 Component8Screen: undefined;
 Component9Screen: undefined;
};
type HomeScreenNavigationProp = StackNavigationProp<HomeScreenStackParamList, 'HomeScreen'>;
//if we are using route as well, make below available
//type HomeScreenRouteProp = RouteProp<HomeScreenStackParamList, 'HomeScreen'>;
type Props = {
 //route: HomeScreenRouteProp; //if using route
 navigation: HomeScreenNavigationProp;
};
/*Let's create a Home component that App will display as Home Screen. It can be whatever name you want*/
const Home: React.FC<Props> = ({navigation}) => { //We are not using route here at all; so we can as well pass only navigation
    return(
        <SafeAreaView style={styles.container}>
        <Button title="Go to Component6"
        onPress={()=> navigation.navigate('Component6Screen')}/>
        <Button title="Go to Component7"
        onPress={()=> navigation.navigate('Component7Screen')}/>
        <Button title="Go to Component8"
        onPress={()=> navigation.navigate('Component8Screen')}/>
        <Button title="Go to Component9"
        onPress={()=> navigation.navigate('Component9Screen')}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'stretch',
        justifyContent: 'center',
        fontSize: 18
    },
    logo:{
        width: 133,
        height: 55,
        paddingBottom: 50
    }
});

export default Home;