import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { GeneralStylinzing } from '../styles/GeneralStyles';
import { useNavigation } from '@react-navigation/native';

export default function CustomBtn() {
  const generalStyle = GeneralStylinzing();
  const navigation = useNavigation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const loadCount = async () => {
      try {
        const storedCount = await AsyncStorage.getItem('buttonClickCount');
        if (storedCount !== null) {
          const parsedCount = parseInt(storedCount, 10);
          if (!isNaN(parsedCount)) {
            setCount(parsedCount);
          }
        }
      } catch (error) {
        console.error('Error loading count from AsyncStorage:', error);
      }
    };
    loadCount();
  }, []);

  const handlePress = async () => {
    try {
      const newCount = count + 1;
      if (newCount > 4) {
        console.warn('Maximum slide reached. Resetting to Intro.');
        setCount(0); // Reset to Slide1 if count exceeds 2
        await AsyncStorage.setItem('buttonClickCount', '0'); // Save reset count
        navigation.navigate('Intro');
        return;
      }
      setCount(newCount);
      await AsyncStorage.setItem('buttonClickCount', newCount.toString()); // Save to AsyncStorage
      navigation.navigate(`Slide${newCount}`);
    } catch (error) {
      console.error('Error saving count to AsyncStorage:', error);
    }
  };

  return (
    <View>
      {count == 0 ? (
        <TouchableOpacity style={generalStyle.btnobjt} onPress={handlePress}>
          <Text style={generalStyle.btndesc}>
            Conheça o melhor aplicativo de gestão comercial
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={[generalStyle.btnobjt, {height: 90, width: 90}]} onPress={handlePress}>
          <AntDesign name="arrow-right" style={[generalStyle.btndesc, {fontSize: 50}]} />
        </TouchableOpacity>
      )}
    </View>
  );
}