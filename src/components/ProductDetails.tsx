
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '@/constants/xefag';

export default function ProductDetails() {
  return (
    <View style={styles.details}>
      <View style={styles.ratingRow}>
        <Text style={styles.rating}>★★★★★</Text>
        <Text style={styles.stock}>● IN STOCK</Text>
      </View>

      <Text style={styles.title}>Xefag Relax 30</Text>

      <Text style={styles.subtitle}>
        Your wellness, your way.
      </Text>

      <Text style={styles.description}>
        Discover a moment of relaxation with Xefag Relax 30.
        A thoughtfully presented wellness product for your
        everyday routine.
      </Text>

      <View style={styles.features}>
        <View>
          <Text style={styles.featureLabel}>PRODUCT TYPE</Text>
          <Text style={styles.featureValue}>Dissolvable Wafers</Text>
        </View>

        <View>
          <Text style={styles.featureLabel}>STRENGTH</Text>
          <Text style={styles.featureValue}>250 mg</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    gap: 7,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    color: '#D8A62E',
    fontSize: 16,
    letterSpacing: 2,
  },
  stock: {
    color: COLORS.green,
    fontSize: 10,
    fontWeight: '900',
  },
  title: {
    color: COLORS.navy,
    fontSize: 27,
    fontWeight: '900',
    marginTop: 7,
  },
  subtitle: {
    color: COLORS.green,
    fontSize: 15,
    fontWeight: '700',
  },
  description: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 21,
    marginTop: 5,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  featureLabel: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 6,
  },
  featureValue: {
    color: COLORS.navy,
    fontSize: 13,
    fontWeight: '800',
  },
});
