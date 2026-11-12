import { StyleSheet, View, Image } from 'react-native';

export default function ProductDisplay() {
  return (
    <View style={styles.display} pointerEvents="none">
      <Image
        source={require('../../assets/images/relax-bottle.png')}
        style={styles.productImage}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
});
