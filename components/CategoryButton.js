import { View, Text } from 'react-native'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants/theme'

const CategoryButton = (props) => {
  return (
    <View style={{
        paddingHorizontal: SIZES.large,
        paddingVertical: SIZES.base,
        marginVertical: SIZES.base,
        borderRadius: SIZES.medium,
        marginRight: SIZES.font - 2,
        marginLeft: 2,
        backgroundColor: COLORS.white,
        ...SHADOWS.light
    }}>
      <Text style={{fontFamily: FONTS.medium}}>{props.data.name}</Text>
    </View>
  )
}

export default CategoryButton