
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Header from '@/components/Header';
import ProductTabs from '@/components/ProductTabs';
import ProductDisplay from '@/components/ProductDisplay';
import ProductDetails from '@/components/ProductDetails';
import DurationSelector from '@/components/DurationSelector';
import QuantitySelector from '@/components/QuantitySelector';
import BuyButton from '@/components/BuyButton';

import { COLORS } from '@/constants/xefag';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <View style={styles.container}>
          <Header />

          <ProductTabs />

          <ProductDisplay />

          <View style={styles.purchaseCard}>
            <ProductDetails />

            <View style={styles.divider} />

            <DurationSelector />

            <View style={styles.purchaseBottom}>
              <QuantitySelector />

              <View style={styles.priceContainer}>
                <Text style={styles.priceLabel}>TOTAL PRICE</Text>
                <Text style={styles.price}>$25.50</Text>
              </View>
            </View>

            <BuyButton />

            <Text style={styles.secure}>
              ✓ Secure shopping experience
            </Text>
          </View>

          <View style={styles.benefits}>
            <Text style={styles.benefit}>✦ QUALITY WELLNESS</Text>
            <Text style={styles.benefit}>♡ MADE FOR YOU</Text>
          </View>

          <Text style={styles.footer}>XEFAG PHARMACY</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scroll: {
    flexGrow: 1,
    paddingTop: 8,
    paddingBottom: 35,
  },
  container: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  purchaseCard: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 20,
    marginTop: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 20,
  },
  purchaseBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  priceLabel: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 6,
  },
  price: {
    color: COLORS.navy,
    fontSize: 23,
    fontWeight: '900',
  },
  secure: {
    color: COLORS.muted,
    fontSize: 10,
    textAlign: 'center',
    marginTop: 13,
  },
  benefits: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
    paddingVertical: 18,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  benefit: {
    color: COLORS.green,
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },
  footer: {
    color: COLORS.muted,
    textAlign: 'center',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 3,
    marginTop: 24,
  },
});
