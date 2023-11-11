import { Image, StyleSheet, Text, View } from "react-native";
import Card from "../../../components/card";

export default function Profile(){
    return (
        <View style={styles.container}>
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
                        <Image style={styles.img} source={require('../../../../public/userAppoio.png')}/>
                    </View>
                </View>
            </View>
            <View style={styles.line}/>
            <View style={styles.middle}>
                <Text style={styles.text_h1}>Trilhas</Text>
                <View style={styles.carrossel}>
                    <Card/> <Card/> <Card/> <Card/>
                </View>
            <View style={styles.line_carrossel} />
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#FAF9F6'
    },

    top:{
        flexDirection:'row',
        padding: 16
    },

    top_txt:{
        flex:1,
        flexDirection: 'column',
        gap:2,
        height:'auto'
    },

    top_img:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },

    middle:{
        flex:1,
        flexDirection:'column',
        gap:4,
        padding:16

    },

    carrossel:{
        flexDirection:'row',
        gap: 5
    },

    text:{
        fontFamily:'RalewayMedium'
    },

    text_h1:{
        fontFamily:'RalewayBold',
        fontSize:25,
    },

    text_h2:{
        fontFamily:'RalewayBold',
        fontSize:20,
    },

    circle:{
        height:100,
        width: 100,
        borderRadius: 50,
        borderWidth: 2,
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
        width:'100%',
        alignItems:'center',
        alignSelf: 'center',
        paddingTop: 30,
        borderBottomWidth: 1, // Largura da linha
        borderBottomColor: '#31AFB4', // Cor da linha
    },

    img:{
        height:98,
        width: 98,
        borderRadius: 50,
    }


})