import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native'


const Search = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}

export default Search