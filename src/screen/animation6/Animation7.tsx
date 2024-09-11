import React, {useRef} from 'react';
import {StyleSheet, View, Animated, StatusBar, TextInput} from 'react-native';

export default function Example() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const translateHeader = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -80],
    extrapolate: 'clamp',
  });
  const opacityTitle = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const translateTitle = scrollY.interpolate({
    inputRange: [0, 90],
    outputRange: [0, 40],
    extrapolate: 'clamp',
  });
 
  return (
    <View style={{backgroundColor: 'black'}}>
      <StatusBar barStyle="light-content" />
      <Animated.View
        style={[styles.header, {transform: [{translateY: translateHeader}]}]}>
        <Animated.Text
          style={[
            styles.headerTitle,
            {opacity: opacityTitle},
            ,
            {transform: [{translateY: translateTitle}]},
          ]}>
          Cheap flights{'\n'}to anywhere
        </Animated.Text>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Where are you going?"
            placeholderTextColor="#05141c"
            style={styles.input}
            // onFocus={onFouce}
          />
        </View>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={styles.content}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: true,
          },
        )}
        scrollEventThrottle={1}>
        <View style={{height: 200, backgroundColor: 'red', marginTop: 5}} />
        <View style={{height: 200, backgroundColor: 'red', marginTop: 5}} />
        <View style={{height: 200, backgroundColor: 'red', marginTop: 5}} />
      </Animated.ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    padding: 24,
    paddingTop: 162,
    backgroundColor: '#fff',
  },
  /** Header */
  header: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
    height: 150,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
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
  /** Input */
  input: {
    height: 44,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
});
