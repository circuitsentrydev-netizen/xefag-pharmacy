
import { StyleSheet, Text, View } from 'react-native';

function XefagMark() {
  return (
    <View style={styles.mark}>
      {Array.from({ length: 8 }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.markDot,
            {
              transform: [{ rotate: `${index * 45}deg` }, { translateY: -11 }],
            },
          ]}
        />
      ))}
      <View style={styles.markCenter} />
    </View>
  );
}

function BottleCap() {
  return (
    <View style={styles.capAssembly}>
      <View style={styles.capTop} />
      <View style={styles.cap}>
        {Array.from({ length: 11 }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.capRidge,
              { left: 8 + index * 8 },
            ]}
          />
        ))}
      </View>
      <View style={styles.capBottom} />
    </View>
  );
}

function Capsules() {
  return (
    <View style={styles.capsuleWindow}>
      <View style={[styles.capsule, styles.capsuleOne]}>
        <View style={styles.capsuleHighlight} />
      </View>
      <View style={[styles.capsule, styles.capsuleTwo]}>
        <View style={styles.capsuleHighlight} />
      </View>
      <View style={[styles.capsule, styles.capsuleThree]}>
        <View style={styles.capsuleHighlight} />
      </View>
      <View style={[styles.capsule, styles.capsuleFour]}>
        <View style={styles.capsuleHighlight} />
      </View>
      <View style={[styles.capsule, styles.capsuleFive]}>
        <View style={styles.capsuleHighlight} />
      </View>
      <View style={styles.glassReflection} />
      <View style={styles.glassEdge} />
    </View>
  );
}

function ProductBottle() {
  return (
    <View style={styles.bottleArea}>
      <View style={styles.bottleShadow} />

      <BottleCap />

      <View style={styles.shoulder}>
        <View style={styles.shoulderHighlight} />
      </View>

      <View style={styles.bottle}>
        <View style={styles.bottleHighlight} />

        <View style={styles.yellowLabel}>
          <XefagMark />

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
    width: 190,
    height: 300,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 8,
  },

  bottleShadow: {
    position: 'absolute',
    bottom: 8,
    width: 142,
    height: 15,
    borderRadius: 20,
    backgroundColor: '#76500C',
    opacity: 0.22,
  },

  capAssembly: {
    width: 105,
    height: 56,
    alignItems: 'center',
    zIndex: 3,
  },

  capTop: {
    width: 96,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E1D8',
  },

  cap: {
    width: 96,
    height: 38,
    marginTop: -1,
    backgroundColor: '#F8F7F1',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#DDD9D0',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    overflow: 'hidden',
    flexDirection: 'row',
  },

  capRidge: {
    position: 'absolute',
    top: 2,
    bottom: 2,
    width: 1,
    backgroundColor: '#E3E0D8',
  },

  capBottom: {
    width: 101,
    height: 9,
    marginTop: -2,
    borderRadius: 4,
    backgroundColor: '#E8E5DC',
    borderWidth: 1,
    borderColor: '#D7D2C8',
  },

  shoulder: {
    width: 143,
    height: 27,
    marginTop: -1,
    backgroundColor: '#F5C20D',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    alignItems: 'center',
    overflow: 'hidden',
    zIndex: 1,
  },

  shoulderHighlight: {
    width: 5,
    height: '100%',
    position: 'absolute',
    left: 12,
    backgroundColor: 'rgba(255,255,255,0.23)',
  },

  bottle: {
    width: 143,
    height: 199,
    marginTop: -1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: '#F6BD05',
    overflow: 'hidden',
    elevation: 7,
    shadowColor: '#6B4D0B',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.24,
    shadowRadius: 7,
  },

  bottleHighlight: {
    position: 'absolute',
    left: 9,
    top: 0,
    bottom: 0,
    width: 7,
    backgroundColor: 'rgba(255,255,255,0.18)',
    zIndex: 2,
  },

  yellowLabel: {
    height: 125,
    width: '100%',
    backgroundColor: '#F8C400',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 7,
    paddingHorizontal: 12,
  },

  mark: {
    width: 29,
    height: 29,
    borderRadius: 15,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  markDot: {
    position: 'absolute',
    width: 4,
    height: 7,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
  },

  markCenter: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
  },

  productName: {
    color: '#171717',
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 25,
    letterSpacing: -0.8,
    marginTop: 3,
  },

  byline: {
    color: '#171717',
    fontSize: 8,
    lineHeight: 10,
  },

  bottomLabelRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 9,
    paddingHorizontal: 1,
  },

  strength: {
    color: '#171717',
    fontSize: 8,
    fontWeight: '600',
  },

  badge: {
    width: 19,
    height: 19,
    borderRadius: 10,
    backgroundColor: '#D6A51B',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  badgeText: {
    color: '#171717',
    fontSize: 8,
    fontWeight: '800',
  },

  capsuleWindow: {
    height: 74,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.23)',
    borderTopWidth: 2,
    borderTopColor: 'rgba(255,255,255,0.65)',
    position: 'relative',
    overflow: 'hidden',
  },

  capsule: {
    position: 'absolute',
    width: 40,
    height: 19,
    borderRadius: 12,
    backgroundColor: '#B96912',
    borderWidth: 1,
    borderColor: '#F7D18A',
    overflow: 'hidden',
  },

  capsuleHighlight: {
    width: '48%',
    height: '100%',
    backgroundColor: 'rgba(255,220,151,0.5)',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  capsuleOne: {
    left: 5,
    top: 8,
    transform: [{ rotate: '30deg' }],
  },

  capsuleTwo: {
    left: 46,
    top: 5,
    transform: [{ rotate: '-25deg' }],
  },

  capsuleThree: {
    right: 1,
    top: 13,
    transform: [{ rotate: '42deg' }],
  },

  capsuleFour: {
    left: 19,
    bottom: 5,
    transform: [{ rotate: '-30deg' }],
  },

  capsuleFive: {
    right: 24,
    bottom: 5,
    transform: [{ rotate: '28deg' }],
  },

  glassReflection: {
    position: 'absolute',
    left: 5,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: 'rgba(255,255,255,0.32)',
  },

  glassEdge: {
    position: 'absolute',
    right: 5,
    top: 0,
    bottom: 0,
    width: 3,
    backgroundColor: 'rgba(255,255,255,0.14)',
  },
});
