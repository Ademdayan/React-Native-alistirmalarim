import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGamesScreen = () => {
  return (
    <View style={styles.inputcontainer}>
     <View style={styles.input}>
     <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
     </View>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGamesScreen;

const styles = StyleSheet.create({
  inputcontainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 10,
    backgroundColor: "red",
   //alignItems: "center",
   //justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    
  },
  numberInput: {
    height: 50,
    width: 70,
    fontSize: 32,
    color: "black",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    //backgroundColor: 'white',
    marginVertical: 10,
    textAlign: "center",
    fontWeight: "bold",
    textAlign: "center",
    
  },
  input: {
  alignItems: "center",
  justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
});
