
import React, { useState } from 'react';
import BoxData from './BoxData';
import Detail from './Detail';
import { Text, StyleSheet, View, TouchableOpacity, Alert, ScrollView, SafeAreaView } from 'react-native';

const Home = () => {
  const [showedDetail, setShowedDetail] = useState(-1)
  const [data, setData] = useState([])
  async function fetchData() {
    try {
      const response = await fetch('https://testnets-api.opensea.io/api/v1/assets')
        .then(response => response.json())
        .then(data => { setData(data.assets) })
      // xử lý dữ liệu ở đây
    } catch (error) {
      console.error(error);
      // xử lý lỗi ở đây
    }

  }
  return (
    <SafeAreaView flex={1}>
      {showedDetail==-1 ?(
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={fetchData}>
          <Text style={styles.txtbtn}>LOAD</Text>
        </TouchableOpacity>
        <ScrollView>
          {
            data.map((item,i) =>
              <BoxData
                style={styles.cpn}
                url={item.image_url == null ? 'https://www.shutterstock.com/image-photo/black-alphabet-letter-word-null-260nw-1968602836.jpg' : item.image_url}
                name={item.name == null ? 'Name Null' : item.name}
                onPress={() => { setShowedDetail(i) }}
              />)
          }
        </ScrollView>
      </View>):(
        <Detail
          url={data[showedDetail].image_url == null ? 'https://www.shutterstock.com/image-photo/black-alphabet-letter-word-null-260nw-1968602836.jpg' : data[showedDetail].image_url}
          name={data[showedDetail].name == null ? 'Name Null' : data[showedDetail].name}
          onPress={() => { setShowedDetail(-1) }}
        ></Detail>
      )}
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  btn: {
    backgroundColor: 'blue',
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20

  },
  txtbtn: {
    fontSize: 27,
    fontWeight: 600,
    color: 'white'
  },
});

export default Home;