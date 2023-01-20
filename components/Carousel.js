import { View, FlatList, Animated } from 'react-native';
import { SIZES } from '../constants/theme';
import EventCard from './EventCard';


const Carousel = ({ data }) => {

    const scrollX = new Animated.Value(0);
    if (data && data.length) {
        return (
            <View>
                <FlatList 
                    style={{paddingLeft: SIZES.font}}
                    data={data}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <EventCard data={item} />
                    }}
                    // onScroll={Animated.event(
                    //     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    //     { useNativeDriver: false }
                    // )}
                />
            </View>
        )
    }

    console.log('Please provide Images');
    return null;
}

export default Carousel;