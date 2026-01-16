import { View, Text, Image } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GeneralStylinzing } from '../../styles/GeneralStyles';

import CustomBtn from '../../components/CustomBtn';

export default function Slide1() {
    const generalStyle = GeneralStylinzing();

    return (
        <SafeAreaView style={generalStyle.container}>
            <StatusBar style='auto' />

            <View>
                <Text>A WMS (Warehouse Management System) é um sistema de gerenciamento de armazéns que permite
                    o controle de estoques, entrando como um importante organizador dos espaços logísticos em
                    formato de tercnologia automatizada.</Text>
                <Image></Image>
            </View>

            <View>
                <Text>Indicada por 75% dos líderes e 90% das empresas, este sistema agrega a produtividade
                    necessária para atender as demandas do cliente, principalmente pela sua concentação atual no
                    mercado digital.</Text>
                <Image></Image>
            </View>

            <CustomBtn />
        </SafeAreaView>
    )
}