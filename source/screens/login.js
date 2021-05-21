import React,{useState} from 'react'
import { StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View ,Image} from 'react-native'
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const handleLogin = () =>{
        auth().signInWithEmailAndPassword(email,password)
        .then(() => {
            //handleNavigation
            console.log('User account created & signed in!');
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
            <View style={{marginHorizontal:30}}>
            <Image source={require('../assets/images/logo.png')} style={{marginTop:-140, width:100,height:100,alignSelf:'center'}} resizeMode={'contain'}/>
            </View>
            <Text style={styles.heading}>Nerd Bowl</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Email id</Text>
                <TextInput autoCapitalize="none" style={styles.input} onChangeText={email=>setEmail(email)} value={email}/>
                <Text style={[styles.label,{marginTop:20}]}>Password</Text>
                <TextInput secureTextEntry autoCapitalize="none" style={styles.input}  onChangeText={pass=>setPassword(pass)}
                value={password}/>
            </View>
            <View style={styles.errorContainer}>
                <Text style={styles.errorMessage}>{error}</Text>
            </View>
            <TouchableHighlight style={styles.button} onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>
            <TouchableOpacity style={styles.footer} onPress={navigation.navigate('Register')}>
                <Text style={styles.footerText}>New to Nerd Bowl ? <Text style={styles.signupText}>Signup</Text></Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    heading:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:-40,
        letterSpacing:0.5,
        textAlign:'center',
        color:"#544e50",
        textTransform:'uppercase'
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
        marginTop:20
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
