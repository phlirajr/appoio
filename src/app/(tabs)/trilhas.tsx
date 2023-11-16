import { StyleSheet, Text, View } from "react-native";
import Card from "../../components/card";
import { Link, router } from "expo-router";

export default function Trilhas(){
    
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', gap:20}}>
                <Card title={"IA"} data={"10/09/2023"} concluido={"18"} onPress={()=>router.push("/")} />
                <Card title={"React"} data={"28/09/2023"} concluido={"40"} onPress={()=>router.push("/")} />
            </View>
            <View style={{flexDirection:'row', gap:20}}>
                <Card title={"Redes"} data={"10/09/2023"} concluido={"18"} onPress={()=>router.push("/")} />
                <Card title={"UI/UX"} data={"28/09/2023"} concluido={"40"} onPress={()=>router.push("/")} />
            </View>
            <View style={styles.middle}>
                <Link href={'/'} asChild>   
                    <Text style={{color:"#31AFB4", fontWeight:'bold', marginVertical:10, fontSize:20}}>Criar nova trilha</Text>
                </Link>
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FAF9F6',
        padding: 46,
        flexDirection:'column',
        gap:20
    },
    middle:{
        flexDirection:'column',
        gap:4,

    },



})