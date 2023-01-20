import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS, FONTS } from '../constants/theme'


const BusinessCard = (props) => {
  return (
    <View style={{
      backgroundColor: "transparent",
      marginRight: SIZES.medium,
      paddingTop: 10,
      width: 200
    }}>
        <Image source={{uri: props.data.image}} style={{
          width: "100%",
          height: 170,
          borderRadius: SIZES.font,
          ...SHADOWS.dark
        }}/>
        
        <Text style={{
          color: COLORS.lightWhite,
          fontSize: SIZES.large,
          fontFamily: FONTS.bold
        }}>
        {props.data.name}
        </Text>
        <Text style={{
          color: COLORS.lightWhite,
          fontSize: SIZES.font,
          fontFamily: FONTS.medium
        }}>
        {props.data.type}
        </Text>
          
    </View>
  )
}

export default BusinessCard