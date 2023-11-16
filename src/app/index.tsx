import { Link, router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Login(){
    return (
        <View style={styles.container}>

            <Image style={{width:200, height:300}} source={require('../../public/appoioLogo.png')}/>

            <TextInput placeholder="E-mail" keyboardType="email-address" placeholderTextColor={'gray'} style={styles.TextInput} />
            <TextInput placeholder="Senha"secureTextEntry={true} placeholderTextColor={'gray'} style={styles.TextInput} />

            <Pressable style={styles.btn} onPress={()=> router.push('/(tabs)/home')} >
                <Text style={{color:"#FAF9F6", fontWeight:'bold', fontSize:20}}>Entrar</Text>
            </Pressable>

            <Pressable style={[styles.btn_outline]} onPress={()=> router.push('/register/')} >
                <Text style={{color:"#31AFB4", fontWeight:'bold', fontSize:20}}>Cadastre-se</Text>
            </Pressable>

            <Link href={'/(tabs)/home'} asChild>
                <Text style={{color:"#31AFB4", fontWeight:'bold', marginVertical:10, fontSize:20}}>Esqueceu a senha?</Text>
            </Link>

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
    
      btn_outline:{
        width:200,
        backgroundColor:'#FAF9F6',
        borderRadius: 8,
        padding:15,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        borderColor:"#31AFB4",
        borderWidth:2,
        marginVertical:3,
      }
    



})