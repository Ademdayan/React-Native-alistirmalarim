import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'

const StartGamesScreen = () => {
  return (
    <View style={styles.inputcontainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>

    </View>
  )
}

export default StartGamesScreen

const styles = StyleSheet.create({
    inputcontainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
    },
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 100,
    },
})