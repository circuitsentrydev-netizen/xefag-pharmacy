
import { StyleSheet, Text, View } from 'react-native';
import HoverButton from './HoverButton';
import { COLORS } from '@/constants/xefag';

export default function QuantitySelector() {
  return (
    <View>
      <Text style={styles.title}>Quantity</Text>

      <View style={styles.control}>
        <HoverButton style={styles.button} hoverStyle={styles.hover}>
          <Text style={styles.symbol}>−</Text>
        </HoverButton>

        <Text style={styles.number}>1</Text>

        <HoverButton style={styles.button} hoverStyle={styles.hover}>
          <Text style={styles.symbol}>+</Text>
        </HoverButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: COLORS.navy,
    fontSize: 14,
    fontWeight: '900',
    marginBottom: 12,
  },
  control: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },
  button: {
    width: 34,
    height: 34,
    borderRadius: 9,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hover: {
    backgroundColor: COLORS.yellow,
  },
  symbol: {
    color: COLORS.navy,
    fontSize: 20,
    fontWeight: '800',
  },
  number: {
    color: COLORS.navy,
    fontSize: 15,
    fontWeight: '900',
  },
});
