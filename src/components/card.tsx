import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.h1}>IA</Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.h2}>Último acesso:</Text>
            <Text style={styles.h3}>10/09/2023</Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.h2}>Concluído:</Text>
            <Text style={styles.h3}>56%</Text>
        </View>
        <Pressable style={styles.btn}>
          <Text style={styles.btn_content}>Ir</Text>
        </Pressable>
    </View>
  )
}

const styles =  StyleSheet.create({
  container: {
      width:'50%',
      flexDirection: 'column',
      flexShrink:1,
      gap: 2,
      padding:8,
      borderWidth:2,
      backgroundColor:'#FAF9F6',
      borderRadius:6,
      borderColor:"#31AFB4",
      justifyContent: 'flex-start',
  },

  h1:{
    fontFamily: 'RalewayBold',
    fontSize:30
  },

  h2:{
    fontFamily:'RalewayBold',
    fontSize:15
  },

  h3:{
    fontFamily:'RalewayMedium',
    fontSize:15
  },

  content:{
    flex:1,
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'space-between',
    gap: 4
  },

  btn:{
    backgroundColor:'#31AFB4',
    borderRadius: 8,
    width:'20%',
    padding:1,
    justifyContent:'center',
    alignItems:'center'
  },

  btn_content:{
    justifyContent:'center',
    alignItems:'center',
    color: '#FAF9F6',
    fontFamily: 'RalewayMedium'
  }
});
