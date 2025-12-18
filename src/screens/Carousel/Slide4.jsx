import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text, Image } from 'react-native';

import { GeneralStylinzing } from '../../styles/GeneralStyles';

import CustomBtn from '../../components/CustomBtn';

export default function Slide4() {
    const generalStyle = GeneralStylinzing();

    return (
        <SafeAreaView style={generalStyle.container}>
            <StatusBar style='auto' />

            <View>
                <Text>Funcionalidades atuais</Text>
                <Text>Os primeiros componentes do WMS já foram lançados, com uma listagem de produtos em
                    estoque, armazenados na entrada e enviados na saída.</Text>
                <Image></Image>
            </View>

            <View>
                <Text>Futuras aplicações</Text>
                <Text>Estamos preparando a seleção de armazéns no qual o ser logístico poderá organizar da sua
                    melhor forma possível apenas clicando no respectivos espaços ou digitando pelo código.</Text>
                <Image></Image>
            </View>

            <CustomBtn />
        </SafeAreaView>
    )
}