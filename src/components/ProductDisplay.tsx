
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '@/constants/xefag';

function ProductBottle() {
  return (
    <View style={styles.bottleArea}>
      <View style={styles.sun} />
      <View style={styles.bottleShadow} />
      <View style={styles.cap} />
      <View style={styles.neck} />

      <View style={styles.bottle}>
        <View style={styles.label}>
          <Text style={styles.brand}>XEFAG</Text>
          <View style={styles.labelLine} />
          <Text style={styles.product}>RELAX 30</Text>
        </View>
      </View>
    </View>
  );
}

export default function ProductDisplay() {
  return (
    <View style={styles.display}>
      <View style={styles.topRow}>
        <View />
        <Text style={styles.heart}>♡</Text>
      </View>

      <ProductBottle />
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    backgroundColor: COLORS.paleYellow,
    borderRadius: 25,
    padding: 20,
    overflow: 'hidden',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  heart: {
    color: COLORS.navy,
    fontSize: 25,
  },
  bottleArea: {
    height: 265,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sun: {
    position: 'absolute',
    width: 190,
    height: 190,
    borderRadius: 100,
    backgroundColor: '#EACB75',
    top: 40,
  },
  bottleShadow: {
    position: 'absolute',
    width: 155,
    height: 12,
    borderRadius: 20,
    backgroundColor: '#AAB1A9',
    bottom: 35,
    opacity: 0.5,
  },
  cap: {
    width: 53,
    height: 24,
    backgroundColor: '#243A50',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    marginTop: 25,
  },
  neck: {
    width: 65,
    height: 17,
    backgroundColor: '#D9E0DC',
  },
  bottle: {
    width: 145,
    height: 170,
    backgroundColor: '#F7F4E9',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#D6D6C9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    width: 115,
    height: 100,
    backgroundColor: '#203B43',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  brand: {
    color: COLORS.yellow,
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 3,
  },
  labelLine: {
    width: 75,
    height: 1,
    backgroundColor: COLORS.yellow,
    marginVertical: 7,
  },
  product: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 1,
  },
});
