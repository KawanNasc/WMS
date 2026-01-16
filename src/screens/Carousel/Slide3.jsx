import { View, Text, Image } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GeneralStylinzing } from '../../styles/GeneralStyles';

import CustomBtn from '../../components/CustomBtn';

export default function Slide3() {
    const generalStyle = GeneralStylinzing();

    return (
        <SafeAreaView style={generalStyle.container}>
            <StatusBar style='auto' />

            <View>
                <Image></Image>
                <Text>Manufatura</Text>
                <Text>O WMS atende a determinados setores da logística de uma empresa, como por exemplo
                    estoques, endereçamento, impressão de identificações, picking (Seleção e separamento de
                    itens), etc.</Text>
            </View>

            <View>
                <Text>Tomada de decisões</Text>
                <Text>O sistema, não somente participa no nível operacional, auxilia na orientação estratégica
                    adotando métodos como o cross docking (Distributiva inteligência) e Ship from Store 
                    (Chegadade estoques direta á loja).</Text>
                <Image></Image>
            </View>

            <CustomBtn />
        </SafeAreaView>
    )
}