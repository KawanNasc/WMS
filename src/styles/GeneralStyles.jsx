import { StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';
import { PTSerif_700Bold } from '@expo-google-fonts/pt-serif';
import { OdorMeanChey_400Regular } from '@expo-google-fonts/odor-mean-chey';
import { ShipporiAntique_400Regular } from '@expo-google-fonts/shippori-antique';
import { PatuaOne_400Regular } from '@expo-google-fonts/patua-one';

export const GeneralStylinzing = () => {
    let [fontsLoaded, fontsError] = useFonts({
        PTSerif_700Bold,
        OdorMeanChey_400Regular,
        ShipporiAntique_400Regular,
        PatuaOne_400Regular
    });
    
    if (!fontsLoaded && !fontsError) { return {}; }
    else {
        return StyleSheet.create({
            container: {
                alignItems: 'center',
                backgroundColor: '#FFDD8D',
                flex: 1,
                padding: 20,
              },
            
              logo: {
                height: 100,
                marginTop: 20,
                width: 100
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
                fontSize: 150
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
        })
    }
}