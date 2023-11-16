import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function IndexPage(){
    return (
        <View style={styles.container}>
            <Link href="../(tabs)/home" asChild>
                <Button title="Home"/>
            </Link>
            <Text>
                Tela: (MODALS)/index
            </Text>
            <Link href="/menu" asChild>
                <Button title="MENU MODAL"/>
            </Link>
            <Text>
                Menu Modal
            </Text>
            <Link href="/teste" asChild>
                <Button title="TESTE"/>
            </Link>
            <Text>
                TESTE MODAL
            </Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF9F6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontWeight:'800',
        color: 'white',
        fontSize: 10
    }



})