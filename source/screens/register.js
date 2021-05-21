import React,{useState} from 'react'
import { StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View,Image } from 'react-native'
import auth from '@react-native-firebase/auth';

const RegisterScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const handleRegister = () =>{
        auth().createUserWithEmailAndPassword(email,password)
        .then((usercredentials) => {
        //update credentials
            return usercredentials.user.updateProfile({
                displayName:username
            })

          })
          .catch(error => {
            if(error.code === "auth/user-not-found"){
                setError('User not found')
            };
            if (error.code === 'auth/invalid-email') {
                setError('That email address is invalid!');
            }
          }); 
    }
    return (
        <View style={styles.container}>
            <View style={{width:'100%'}}>
            <Image source={require('../assets/images/header.png')} style={{marginTop:-275,marginLeft:0,}} resizeMode={'contain'}/>
            </View>
            <Text style={styles.heading}>{'Hello,\n Lets get started'} </Text>
            <View style={styles.form}>
            <Text style={styles.label}>Full Name</Text>
                <TextInput autoCapitalize="none" style={styles.input} 
                onChangeText={text=>setUsername(text)}
                value={username}/>
                <Text style={[styles.label,{marginTop:20}]}>Email id</Text>
                <TextInput autoCapitalize="none" style={styles.input} 
                onChangeText={text=>setEmail(text)}
                value={email}/>
                <Text style={[styles.label,{marginTop:20}]}>Password</Text>
                <TextInput secureTextEntry autoCapitalize="none" style={styles.input}  
                onChangeText={text=>setPassword(text)}
                value={password}/>
            </View>
            <View style={styles.errorContainer}>
                <Text style={styles.errorMessage}>{error}</Text>
            </View>
            <TouchableHighlight style={styles.button} onPress={handleRegister}>
                <Text style={styles.loginText}>Signup</Text>
            </TouchableHighlight>
            <TouchableOpacity style={styles.footer} onPress={navigation.navigate('Login')}>
                <Text style={styles.footerText}>Have an account ? <Text style={styles.signupText}>Login</Text></Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    heading:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:"#544e50",
        marginTop:-150
    },
    errorContainer:{
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:30
    },
    errorMessage:{
        fontWeight:'300',
        fontSize:15,
        color:'#544e50'
    },
    form:{
        marginHorizontal:30,
        marginBottom:48,
        marginTop:50
    },
    label:{
        color:"#544e50",
        textTransform:'uppercase'
    },
    input:{
        borderBottomColor:'#544e50',
        borderBottomWidth:StyleSheet.hairlineWidth,
        height:42,
        fontSize:15,
        color:'#544e50'
    },
    button:{
        marginHorizontal:30,
        backgroundColor:'#f4717f',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',
    },
    loginText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'700',
        letterSpacing:0.5
    },
    footer:{
        marginTop:20,
        marginHorizontal:30,
        alignSelf:'center'
    },
    footerText:{
        color:'#544e50',
        fontWeight:'bold',
        fontSize:16
    },
    signupText:{
        fontWeight:'bold',
        color:'#f4717f',
        letterSpacing:0.5,
    }
})
