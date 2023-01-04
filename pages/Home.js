import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';

export default function Home() {

  const events = [
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vUTWn4BFppuv43nUbILcFeDS-_Vx4aOy9pM6_rE1PIhK_pkbGqfq05MoKOdZO6h7VFs&usqp=CAU',
      name:'Christmas'
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vUTWn4BFppuv43nUbILcFeDS-_Vx4aOy9pM6_rE1PIhK_pkbGqfq05MoKOdZO6h7VFs&usqp=CAU',
      name:'Christmas'
    }
  ];

  return (
    <View>
      <StatusBar style="auto" />
      <View>
        <ScrollView>
         {
          events.forEach(event => {
            <View>
              <Text>{event.name}</Text>
              
            </View>
          })
         }
        </ScrollView>
      </View>
    </View>
  );
}
;
