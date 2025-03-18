import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.reactLogo}
        />
        
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Config</ThemedText>
      </ThemedView>
      <ThemedText>Aqui é explicado como criar um projeto e rodar no emulador do android.</ThemedText>
      <Collapsible title="O primeiro passo para criar um projeto é:">
        <ThemedText style={styles.paragrafo}>
           No terminal vc precisa escrever "npx create-expo-app 'nome do projeto'" para criar um novo projeto.
        </ThemedText>
        <ThemedText style={styles.paragrafo}>
           Apos isso vc precisa colocar "npm install 'nome das dependencias' --save" para instalar as dependencias dos arquivos no projeto.
        </ThemedText>
        <ThemedText style={styles.paragrafo}>
           Depois so colocar o "code ." para mexer no arquivo.
        </ThemedText>
        <ThemedText style={styles.paragrafo}>
           Ai no visual studio code vc coloca "npm run android.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  paragrafo: {
    marginTop: 15,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
