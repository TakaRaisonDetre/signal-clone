import React, {useLayoutEffect, useState} from 'react'
import { StyleSheet, ScrollView, SafeAreaView, View, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons'
import CustomListItem from '../components/CustomListItem'
import {auth, db} from '../firebase'

const HomeScreen = ({navigation}) => {
    const [chats, setChats] = useState([])


const signOutUser =()=>{
    auth.signOut().then(()=>{
        navigation.replace('login')
    })
}

    useLayoutEffect(() => {
        navigation.setOptions({
          title:'Raison Detre Signal',
          headerStyle:{backgroundColor:'#fff'},
          headerTitleStyle:{color:"black"},
          headerTintColor:"black",
          headerLeft: () => (
            <View style={{marginLeft:20}}>
                <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                <Avatar rounded source={{uri:auth?.currentUser?.photoUrl }}/> 
                </TouchableOpacity>
        </View>
          ),
        headerRight:()=>(
           <View style={{
               flexDirection:"row",
               justifyContent:"space-between",
               width:80,
               marginRight:20
           }}>
               <TouchableOpacity activeOpacity={0.5}>
                  <AntDesign name="camerao" size={24} color="black"/>
               </TouchableOpacity >
               <TouchableOpacity onPress={()=>navigation.navigate("addChat")} activeOpacity={0.5}>
                  <SimpleLineIcons name="pencil" size={24} color="black"/>
               </TouchableOpacity >
           </View>
        )
         
        });
    }, [navigation])
    
    return (
        <SafeAreaView>
            <ScrollView>

            <CustomListItem/>

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

