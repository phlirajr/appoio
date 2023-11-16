import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { Link } from "expo-router";

export default function Perfil(){

    
    function MyCheckbox() {
        const [checked, setChecked] = useState(false);
        return (
          <Pressable
            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
            onPress={() => setChecked(!checked)}>
            {checked && <Ionicons name="checkmark" size={30} color="#FAF9F6"/>}
          </Pressable>
        );
      }

    return (
        <ScrollView style={styles.container}>
        <View style={styles.top}>
        <View style={styles.top_txt}>
            <Text style={styles.text_h2}>User</Text>
            <Text style={styles.text}>Análise e Desenvolvimento de Sistemas</Text>
            <Text style={styles.text}>Status: Coding</Text>
            <Text style={styles.text}>2023.1</Text>
            <Text style={styles.text}>Front-End Developer</Text>
        </View>
        <View style={styles.top_img}>
            <View style={styles.circle}>
                <Image style={styles.img} source={require('../../../public/userAppoio.png')}/>
            </View>
        </View>
    </View>
    <View style={styles.line}/>
    <View style={styles.middle}>
                <Text style={[styles.text_h1, {paddingTop:10}]}>Alterar senha</Text>
                <View style={styles.inputs}>
                    <TextInput style={styles.input}
                        textContentType= {"password"}secureTextEntry = {true} placeholder= "Senha" placeholderTextColor={'gray'}>
                    </TextInput>
                    <TextInput style={styles.input}
                        textContentType= {"password"}secureTextEntry = {true} placeholder= "Nova Senha"       placeholderTextColor={'gray'}>
                    </TextInput>
                    <TextInput style={styles.input}
                        textContentType= {"password"}secureTextEntry = {true} placeholder= "Confirmar nova Senha"       placeholderTextColor={'gray'}>
                    </TextInput>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
                        <Pressable style={styles.btn}>
                            <Text style={styles.btn_content}>Salvar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.line}/>
            <View style={[styles.middle, {gap:15}]}>
                <Text style={[styles.text_h1, {paddingTop:10}]}>Notificações</Text>
                <View style={{flex:1, flexDirection:"row", alignContent:'center'}}>
                    <MyCheckbox/>
                    <Text style={[styles.text, {paddingLeft:10, paddingTop:3, fontFamily:'RalewayMedium'}]}>Exibir status</Text>
                </View>
                <View style={{flex:1, flexDirection:"row", alignContent:'center'}}>
                    <MyCheckbox/>
                    <Text style={[styles.text, {paddingLeft:10, paddingTop:3, fontFamily:'RalewayMedium'}]}>Receber notificações por e-mail</Text>
                </View>
                <View style={{flex:1, flexDirection:"row", alignContent:'center'}}>
                    <MyCheckbox/>
                    <Text style={[styles.text, {paddingLeft:10, paddingTop:3, fontFamily:'RalewayMedium'}]}>Permitir marcação em forum</Text>
                </View>
            </View>
            <View style={styles.line}/>
            <View style={styles.middle}>
                <Link href={'/'} asChild>   
                    <Text style={{color:"#31AFB4", fontWeight:'bold', marginVertical:10, fontSize:20}}>Excluir a conta</Text>
                </Link>
            </View>
    </ScrollView>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#FAF9F6',
        padding: 30
    },

    top:{
        flexDirection:'row',
        padding: 16,
        justifyContent:'space-between'
    },

    top_txt:{
        flex:1,
        flexDirection: 'column',
        gap:2,
        height:'auto',
        justifyContent:'center'
    },

    top_img:{
        flex:1,
        justifyContent:'flex-end',        
        alignItems:'flex-end',
        alignContent:'center'
    },

    middle:{
        flexDirection:'column',
        gap:4,
        padding:16

    },

    inputs:{
        flex:1,
        flexDirection:'column',
        gap: 20
    },

    input:{
        width:'50%',
        borderBottomColor: "#31AFB4",
        borderBottomWidth: 2,
        padding: 4,
        fontWeight: '200'
    },

    grades:{
        width:'55%',
        flexDirection:'column',
        gap: 5
    },

    text:{
        fontFamily:'RalewayMedium'
    },

    text_h1:{
        fontFamily:'RalewayBold',
        fontSize:25,
        paddingBottom:10
    },

    text_h2:{
        fontFamily:'RalewayBold',
        fontSize:20,
    },

    circle:{
        height:120,
        width: 120,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#31AFB4',    
        alignItems: 'center',
        justifyContent: 'center'
    },

    line:{
        width:'98%',
        alignItems:'center',
        alignSelf: 'center',
        borderBottomWidth: 1, // Largura da linha
        borderBottomColor: '#31AFB4', // Cor da linha
    },

    line_carrossel:{
        width:'98%',
        alignItems:'center',
        alignSelf: 'center',
        paddingTop: 30,
        borderBottomWidth: 1, // Largura da linha
        borderBottomColor: '#31AFB4', // Cor da linha
    },

    img:{
        height:116,
        width: 116,
        borderRadius: 50,
    },

    btn:{
        backgroundColor:'#31AFB4',
        borderRadius: 8,
        width:'15%',
        padding:6,
        justifyContent:'center',
        alignItems:'center'
      },
    
      btn_content:{
        justifyContent:'center',
        alignItems:'center',
        color: '#FAF9F6',
        fontFamily: 'RalewayMedium'
      },

      checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#31AFB4',
        backgroundColor: 'transparent',
      },
      checkboxChecked: {
        backgroundColor: '#CCFF33',
      },


})