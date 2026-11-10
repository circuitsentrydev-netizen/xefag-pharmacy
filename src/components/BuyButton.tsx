
import { StyleSheet, Text, View } from 'react-native';
import HoverButton from './HoverButton';
import { COLORS } from '@/constants/xefag';

export default function BuyButton() {
  return (
    <HoverButton
      style={styles.button}
      hoverStyle={styles.hover}
    >
      <View style={styles.content}>
        <Text style={styles.text}>BUY NOW</Text>
        <Text style={styles.arrow}>→</Text>
      </View>
    </HoverButton>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56,
    backgroundColor: COLORS.yellow,
    borderRadius: 16,
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hover: {
    backgroundColor: '#E5B83F',
    transform: [{ scale: 1.02 }],
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
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
    fontWeight: '700',
  },
});
