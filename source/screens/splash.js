import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';

const SplashScreen = ({navigation}) => {
    const [initializing, setInitializing] = useState(true);
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(user=>{
            if(initializing) setInitializing(false);
            navigation.navigate(user ? "Home":"Login")
        });
        return subscriber; // unsubscribe on unmount
    }, []);

    return (
        <View style={styles.container}>
            <Text>SplashScreen</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        
    }
})
