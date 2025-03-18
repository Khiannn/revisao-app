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
        <ThemedText type="title">Emulador</ThemedText>
      </ThemedView>
      <ThemedText>Aqui você aprende tópicos de como criar um emulador</ThemedText>
      <Collapsible title="O primeiro passo para criar um emulador é:">
        <ThemedText style={styles.paragrafo}>
        Primeiro voce precisa ter instalado no computador o programa 'Android Studio' criar o emulador.
        </ThemedText>
        <ThemedText style={styles.paragrafo}>
        Ao entrar no Android Studio voce aperta em "more actions" e  depois em "Virtual Device Manager".
        </ThemedText>
        <ThemedText style={styles.paragrafo}>
        Depois voce clica no simbolo "+" no canto superior da tela.
        </ThemedText>
        <ThemedText style={styles.paragrafo}>
        Voce escolhe um tipo de "phone" e aperta em next duas vezes e esta pronto.
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
