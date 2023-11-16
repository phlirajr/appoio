import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Register(){
    return (
        <View style={styles.container}>
            <Image style={{width:200, height:300}} source={require('../../../public/appoioLogo.png')}/>
            <TextInput placeholder="Nome" placeholderTextColor={'gray'} style={styles.TextInput} />
            <TextInput placeholder="E-mail" placeholderTextColor={'gray'} textContentType='emailAddress' keyboardType="email-address"  style={styles.TextInput}/>
            <TextInput placeholder="Senha" placeholderTextColor={'gray'} textContentType="password" secureTextEntry={true} style={styles.TextInput} />
            <TextInput placeholder="Confirmar senha" placeholderTextColor={'gray'} textContentType="password" secureTextEntry={true} style={styles.TextInput} />

            <Pressable style={styles.btn} onPress={()=> router.push('/(tabs)/home')} >
                <Text style={{color:"#FAF9F6", fontWeight:'bold', fontSize:20}}>Cadastrar</Text>
            </Pressable>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF9F6',
        justifyContent: 'center',
        alignItems: 'center',
        padding:50,
        borderColor:"#31AFB4",
        flexShrink:1
    },
    text:{
        fontWeight:'800',
        color: 'white',
        fontSize: 10
    },

    TextInput: {
        borderRadius: 20,
        borderBottomWidth: 2,
        borderColor: "#02ada2",
        color: "#02ada2",
        margin: 20,
        padding: 20,
        marginRight:0,
        paddingRight:0,
        fontSize: 20
    },
    email: {
        borderColor: "#02ada2",
        color: "#02ada2",
        fontSize: 20
    },

    btn:{
        width:200,
        backgroundColor:'#31AFB4',
        borderRadius: 8,
        padding:15,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        marginVertical:3
      },



})