import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

interface ModalProps{
    title?: string;
    content: string;
}

export default function ModalComponent({title, content}:ModalProps) {

    const [isModalVisible, setIsModalVisible] = useState(true);
    
    return (
            <Modal visible={isModalVisible} animationType='slide' presentationStyle='overFullScreen' onRequestClose={()=>setIsModalVisible(false)} style={{width:'25%', height:'25%', justifyContent:'center', alignItems:'center'}}>
                <View style={styles.container}>
                        <View>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                        <View>
                            <Text style={styles.container}>{content}</Text>
                        </View>
                        <View>
                            <Pressable style={styles.btn} onPress={()=>setIsModalVisible(false)}>
                                <Text style={styles.btn_content}>ok</Text>
                            </Pressable>
                        </View>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({

    container:{
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        borderWidth:2,
        padding:8,
        backgroundColor:'#FAF9F6',
        borderRadius:6,
        borderColor:"#31AFB4",

    },

    title:{
        justifyContent:'center',
        alignContent:'center',
        fontFamily: 'RalewayBold',
        fontSize:30,
    },

    content:{
        justifyContent:'center',
        alignContent:'center',
        fontFamily:'RalewayMedium',
        fontSize:15
      },

      btn:{
        backgroundColor:'#31AFB4',
        borderRadius: 8,
        width:'18%',
        padding:2,
        justifyContent:'center',
        alignItems:'center'
      },

      btn_content:{
        justifyContent:'center',
        alignItems:'center',
        color: '#FAF9F6',
        fontFamily: 'RalewayMedium'
      },

})