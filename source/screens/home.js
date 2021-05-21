import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
    const [email,setEmail] = useState('');
    const [displayName,setDisplayName] = useState('');
    useEffect(() => {
        const {email,displayName} = auth().currentUser
        setEmail(email);
        setDisplayName(displayName);
    }, []);

    return (
        <View style={styles.container}>
            <Text>Welcome {displayName.split(" ")[0]} !</Text>
            <TouchableOpacity onPress={()=>auth().signOut()}>
                <Text>LGOUT</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})
