import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [count, setCounter] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {count}</Text>
      <Fab title="-1" onPress={() => setCounter(count - 1)} position="bl" />
      <Fab title="+1" onPress={() => setCounter(count + 1)} position="br" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
  },
});
