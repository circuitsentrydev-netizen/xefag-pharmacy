
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '@/constants/xefag';

function XefagMark() {
  return (
    <View style={styles.mark}>
      <View style={[styles.markDot, styles.dotTop]} />
      <View style={[styles.markDot, styles.dotTopRight]} />
      <View style={[styles.markDot, styles.dotRight]} />
      <View style={[styles.markDot, styles.dotBottomRight]} />
      <View style={[styles.markDot, styles.dotBottom]} />
      <View style={[styles.markDot, styles.dotBottomLeft]} />
      <View style={[styles.markDot, styles.dotLeft]} />
      <View style={[styles.markDot, styles.dotTopLeft]} />
    </View>
  );
}

function Capsules() {
  return (
    <View style={styles.capsuleWindow}>
      <View style={[styles.capsule, styles.capsuleOne]} />
      <View style={[styles.capsule, styles.capsuleTwo]} />
      <View style={[styles.capsule, styles.capsuleThree]} />
      <View style={[styles.capsule, styles.capsuleFour]} />
      <View style={[styles.capsule, styles.capsuleFive]} />
      <View style={[styles.capsule, styles.capsuleSix]} />
      <View style={styles.glassShine} />
    </View>
  );
}

function ProductBottle() {
  return (
    <View style={styles.bottleArea}>
      <View style={styles.bottleShadow} />

      <View style={styles.cap} />

      <View style={styles.bottle}>
        <View style={styles.yellowLabel}>
          <View style={styles.logoRow}>
            <XefagMark />
          </View>

          <Text style={styles.productName}>Relax</Text>
          <Text style={styles.byline}>by Xefag</Text>

          <View style={styles.bottomLabelRow}>
            <Text style={styles.strength}>250 mg</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>30</Text>
            </View>
          </View>
        </View>

        <Capsules />
      </View>
    </View>
  );
}

export default function ProductDisplay() {
  return (
    <View style={styles.display}>
      <ProductBottle />
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  bottleArea: {
    width: '100%',
    height: 275,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottleShadow: {
    position: 'absolute',
    bottom: 12,
    width: 135,
    height: 13,
    borderRadius: 20,
    backgroundColor: '#9C761B',
    opacity: 0.25,
  },
  cap: {
    width: 103,
    height: 47,
    backgroundColor: '#F4F3EE',
    marginBottom: 5,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    elevation: 2,
    shadowColor: '#6D5D35',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  bottle: {
    width: 116,
    height: 192,
    overflow: 'hidden',
    borderRadius: 17,
    backgroundColor: '#F4BD08',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    elevation: 4,
    shadowColor: '#5C4510',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  yellowLabel: {
    height: 122,
    width: '100%',
    backgroundColor: '#F4C500',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  logoRow: {
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mark: {
    width: 29,
    height: 29,
    position: 'relative',
  },
  markDot: {
    position: 'absolute',
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#171717',
  },
  dotTop: {
    top: 0,
    left: 11,
  },
  dotTopRight: {
    top: 4,
    right: 1,
  },
  dotRight: {
    top: 11,
    right: 0,
  },
  dotBottomRight: {
    bottom: 2,
    right: 4,
  },
  dotBottom: {
    bottom: 0,
    left: 11,
  },
  dotBottomLeft: {
    bottom: 4,
    left: 1,
  },
  dotLeft: {
    top: 11,
    left: 0,
  },
  dotTopLeft: {
    top: 4,
    left: 3,
  },
  productName: {
    color: '#171717',
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 23,
  },
  byline: {
    color: '#171717',
    fontSize: 7,
    marginTop: -1,
  },
  bottomLabelRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 7,
    paddingHorizontal: 1,
  },
  strength: {
    color: '#171717',
    fontSize: 7,
    fontWeight: '500',
  },
  badge: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: '#9E871D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#171717',
    fontSize: 6,
    fontWeight: '700',
  },
  capsuleWindow: {
    height: 70,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderTopWidth: 2,
    borderTopColor: 'rgba(255,255,255,0.45)',
    overflow: 'hidden',
    position: 'relative',
  },
  capsule: {
    position: 'absolute',
    width: 35,
    height: 17,
    borderRadius: 12,
    backgroundColor: '#D98412',
    borderWidth: 1,
    borderColor: '#F8D47B',
    transform: [{ rotate: '35deg' }],
  },
  capsuleOne: {
    left: 5,
    top: 9,
  },
  capsuleTwo: {
    left: 43,
    top: 3,
    transform: [{ rotate: '-25deg' }],
  },
  capsuleThree: {
    right: 1,
    top: 12,
    transform: [{ rotate: '42deg' }],
  },
  capsuleFour: {
    left: 17,
    bottom: 6,
    transform: [{ rotate: '-30deg' }],
  },
  capsuleFive: {
    left: 59,
    bottom: 4,
    transform: [{ rotate: '30deg' }],
  },
  capsuleSix: {
    right: 2,
    bottom: 7,
    transform: [{ rotate: '-35deg' }],
  },
  glassShine: {
    position: 'absolute',
    top: 0,
    left: 8,
    width: 3,
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.28)',
  },
});
