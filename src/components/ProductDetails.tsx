
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '@/constants/xefag';

export default function ProductDetails() {
  return (
    <View style={styles.details}>
      <Text style={styles.title}>Xefag Relax 30</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    gap: 0,
  },
  title: {
    color: COLORS.navy,
    fontSize: 27,
    fontWeight: '900',
  },
});
