import { StyleSheet, Text, View } from "react-native";
import { Link, router } from "expo-router";
import ForumCard from "../../components/forumCard";

export default function Forum(){
    return (
        <View style={styles.container}>
            <Text style={[styles.text_h1, {paddingTop:10}]}>Favoritos:</Text>
            <View style={{flexDirection:'row', gap:20}}>
                <ForumCard title={"IA"} data={"10/09/2023"} createdBy={"Ernani"} onPress={()=>router.push("/")} />
                <ForumCard title={"React"} data={"28/09/2023"} createdBy={"Paulo"} onPress={()=>router.push("/")} />
            </View>
            <View style={{flexDirection:'row', gap:20}}>
                <ForumCard title={"Redes"} data={"10/09/2023"} createdBy={"Marleide"} onPress={()=>router.push("/")} />
                <ForumCard title={"UI/UX"} data={"28/09/2023"} createdBy={"João"} onPress={()=>router.push("/")} />
            </View>
            <View style={styles.middle}>
                <Link href={'/'} asChild>   
                    <Text style={{color:"#31AFB4", fontWeight:'bold', marginVertical:10, fontSize:20}}>Criar novo tópico</Text>
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
    text_h1:{
        fontFamily:'RalewayBold',
        fontSize:25,
    },
    line:{
        width:'98%',
        alignItems:'center',
        alignSelf: 'center',
        borderBottomWidth: 1, // Largura da linha
        borderBottomColor: '#31AFB4', // Cor da linha
    },


})