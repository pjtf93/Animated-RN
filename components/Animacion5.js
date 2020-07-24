import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Animated,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

const Animacion5 = () => {
  const [animacion] = useState(new Animated.Value(1));
  const presionarBtn = () => {
    Animated.spring(animacion, {
      toValue: 0.8,
    }).start();
  };
  const soltarBtn = () => {
    Animated.spring(animacion, {
      toValue: 1,
      friction: 4, // mas bajo mayor rebote
      tension: 15,
    }).start();
  };

  const estiloAnimacion = {
    transform: [{scale: animacion}],
  };
  return (
    <View style={styles.contenedor}>
      <TouchableWithoutFeedback
        onPressIn={() => presionarBtn()}
        onPressOut={() => soltarBtn()}>
        <Animated.View style={[styles.btn, estiloAnimacion]}>
          <Text style={styles.Text}>Iniciar Sesion</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'cornflowerblue',
    height: 80,
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 28,
  },
});

export default Animacion5;
