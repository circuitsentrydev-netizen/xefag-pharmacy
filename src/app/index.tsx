
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const C = {
  background: '#EAF1F5',
  navy: '#172B43',
  yellow: '#F3C64E',
  white: '#FFFFFF',
  muted: '#778695',
  border: '#E8EDF1',
  green: '#426B55',
};

const durations = ['30 min', '60 min', '90 min'];

function HoverButton({
  children,
  style,
  hoverStyle,
}: {
  children: React.ReactNode;
  style: object;
  hoverStyle: object;
}) {
  return (
    <Pressable
      style={({ hovered }) => [
        style,
        hovered ? hoverStyle : undefined,
      ]}
    >
      {children}
    </Pressable>
  );
}

function Bottle() {
  return (
    <View style={styles.bottleArea}>
      <View style={styles.sun} />
      <View style={styles.cap} />
      <View style={styles.neck} />

      <View style={styles.bottle}>
        <View style={styles.label}>
          <Text style={styles.brand}>XEFAG</Text>
          <View style={styles.labelLine} />
          <Text style={styles.product}>RELAX 30</Text>
          <Text style={styles.labelSmall}>WELLNESS FORMULA</Text>
        </View>
      </View>

      <View style={styles.shadow} />
    </View>
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.page}
      >
        <View style={styles.container}>
          {/* HEADER */}
          <View style={styles.header}>
            <HoverButton
              style={styles.iconButton}
              hoverStyle={styles.iconButtonHover}
            >
              <Text style={styles.headerIcon}>←</Text>
            </HoverButton>

            <Text style={styles.logo}>XEFAG</Text>

            <HoverButton
              style={styles.iconButton}
              hoverStyle={styles.iconButtonHover}
            >
              <Text style={styles.headerIcon}>♧</Text>
            </HoverButton>
          </View>

          {/* HERO */}
          <View style={styles.hero}>
            <View style={styles.heroHeader}>
              <Text style={styles.tag}>WELLNESS COLLECTION</Text>
              <Text style={styles.heart}>♡</Text>
            </View>

            <Text style={styles.heroTitle}>
              Relax. Recharge. Restore.
            </Text>

            <Bottle />

            <Text style={styles.heroFooter}>
              YOUR MOMENT OF CALM
            </Text>
          </View>

          {/* PRODUCT DETAILS */}
          <View style={styles.details}>
            <View style={styles.stockRow}>
              <Text style={styles.rating}>★★★★★</Text>
              <Text style={styles.stock}>● In stock</Text>
            </View>

            <Text style={styles.title}>Xefag Relax 30</Text>

            <Text style={styles.subtitle}>
              Your wellness, your way.
            </Text>

            <Text style={styles.description}>
              Discover a moment of relaxation with Xefag Relax 30.
              Choose your preferred duration and explore the product.
            </Text>

            <View style={styles.divider} />

            {/* DURATION */}
            <Text style={styles.sectionTitle}>
              Choose duration
            </Text>

            <View style={styles.options}>
              {durations.map((item, index) => (
                <HoverButton
                  key={item}
                  style={[
                    styles.option,
                    index === 0 && styles.selectedOption,
                  ]}
                  hoverStyle={styles.optionHover}
                >
                  <Text
                    style={[
                      styles.optionText,
                      index === 0 && styles.selectedText,
                    ]}
                  >
                    {item}
                  </Text>
                </HoverButton>
              ))}
            </View>

            {/* QUANTITY AND PRICE */}
            <View style={styles.purchaseRow}>
              <View>
                <Text style={styles.muted}>Quantity</Text>

                <View style={styles.quantity}>
                  <HoverButton
                    style={styles.quantityButton}
                    hoverStyle={styles.quantityHover}
                  >
                    <Text style={styles.quantitySymbol}>−</Text>
                  </HoverButton>

                  <Text style={styles.quantityText}>1</Text>

                  <HoverButton
                    style={styles.quantityButton}
                    hoverStyle={styles.quantityHover}
                  >
                    <Text style={styles.quantitySymbol}>+</Text>
                  </HoverButton>
                </View>
              </View>

              <View style={styles.priceBlock}>
                <Text style={styles.muted}>Price</Text>
                <Text style={styles.price}>R25.50</Text>
              </View>
            </View>

            {/* BUY BUTTON */}
            <HoverButton
              style={styles.buyButton}
              hoverStyle={styles.buyButtonHover}
            >
              <Text style={styles.buyText}>BUY NOW</Text>
              <Text style={styles.arrow}>→</Text>
            </HoverButton>

            <Text style={styles.secure}>
              ✓ Secure shopping experience
            </Text>
          </View>

          {/* BENEFITS */}
          <View style={styles.benefits}>
            <Text style={styles.benefit}>✦ Quality wellness</Text>
            <Text style={styles.benefit}>♡ Made for you</Text>
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
    backgroundColor: C.background,
  },
  page: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  container: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  header: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    color: C.navy,
    fontSize: 21,
    fontWeight: '900',
    letterSpacing: 5,
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: C.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonHover: {
    backgroundColor: C.yellow,
  },
  headerIcon: {
    color: C.navy,
    fontSize: 24,
  },
  hero: {
    backgroundColor: '#DCE7ED',
    borderRadius: 26,
    padding: 20,
    alignItems: 'center',
    overflow: 'hidden',
  },
  heroHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tag: {
    color: C.green,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
  },
  heart: {
    color: C.navy,
    fontSize: 25,
  },
  heroTitle: {
    color: C.navy,
    fontSize: 23,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 15,
  },
  bottleArea: {
    width: '100%',
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  sun: {
    position: 'absolute',
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: '#F3D98F',
    top: 35,
  },
  cap: {
    width: 53,
    height: 25,
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
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#D6D6C9',
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
    color: C.yellow,
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 3,
  },
  labelLine: {
    width: 75,
    height: 1,
    backgroundColor: C.yellow,
    marginVertical: 7,
  },
  product: {
    color: C.white,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1,
  },
  labelSmall: {
    color: '#DCE7ED',
    fontSize: 7,
    letterSpacing: 1,
    marginTop: 5,
  },
  shadow: {
    width: 160,
    height: 12,
    borderRadius: 50,
    backgroundColor: '#AAB9C1',
    opacity: 0.5,
    marginTop: 12,
  },
  heroFooter: {
    color: C.green,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 3,
    marginTop: 5,
  },
  details: {
    paddingTop: 25,
  },
  stockRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    color: '#D8A62E',
    fontSize: 17,
    letterSpacing: 2,
  },
  stock: {
    color: C.green,
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: C.navy,
    fontSize: 29,
    fontWeight: '900',
    marginTop: 12,
  },
  subtitle: {
    color: C.green,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  description: {
    color: C.muted,
    fontSize: 14,
    lineHeight: 23,
    marginTop: 14,
  },
  divider: {
    height: 1,
    backgroundColor: C.border,
    marginVertical: 22,
  },
  sectionTitle: {
    color: C.navy,
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 13,
  },
  options: {
    flexDirection: 'row',
    gap: 10,
  },
  option: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: C.white,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: C.border,
  },
  optionHover: {
    backgroundColor: C.yellow,
    borderColor: C.yellow,
  },
  selectedOption: {
    backgroundColor: C.navy,
    borderColor: C.navy,
  },
  optionText: {
    color: C.navy,
    fontSize: 13,
    fontWeight: '700',
  },
  selectedText: {
    color: C.white,
  },
  purchaseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  muted: {
    color: C.muted,
    fontSize: 12,
    marginBottom: 8,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  quantityButton: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: C.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityHover: {
    backgroundColor: C.yellow,
  },
  quantitySymbol: {
    color: C.navy,
    fontSize: 20,
    fontWeight: '700',
  },
  quantityText: {
    color: C.navy,
    fontSize: 16,
    fontWeight: '800',
  },
  priceBlock: {
    alignItems: 'flex-end',
  },
  price: {
    color: C.navy,
    fontSize: 23,
    fontWeight: '900',
  },
  buyButton: {
    backgroundColor: C.yellow,
    height: 56,
    borderRadius: 14,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  buyButtonHover: {
    backgroundColor: '#E5B83F',
    transform: [{ scale: 1.02 }],
  },
  buyText: {
    color: C.navy,
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 2,
  },
  arrow: {
    color: C.navy,
    fontSize: 21,
  },
  secure: {
    color: C.muted,
    fontSize: 11,
    textAlign: 'center',
    marginTop: 14,
  },
  benefits: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    paddingVertical: 18,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: C.border,
  },
  benefit: {
    color: C.green,
    fontSize: 11,
    fontWeight: '700',
  },
  footer: {
    color: C.muted,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 3,
    marginTop: 25,
  },
});
