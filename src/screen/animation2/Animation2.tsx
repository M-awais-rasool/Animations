import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Animation2() {
  const [lan1, setLang1] = useState('');
  const [data, setData] = useState();
  useEffect(() => {
    // getData();
  }, []);
  const getData = () => {
    fetch(`https://api.mymemory.translated.net/get?q=${lan1}!&langpair=en|ur`)
      .then(response => response.json())
      .then(data => {
        setData(data.responseData.translatedText);
        console.log(data.responseData.translatedText);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={{backgroundColor: '#303134'}}>
      <View style={style.container}>
        <Text style={style.headingText}>Translate</Text>
        <TextInput
          placeholder="Enter Text"
          placeholderTextColor={'white'}
          style={style.input}
          onChangeText={(e: any) => {
            setLang1(e)
          }}
        />
        {lan1 != '' && (
          <View>
            <View style={style.line} />
            <Text style={style.headingText}>{data}</Text>
          </View>
        )}
      </View>
      <View>
        <View style={style.container1}>
          <TouchableOpacity>
            <Text style={style.btn}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>getData()}>
            <Text style={style.btn}>Translate</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.btn}>Urdu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: '85%',
    width: '100%',
    backgroundColor: '#1f1f1f',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  headingText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  container1: {
    height: '15%',
    width: '100%',
    backgroundColor: '#303134',
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  input: {
    paddingLeft: 10,
    height: 100,
    textAlignVertical: 'top',
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  btn: {
    width: 70,
    height: 40,
    backgroundColor: '#1f1f1f',
    color: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  line: {
    width: '50%',
    alignSelf: 'center',
    backgroundColor: 'blue',
    height: 2,
  },
});
