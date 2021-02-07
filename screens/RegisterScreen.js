import React , {useState}from 'react'
import { View,  KeyboardAvoidingView, StyleSheet ,StatusBar} from 'react-native'
import {Button, Text, Input, Image} from 'react-native-elements'

const RegisterScreen = ({navigation}) => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [imageUrl, setImageUrl] = useState('');

const register =()=>{

}

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
           <StatusBar style="light"/>
            <Text h3 style={{marginBottom:50}}>
                I am register screen
            </Text>
            <View style={styles.inputContainer}>
               <Input 
               onChangeText={(text)=>setName(text)}
               value ={name}
               autofocus type="text"
               placeholder ="Full Name"/>
                <Input 
               onChangeText={(text)=>setEmail(text)}
               value ={email}
               autofocus type="text"
               placeholder ="Email"/>
                <Input 
               onChangeText={(text)=>setPassword(text)}
               value ={password}
               autofocus type="text"
               placeholder ="password"/> 
                <Input 
               onChangeText={(text)=>setImageUrl(text)}
               value ={imageUrl}
               autofocus type="text"
               placeholder ="Profile Image (optional)"
               onSubmitEditing ={register}
               />
               
        
            </View>
            <Button 
           containerStyle={styles.button}
           raised 
           onPress={register} 
           title = "Register"/>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen


const styles = StyleSheet.create({
 container :{
   flex:1,
   alignItems:'center',
   justifyContent:'center',
   padding:10,
   backgroundColor:"white",
 },
 inputContainer:{
   width:300,
 },
 button:{
    width:200,
    marginTop:10,
 }
});