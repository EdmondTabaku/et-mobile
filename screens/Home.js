import { View, SafeAreaView, FlatList, Text } from 'react-native';
import {BusinessCard, FocusedStatusBar} from '../components'
import HomeHeader from '../components/HomeHeader';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import Carousel from '../components/Carousel';


const Home = () => {

  const biznese = [
    {
      id: 1,
      image:'https://memolighting.com/wp-content/uploads/2022/11/DSCF2936-foto.jpg',
      name:'Kronos',
      type: 'Lounge Bar',
      location: 'Tirane',
      date: '10',
      month: 'May'
    },
    {
      id: 2,
      image:'https://bigsee.eu/wp-content/uploads/2022/03/Beach-Bar-Zins-5.jpg',
      name:'Zins',
      type: 'Beach Bar',
      location: 'Durres',
      date: '28',
      month: 'Apr'
    },
    {
      id: 3,
      image:'https://memolighting.com/wp-content/uploads/2022/11/DSCF2936-foto.jpg',
      name:'Kronos',
      type: 'Lounge Bar',
      location: 'Tirane',
      date: '10',
      month: 'May'
    },
    {
      id: 4,
      image:'https://bigsee.eu/wp-content/uploads/2022/03/Beach-Bar-Zins-5.jpg',
      name:'Zins',
      type: 'Beach Bar',
      location: 'Durres',
      date: '28',
      month: 'Apr'
    }
  ];
  const evente = [
    {
      id: 1,
      image:'https://i.ytimg.com/vi/QUUb-XWV8mw/maxresdefault.jpg',
      name:'Mc Kresha & Lyrical Son',
      business: 'Magic Club',
      date: '10',
      month: 'May'
    },
    {
      id: 2,
      image:'https://assets.audiomack.com/cristian-ronaldo/f01e455d293a5325dac6d06e0a74dc487e71dd0a6421f1060b31c615681a5a94.jpeg?width=1000&height=1000&max=true',
      name:'Mc Kresha & Lyrical Son',
      business: 'Magic Club',
      date: '10',
      month: 'May'
    },
    {
      id: 3,
      image:'https://assets.audiomack.com/cristian-ronaldo/f01e455d293a5325dac6d06e0a74dc487e71dd0a6421f1060b31c615681a5a94.jpeg?width=1000&height=1000&max=true',
      name:'Mc Kresha & Lyrical Son',
      business: 'Magic Club',
      date: '10',
      month: 'May'
    },
    {
      id: 4,
      image:'https://assets.audiomack.com/cristian-ronaldo/f01e455d293a5325dac6d06e0a74dc487e71dd0a6421f1060b31c615681a5a94.jpeg?width=1000&height=1000&max=true',
      name:'Mc Kresha & Lyrical Son',
      business: 'Magic Club',
      date: '10',
      month: 'May'
    }
  ];
  const categories = [
    {
      id: 1,
      name: "Events"
    },
    {
      id: 2,
      name: "Music"
    },
    {
      id: 3,
      name: "Night Life"
    },
    {
      id: 4,
      name: "Nature"
    },
    {
      id: 5,
      name: "Cinema"
    }
  ]

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <HomeHeader />
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{flex: 1, marginTop: 15}}>
      <View style={{
          flexDirection: "row", 
          paddingHorizontal: SIZES.font}}>
          <Text style={{
            alignSelf: "flex-start", 
            flex: 1, 
            fontSize: SIZES.extraLarge, 
            color: COLORS.lightWhite,
            fontWeight: "600",
            fontFamily: FONTS.bold
            }}>Main Events</Text>
        </View>
        
        <Carousel data={evente}/>

        <View style={{
          flexDirection: "row", 
          paddingHorizontal: SIZES.font}}>
          <Text style={{
            alignSelf: "flex-start", 
            flex: 1, 
            fontSize: SIZES.extraLarge, 
            color: COLORS.lightWhite,
            fontWeight: "600",
            fontFamily: FONTS.bold
            }}>Top Places</Text>
        </View>
        
        <View style={{zIndex: 0, marginTop: 0}}>
          <FlatList 
            style={{paddingLeft: SIZES.font}}
            data={biznese}
            renderItem={({item}) => <BusinessCard data={item} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
