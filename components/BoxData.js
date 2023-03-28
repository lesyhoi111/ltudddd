import React, {useState} from 'react';
import {Text, StyleSheet, View, Image, Touchable, TouchableOpacity} from 'react-native';

const BoxData = (props) => {

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Image
        style={styles.images} 
        source={{uri:props.url}}
        resizeMode='stretch'></Image>
        <View height={50}><Text style={styles.text}>{props.name}</Text></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
container:{
    justifyContent: 'center',
    alignItems:'center',
    marginBottom:50,
    elevation: 5,
    borderRadius:10,
    width:300,
},
images:{
  marginTop:10,
    width:280,
    height:250,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
},
text:{
    fontSize:25,
    color:'#333',
    
}
});

export default BoxData;
