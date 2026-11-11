
import { StyleSheet, Text, View } from 'react-native';
import HoverButton from './HoverButton';

export default function BuyButton() {
  return (
    <HoverButton
      style={styles.button}
      hoverStyle={styles.hover}
    >
      <View style={styles.content}>
        <View style={styles.basketIcon}>
          <View style={styles.handle} />
          <View style={styles.basket}>
            <View style={styles.basketLine} />
          </View>
          <View style={styles.wheelRow}>
            <View style={styles.wheel} />
            <View style={styles.wheel} />
          </View>
        </View>

        <Text style={styles.text}>Buy Now</Text>
      </View>
    </HoverButton>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 54,
    backgroundColor: '#F8C52B',
    borderRadius: 28,
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hover: {
    backgroundColor: '#EAB51D',
    transform: [{ scale: 1.02 }],
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 11,
  },
  basketIcon: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  handle: {
    position: 'absolute',
    top: 1,
    left: 2,
    width: 6,
    height: 8,
    borderTopWidth: 1.8,
    borderLeftWidth: 1.8,
    borderColor: '#171717',
    transform: [{ rotate: '-12deg' }],
  },
  basket: {
    width: 15,
    height: 9,
    borderWidth: 1.7,
    borderColor: '#171717',
    borderTopWidth: 1.5,
    transform: [{ skewX: '-12deg' }],
  },
  basketLine: {
    height: 1,
    width: 10,
    backgroundColor: '#171717',
    alignSelf: 'center',
    marginTop: 3,
  },
  wheelRow: {
    width: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  wheel: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#171717',
  },
  text: {
    color: '#171717',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0,
  },
});
