import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaView
} from 'react-native';

import { GeneralStylinzing } from '../../styles/GeneralStyles';

import CustomBtn from '../../components/CustomBtn';

export default function Slide2() {
    const generalStyle = GeneralStylinzing();

    return (
        <SafeAreaView style={generalStyle.container}>
            <StatusBar style='auto' />

            <CustomBtn />
        </SafeAreaView>
    )
}