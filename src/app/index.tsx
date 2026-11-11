
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
          <View style={styles.hero}>
            <Header />

            <ProductTabs />

            <View style={styles.heroContent}>
              <View style={styles.productArea}>
                <ProductDisplay />
              </View>

              <View style={styles.durationArea}>
                <DurationSelector />
              </View>
            </View>
          </View>

          <View style={styles.purchaseCard}>
            <ProductDetails />

            <View style={styles.purchaseBottom}>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>$25.50</Text>
              </View>

              <QuantitySelector />
            </View>

            <BuyButton />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#BAD9EC',
  },

  scroll: {
    flexGrow: 1,
    paddingTop: 12,
    paddingBottom: 24,
  },

  container: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    paddingHorizontal: 12,
  },

  hero: {
    minHeight: 510,
    backgroundColor: '#F6B110',
    borderRadius: 42,
    paddingTop: 22,
    paddingHorizontal: 18,
    paddingBottom: 75,
    overflow: 'visible',
  },

  heroContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 18,
  },

  productArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  durationArea: {
    width: 48,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  purchaseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 34,
    paddingHorizontal: 24,
    paddingTop: 25,
    paddingBottom: 24,
    marginTop: -55,
    marginHorizontal: 6,
    zIndex: 2,
    elevation: 8,
  },

  purchaseBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 18,
    marginBottom: 12,
  },

  priceContainer: {
    flex: 1,
  },

  price: {
    color: '#111111',
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: -1,
  },
});
