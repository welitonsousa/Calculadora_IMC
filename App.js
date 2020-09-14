import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { COLORS } from './components/constants.js';

import {
  Colors,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {

  const [inputValueMassa, setMassa] = React.useState('');
  const [inputValueAltura, setAltura] = React.useState('');

  const [textResult, setResult] = React.useState('');
  const [secundTextResult, setSecundResult] = React.useState('');

  const changeResult = () => {
    const imc = parseFloat(inputValueMassa) / (Math.pow(parseFloat(inputValueAltura), 2))
    if (inputValueMassa != '' && inputValueMassa != '') {
      setResult(imc.toFixed(2))
      if (imc < 10)
        setSecundResult('Desnutrição grau V')

      else if (imc >= 10 && imc <= 12.9)
        setSecundResult('Desnutrição grau IV')

      else if (imc >= 13 && imc <= 15.9)
        setSecundResult('Desnutrição grau III')

      else if (imc >= 16 && imc <= 16.9)
        setSecundResult('Desnutrição grau II')

      else if (imc >= 17 && imc <= 18.4) 
        setSecundResult('Desnutrição grau I')
      
      else if (imc >= 18.5 && imc <= 24.9){
        setSecundResult('Peso ideal')
      }

      else if (imc >= 25 && imc <= 29.9)
        setSecundResult('Pré obesidade')

      else if (imc >= 30 && imc <= 34.9)
        setSecundResult('Obesidade I')

      else if (imc >= 35 && imc <= 39.9)
        setSecundResult('Obesidade II')

      else if (imc > 40)
        setSecundResult('Obesidade III')

    } else {
      alert('Os dados fornecidos são inválidos', 'asda')
    }
  }


  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView
        >
          {(
            <View>
              <View style={styles.inputs}>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder="Massa"
                  returnKeyType="next"
                  onChangeText={e => setMassa(e)}
                />
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder="Altura"
                  onSubmitEditing={() => changeResult()}
                  onChangeText={(e) => setAltura(e)}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Calcular"
                  onPress={() => changeResult()}
                />
              </View>
              <View><Text style={styles.result}>{textResult}</Text></View>
              <View><Text style={styles.result}>{secundTextResult}</Text></View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  inputs: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 30
  },

  input: {
    fontSize: 20,
    width: "40%",
    backgroundColor: "#ddd",
    borderRadius: 10,
    margin: 10,
  },

  button: {
    fontSize: 20,
    marginTop: 20,
    alignSelf: "center",
    width: "85%",
  },

  result: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: 38,
    color: COLORS.textColor,
  }
});

export default App;
