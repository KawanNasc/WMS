import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text, Image } from 'react-native';

import { GeneralStylinzing } from '../../styles/GeneralStyles';

import CustomBtn from '../../components/CustomBtn';

export default function Slide2() {
    const generalStyle = GeneralStylinzing();

    return (
        <SafeAreaView style={generalStyle.container}>
            <StatusBar style='auto' />

            <View>
                <Text>Automatização</Text>
                <Text>O WMS participa imediatamente a partir que o produto adentra no estoque, detectando a
                    movimentação nos armazéns e itens fundamentais com as tecnologias de código QR e RFDI
                    (Radio Frequency Identification).</Text>
                <Image></Image>
            </View>

            <View>
                <Image></Image>
                <Text>Distribuição</Text>
                <Text>É aprimorado o vai e vem dos produtos ao redor do armazém, listando com o pré-inventário,
                    shelf life, planejamentos, paletizando estoques e aplicação de notas fiscais.</Text>
            </View>

            <CustomBtn />
        </SafeAreaView>
    )
}