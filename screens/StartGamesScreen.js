import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'

const StartGamesScreen = () => {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
      
    </View>
  )
}

export default StartGamesScreen

const styles = StyleSheet.create({})