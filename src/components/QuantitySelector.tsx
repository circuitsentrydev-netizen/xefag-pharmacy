
import { StyleSheet, Text, View } from 'react-native';
import HoverButton from './HoverButton';
import { COLORS } from '@/constants/xefag';

export default function QuantitySelector() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quantity</Text>

      <View style={styles.control}>
        <HoverButton
          style={styles.button}
          hoverStyle={styles.hover}
        >
          <Text style={styles.symbol}>−</Text>
        </HoverButton>

        <Text style={styles.number}>1</Text>

        <HoverButton
          style={styles.button}
          hoverStyle={styles.hover}
        >
          <Text style={styles.symbol}>+</Text>
        </HoverButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  title: {
    color: COLORS.navy,
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 12,
  },
  control: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.paleYellow,
    borderWidth: 1,
    borderColor: COLORS.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hover: {
    backgroundColor: COLORS.yellow,
  },
  symbol: {
    color: COLORS.navy,
    fontSize: 21,
    fontWeight: '800',
  },
  number: {
    color: COLORS.navy,
    fontSize: 16,
    fontWeight: '800',
    minWidth: 18,
    textAlign: 'center',
  },
});
