
import { StyleSheet, Text, View } from 'react-native';
import HoverButton from './HoverButton';

export default function QuantitySelector() {
  return (
    <View style={styles.container}>
      <HoverButton
        style={styles.button}
        hoverStyle={styles.hover}
      >
        <Text style={styles.symbol}>−</Text>
      </HoverButton>

      <Text style={styles.number}>2</Text>

      <HoverButton
        style={styles.button}
        hoverStyle={styles.hover}
      >
        <Text style={styles.symbol}>+</Text>
      </HoverButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 13,
  },
  button: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hover: {
    backgroundColor: '#333333',
    transform: [{ scale: 1.06 }],
  },
  symbol: {
    color: '#F8C52B',
    fontSize: 23,
    fontWeight: '400',
    lineHeight: 26,
  },
  number: {
    color: '#171717',
    fontSize: 16,
    fontWeight: '600',
    minWidth: 12,
    textAlign: 'center',
  },
});
