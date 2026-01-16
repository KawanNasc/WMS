import { Image, Text } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GeneralStylinzing } from '../../styles/GeneralStyles';

import CustomBtn from '../../components/CustomBtn';

export default function Intro() {
  const generalStyle = GeneralStylinzing();

  return (
    <SafeAreaView style={generalStyle.container}>
      <StatusBar style='auto' />

      <Image style={[generalStyle.logo, {height: 150, marginTop: 20, width: 150}]} source={require('../../media/logo.png')} />
      <Text style={generalStyle.subtitle}>Bem-vindo ao</Text>
      <Text style={[generalStyle.title, {fontSize: 130}]}>WMS</Text>
      <Text style={generalStyle.description}>Aprimore a logística de sua empresa de maneira
        ágil e inteligente integrando com a tecnologia nos processos industriais</Text>

      <CustomBtn />
    </SafeAreaView>
  );
}