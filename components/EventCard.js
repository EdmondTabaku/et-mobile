import { View, Text, Image, Dimensions, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS, FONTS } from '../constants/theme'
import LinearGradient from 'react-native-linear-gradient'

const { width, heigth } = Dimensions.get('window')

const EventCard = (props) => {
  return (
    <View style={{
      backgroundColor: "transparent",
      marginRight: SIZES.medium,
      paddingRight: SIZES.font,
      paddingTop: 10,
      width: width - SIZES.font,
      height: 250
    }}>
        <Image source={{uri: props.data.image}} style={{
          width: "100%",
          height: "100%",
          borderRadius: SIZES.font,
          ...SHADOWS.dark
        }}/>
        <ImageBackground source={{uri: props.data.image}} style={{
          width: "100%",
          height: "100%",
          borderRadius: SIZES.font,
          ...SHADOWS.dark
        }}>
            <LinearGradient 
                colors={['#00000000', '#000000']}
                style={{
                    height: '100%',
                    width: '100%'
                }}
            >

            </LinearGradient>
        </ImageBackground>
        <View style={{
            marginTop:-60,
            marginLeft: 10 
        }}>
            <Text style={{
                color: COLORS.lightWhite,
                fontSize: SIZES.medLarge,
                fontFamily: FONTS.bold
            }}>
            {props.data.business}
            </Text>
            <Text style={{
                color: COLORS.lightWhite,
                fontSize: SIZES.font,
                fontFamily: FONTS.medium
            }}>
            {props.data.name}
            </Text>
        </View>
        
          
    </View>
  )
}

export default EventCard