import { StatusBar } from 'expo-status-bar';
import { useFonts, PTSerif_700Bold } from '@expo-google-fonts/pt-serif';
import { OdorMeanChey_400Regular } from '@expo-google-fonts/odor-mean-chey';
import { ShipporiAntique_400Regular } from '@expo-google-fonts/shippori-antique';
import { PatuaOne_400Regular } from '@expo-google-fonts/patua-one';
import {
  SafeAreaView, Image, Text, TouchableOpacity, StyleSheet
} from 'react-native';

export default function App() {
  let [fontsLoaded, fontsError] = useFonts({
    PTSerif_700Bold,
    OdorMeanChey_400Regular,
    ShipporiAntique_400Regular,
    PatuaOne_400Regular
  });

  if (!fontsLoaded && !fontsError) { return null; }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Image style={styles.img} source={require('../assets/imgs/logo.png')}></Image>
      <Text style={styles.subtitle}>Bem-vindo ao</Text>
      <Text style={styles.title}>WMS</Text>
      <Text style={styles.description}>Aprimore a logística de sua empresa de maneira
        ágil e inteligente integrando com a tecnologia nos processos industriais</Text>

      <TouchableOpacity style={styles.btnobjt}>
        <Text style={styles.btndesc}>Conheça o melhor aplicativo de gestão
          empresarial</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFDD8D',
    flex: 1,
    padding: 20,
  },

  img: {
    height: 150,
    marginTop: 20,
    width: 150
  },

  subtitle: {
    fontFamily: 'PTSerif_700Bold',
    color: '#FFFFFF',
    fontSize: 35
  },

  title: {
    fontFamily: 'OdorMeanChey_400Regular',
    color: '#CD8A2F',
    marginTop: 25,
    marginBottom: 25,
    fontSize: 130
  },

  description: {
    color: '#2F22BA',
    fontFamily: 'ShipporiAntique_400Regular',
    fontSize: 20,
    textAlign: 'center'
  },

  btnobjt: { backgroundColor: '#2F22BA', borderRadius: 50, marginTop: 50, width: 350 },

  btndesc: {
    color: '#FDFFD4',
    fontFamily: 'PatuaOne_400Regular',
    fontSize: 20,
    padding: 20,
    textAlign: 'center'
  }
});
