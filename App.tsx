import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import Animation2 from './src/screen/animation2/Animation2';
import Animation from './src/screen/animation/Animation';
import Animation1 from './src/screen/animation1/Animation1';
import Animation3 from './src/screen/animation3/Animation3';
import Animation4 from './src/screen/animation4/Animation4';
import Animation5 from './src/screen/animation5/Animation5';
import Animation6 from './src/screen/animation6/Animation6';
import Animation7 from './src/screen/animation6/Animation7';

export default function Example() {
  const animation = useRef(new Animated.Value(0)).current;
  const [flag, setFlag] = useState(false);
  const onFouce = () => {
    setFlag(true);
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onCancle = () => {
    setFlag(false);
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };
  return (
    // <View style={{backgroundColor: 'black'}}>
    //   <StatusBar barStyle="light-content" />
    //   <Animated.View
    //     style={[
    //       styles.header,
    //       {
    //         transform: [
    //           {
    //             translateY: animation.interpolate({
    //               inputRange: [0, 1],
    //               outputRange: [0, -80],
    //             }),
    //           },
    //         ],
    //       },
    //     ]}>
    //     <Animated.Text style={[styles.headerTitle]}>
    //       Cheap flights{'\n'}to anywhere
    //     </Animated.Text>
    //     <View style={styles.inputWrapper}>
    //       <TextInput
    //         placeholder="Where are you going?"
    //         placeholderTextColor="#05141c"
    //         style={[styles.input, flag && {width: '90%'}]}
    //         onFocus={() => {
    //           onFouce();
    //         }}
    //       />
    //       {flag && (
    //         <TouchableOpacity
    //           onPress={() => {
    //             onCancle();
    //           }}>
    //           <Text style={{color: 'white'}}>Cancle</Text>
    //         </TouchableOpacity>
    //       )}
    //     </View>
    //   </Animated.View>
    //   <ScrollView style={styles.content}>
    //     <View style={{height: 200, backgroundColor: 'red', marginTop: 5}} />
    //     <View style={{height: 200, backgroundColor: 'red', marginTop: 5}} />
    //     <View style={{height: 200, backgroundColor: 'red', marginTop: 5}} />
    //   </ScrollView>
    // </View>
    <Animation7/>
  );
}
const styles = StyleSheet.create({
  content: {
    padding: 24,
    paddingTop: 162,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
    height: 150,
    backgroundColor: '#05141c',
  },
  headerTitle: {
    fontSize: 26,
    lineHeight: 34,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  input: {
    height: 44,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    width: '100%',
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
});
