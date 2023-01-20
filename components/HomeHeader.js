import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SIZES, COLORS, FONTS, SHADOWS } from '../constants/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'

const HomeHeader = () => {
  return (
    <View style={{paddingHorizontal: SIZES.font,paddingTop: SIZES.medium,paddingBottom: SIZES.extraLarge , backgroundColor: COLORS.ternary}}>
        <View style={{marginVertical: SIZES.font}}>
            <Text style={{fontSize: SIZES.small,fontFamily: FONTS.light , color: COLORS.lightWhite}}>Pershendetje Klaus, ku do te shkojme sot?</Text>
        </View>
        <View style={{
            width: "100%", 
            borderRadius: SIZES.base, 
            backgroundColor: COLORS.lightWhite,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small,
            ...SHADOWS.dark
            }}>
            <Ionicons name='ios-search' size={SIZES.extraLarge} color={COLORS.lightBlack}></Ionicons>
            <TextInput style={{flex: 1, paddingLeft: 5, color: COLORS.lightBlack, fontFamily: FONTS.medium}} placeholderTextColor={COLORS.lightBlack} placeholder='Kerko evente ose biznese'></TextInput>
        </View>
    </View>
    
  )
}

export default HomeHeader