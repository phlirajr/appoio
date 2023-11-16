import { StyleSheet, Text, View } from "react-native";

export default function Modal(){
    return (
        <View style={styles.container}>
            <Text>
                Modal
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