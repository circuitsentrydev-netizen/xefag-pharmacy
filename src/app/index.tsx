
import { StyleSheet, View, ScrollView } from 'react-native';
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

            <DurationSelector />

            <View style={styles.purchaseBottom}>
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
    backgroundColor: COLORS.background,
  },
  scroll: {
    flexGrow: 1,
    paddingTop: 8,
    paddingBottom: 24,
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
  purchaseBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 12,
  },
});
