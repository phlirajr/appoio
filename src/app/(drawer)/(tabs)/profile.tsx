import { Image, StyleSheet, Text, View } from "react-native";

export default function Home(){
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </View>
                <View >
                    <View style={styles.circle}>
                        <Image style={styles.img}source={require('../../../../public/userAppoio.png')}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
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

    img:{
        height:100,
        width: 100,
        borderRadius: 50,
    }


})