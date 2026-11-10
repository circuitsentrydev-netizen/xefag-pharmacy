
import { StyleSheet, Text } from 'react-native';
import HoverButton from './HoverButton';
import { COLORS } from '@/constants/xefag';

export default function BuyButton() {
  return (
    <HoverButton
      style={styles.button}
      hoverStyle={styles.hover}
    >
      <Text style={styles.text}>BUY NOW</Text>
      <Text style={styles.arrow}>→</Text>
    </HoverButton>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 55,
    backgroundColor: COLORS.yellow,
    borderRadius: 13,
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  hover: {
    backgroundColor: '#E5B83F',
    transform: [{ scale: 1.02 }],
  },
  text: {
    color: COLORS.navy,
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 2,
  },
  arrow: {
    color: COLORS.navy,
    fontSize: 21,
  },
});
