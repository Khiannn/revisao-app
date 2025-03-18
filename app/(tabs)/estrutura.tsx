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
        <ThemedText type="title">Estrutura</ThemedText>
      </ThemedView>
      <ThemedText>Aqui é explicado como estrtuturar seu projeto.</ThemedText>
      <Collapsible title="O primeiro passo para organizar um projeto é:">
        <ThemedText style={styles.paragrafo}>
        Definição do Escopo e Objetivos.
        </ThemedText>
        <ThemedText style={styles.paragrafo}>
        Escolha de Linguagens de Programação.
        </ThemedText>
        <ThemedText style={styles.paragrafo}>
        Estrutura de Pastas e Arquivos
        </ThemedText>
        <ThemedText style={styles.paragrafo}>
        Planejamento de Desenvolvimento e Metodologia
        </ThemedText>
        <ThemedText style={styles.paragrafo}>
        Design do Sistema.
        </ThemedText>
        <ThemedText style={styles.paragrafo}>
        Gerenciamento de Dependências e Bibliotecas.
        </ThemedText>
        <ThemedText style={styles.paragrafo}>
        Testes e Depuração.
        </ThemedText>
        <ThemedText style={styles.paragrafo}>
        Documentação.
        </ThemedText>
        <ThemedText style={styles.paragrafo}>
        Interface com o Usuário (UI).
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