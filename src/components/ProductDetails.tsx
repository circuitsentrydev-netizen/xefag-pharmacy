
import { StyleSheet, Text, View } from 'react-native';

export default function ProductDetails() {
  return (
    <View style={styles.details}>
      <Text style={styles.title}>Relax 30</Text>

      <Text style={styles.subtitle}>Dissolvable Wafers</Text>

      <Text style={styles.strength}>250 mg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    width: '100%',
    alignItems: 'flex-start',
  },
  title: {
    color: '#111111',
    fontSize: 28,
    fontWeight: '600',
    letterSpacing: -1.1,
    lineHeight: 34,
  },
  subtitle: {
    color: '#111111',
    fontSize: 28,
    fontWeight: '600',
    letterSpacing: -1.1,
    lineHeight: 34,
  },
  strength: {
    color: '#929292',
    fontSize: 15,
    fontWeight: '400',
    marginTop: 12,
  },
});
