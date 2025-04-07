import { createStackNavigator } from '@react-navigation/stack';

import Intro from '../screens/Intro';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}