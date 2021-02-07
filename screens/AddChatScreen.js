import { NavigationHelpersContext } from '@react-navigation/native'
import React , {useLayoutEffect, useState}from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {Button, Input, Icon} from 'react-native-elements'
import { db } from '../firebase'

const AddChatScreen = ({navigation}) => {
  const [input , setInput] = useState()


  useLayoutEffect(() => {
     navigation.setOptions({
         title: 'Add new chat',
         headerBackTitle: 'Chats',
         

     });
  }, [navigation])

  const createChat = async() =>{
      await db.collection('chats').add({
          chatName:input
      }).then(()=>{
          navigation.goBack()
      }).catch((error)=> alert(error))
  }
  
    return (
        <View style={styles.container}>
            <Input 
             leftIcon ={
                 <Icon name="wechat" type="antdesign" size={24} color="black"/>
             }
             onSubmitEditing={createChat}
             onChangeText = {(text)=>setInput(text)}
             value = {input}
             placeholder="Enter a chat name"
            ></Input>
            <Button onPress={createChat} title="Create new Chat"/>
        </View>
    )
}

export default AddChatScreen

const styles=StyleSheet.create({
    container:{
    backgroundColor :"white",
    padding: 30,
    height: '100%',
    }
})

