import { createStackNavigator } from '@react-navigation/stack';
import { GeneralStylinzing } from '../styles/GeneralStyles';

import { Image } from 'react-native';

import Intro from '../screens/Carousel/Intro';
import Slide1 from '../screens/Carousel/Slide1';
import Slide2 from '../screens/Carousel/Slide2';
import Slide3 from '../screens/Carousel/Slide3';
import Slide4 from '../screens/Carousel/Slide4';

const Stack = createStackNavigator();

export default function Routes() {
    const generalStyle = GeneralStylinzing();

    return (
        <Stack.Navigator
            initialRouteName="Intro"
            screenOptions={{
                headerMode: 'float',
                headerStyle: { backgroundColor: '#FFDD8D', elevation: 0, borderBottomWidth: 0 },
                headerTitleAlign: 'center',
                headerTintColor: '#CD8A2F',
                headerTitleStyle: { fontFamily: 'OdorMeanChey_400Regular', fontSize: 50 },
                headerLeft: () => (
                    <Image source={require('../media/logo.png')} style={generalStyle.logo} />
                )
            }}>
            <Stack.Screen 
                name="Intro" 
                component={Intro} 
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Slide1" 
                component={Slide1}
                options={{ title: 'WMS' }}
            />
            <Stack.Screen 
                name="Slide2" 
                component={Slide2}
                options={{ title: 'WMS' }}
            />
            <Stack.Screen
                name="Slide3"
                component={Slide3}
                options={{ title: 'WMS'}}
            />
            <Stack.Screen
                name="Slide4"
                component={Slide4}
                options={{ title: 'WMS'}}
            />
        </Stack.Navigator>
    )
}
