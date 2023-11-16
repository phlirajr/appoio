import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../../components/card";
import { router } from "expo-router";

export default function Profile(){
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
                <Text style={styles.text_h1}>Trilhas</Text>
                <View style={styles.carrossel}>
                    <Card title={"IA"} data={"08/09/2023"} concluido={"56"} onPress={()=>router.push("/")} />
                    <Card title={"IHC"} data={"09/10/2023"} concluido={"67"} onPress={()=>router.push("/")} />
                    <Card title={"Python"} data={"10/11/2023"} concluido={"81"} onPress={()=>router.push("/")} />
                    <Card title={"Node"} data={"11/12/2023"} concluido={"92"} onPress={()=>router.push("/")} />
                </View>
            </View>
            <View style={styles.line_carrossel} />
            <View style={styles.middle}>
                <Text style={styles.text_h1}>Disciplinas</Text>
                <View style={styles.grades}>
                    <Card title={"IA"} data={"08/09/2023"} concluido={"56"} onPress={()=>router.push("/")} />
                    <Card title={"POO"} data={"09/10/2023"} concluido={"67"} onPress={()=>router.push("/")} />
                    <Card title={"Angular"} data={"10/11/2023"} concluido={"81"} onPress={()=>router.push("/")} />
                    <Card title={"Banco de Dados"} data={"11/12/2023"} concluido={"92"} onPress={()=>router.push("/")} />
                </View>
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

    carrossel:{
        flex:1,
        flexDirection:'row',
        gap: 5
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
    }


})