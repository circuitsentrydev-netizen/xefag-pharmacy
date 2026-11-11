
import { StyleSheet, View, Image } from 'react-native';

export default function ProductDisplay() {
  return (
    <View style={styles.display}>
      <Image
        source={require('../assets/images/relax-bottle.png')}
        style={styles.productImage}
        resizeMode="contain"
      />
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

  productImage: {
    width: 260,
    height: 390,
  },
});
