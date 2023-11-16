import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

interface ForumCardProps{
  title?: string;
  createdBy?: string;
  data?:string;
  onPress?: () => void;

}

export default function ForumCard({title, createdBy, data, onPress}: ForumCardProps) {

  const [hover, setHover] = useState(false);

  function handleMouseIn(){
    setHover(true)
  }
  function handleMouseOut(){
    setHover(false)
  }

  return (
    <View onPointerEnter={handleMouseIn} onPointerLeave={handleMouseOut} style={hover?styles.container_hover:styles.container} >
        <View>
            <Text style={styles.h1}>{title}</Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.h2}>Criado por:</Text>
            <Text style={styles.h3}>{createdBy}</Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.h2}>Data:</Text>
            <Text style={styles.h3}>{data}</Text>
        </View>
        <Pressable style={styles.btn} onPress={onPress} >
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

  container_hover: {
    width:'50%',
    flexDirection: 'column',
    flexShrink:1,
    gap: 2,
    padding:8,
    borderWidth:2,
    backgroundColor:'#FAF9F6',
    borderRadius:6,
    shadowColor: '#CCFF33',
    shadowOffset: {width:1, height:3},
    shadowRadius: 1,
    borderColor:"#31AFB4",
    justifyContent: 'flex-start',
},

  h1:{
    fontFamily: 'RalewayBold',
    fontSize:30,
    
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
    alignItems:'center',
    gap: 4
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

});
