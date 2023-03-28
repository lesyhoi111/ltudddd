import React, {useState} from 'react';
import {Text, StyleSheet, View, Image, Touchable, TouchableOpacity} from 'react-native';

const Detail = (props) => {

  return (
    <View style={styles.container} onPress={props.onPress}>
        <Image
        style={styles.images} 
        source={{uri:props.url}}
        resizeMode='stretch'></Image>
        <View style={{width:'100%', justifyContent:'center',alignItems:'center',paddingVertical:10}}><Text style={styles.text}>{props.name}</Text></View>
        <View flex={1}></View>
        <TouchableOpacity style={styles.btn} onPress={props.onPress}>
        <Text style={styles.txtbtn}>Back</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
container:{
    alignItems:'center',
    flex:1
},
images:{
    width:'100%',
    height:290,
},
text:{
    fontSize:27,
    color:'#333', 
    fontWeight:400  
},
btn: {
    backgroundColor: 'blue',
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 20

  },
  txtbtn: {
    fontSize: 27,
    fontWeight: 600,
    color: 'white'
  },
});

export default Detail;
