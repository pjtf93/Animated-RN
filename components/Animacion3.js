import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Animated, View} from 'react-native';

const Animacion3 = () => {
  const [animacion] = useState(new Animated.Value(14));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 45, // al valor al que llega
      duration: 1000, // cantidad de tiempo en llegar
    }).start(); // iniciar la animacion
  }, []);
  return (
    <>
      <View>
        <Animated.Text style={[styles.texto, {fontSize: animacion}]}>
          Animaciones
        </Animated.Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animacion3;
