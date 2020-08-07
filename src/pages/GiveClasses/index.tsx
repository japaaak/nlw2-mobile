import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { View, ImageBackground, Text } from 'react-native';

import styles from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigationBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para comecar, voce precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigationBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo Bem!</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
