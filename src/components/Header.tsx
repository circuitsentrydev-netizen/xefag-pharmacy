
import { StyleSheet, Text, View } from 'react-native';
import HoverButton from './HoverButton';
import { COLORS } from '@/constants/xefag';

export default function Header() {
  return (
    <View style={styles.header}>
      <HoverButton style={styles.button} hoverStyle={styles.buttonHover}>
        <Text style={styles.icon}>☰</Text>
      </HoverButton>

      <Text style={styles.logo}>XEFAG</Text>

      <HoverButton style={styles.button} hoverStyle={styles.buttonHover}>
        <Text style={styles.icon}>♧</Text>
      </HoverButton>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 66,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    color: COLORS.navy,
    fontSize: 23,
    fontWeight: '900',
    letterSpacing: 5,
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 22,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonHover: {
    backgroundColor: COLORS.yellow,
  },
  icon: {
    color: COLORS.navy,
    fontSize: 22,
  },
});
