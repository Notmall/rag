import React from 'react';
import { Text, View, Image, TextInput, Button, Alert } from 'react-native';
import Icon from '@expo/vector-icons/Foundation' 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
export default class Register extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
     
          padding: 40,
          paddingTop: 70,
          backgroundColor: 'white'
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Image
            source={require('../assets/bg.jpg')}
            style={{
              width: "100%",
              height: 200,
               borderRadius: 100 / 2,
               display:"block"
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          registration
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            marginBottom: 50,
            marginTop:20,
          }}>
          введите пароль и логин 
        </Text>

        <View
          style={{
            
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderColor: '#152647',
            paddingVertical: 5,
            borderRadius: 15,
            backgroundColor:'black'
          }}>
          <MaterialCommunityIcons name="email-outline" size={24} color="#152647" />
          <TextInput placeholder="Email"  placeholderTextColor='#b4bccc' style={{ paddingHorizontal: 10, color:'#b4bccc' }} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderColor: '#152647',
            paddingVertical: 5,
            borderRadius: 15,
            backgroundColor:'black'
          }}>
          <AntDesign name="lock" size={24} color="#152647" />
          <TextInput
            placeholder="password"
            placeholderTextColor='#b4bccc'
            secureTextEntry
            style={{ paddingHorizontal: 10 }}
          />
        </View>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 2,
          marginBottom: 30,
          paddingHorizontal: 10,
          borderColor: '#152647',
          paddingVertical: 5,
          borderRadius: 15,
          backgroundColor:'black'
        }}>
          <AntDesign name="unlock" size={24} color="#152647" />
          <TextInput 
            placeholder="repeat password"
            placeholderTextColor='#b4bccc'
            secureTextEntry
            style={{paddingHorizontal: 10}}
          />
        </View>

        <Button 
          title="register"
          color="black"
         
          onPress={() => Alert.alert('thanks for registrairion')} 
        />
        <View style={{alignItems:'center', marginTop:20,}}>
        <Text style={{fontSize:16, color:"#152647"}}>already been here?</Text>
        <Text 
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16,
            marginTop: 10,
            color: 'red'
          }}
          onPress={() =>
            this.props.navigation.navigate('Login')
          }
        >
          log in
        </Text>
        </View>
        

      </View>
    );
  }
}