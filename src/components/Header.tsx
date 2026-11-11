
import { StyleSheet, Text, View } from 'react-native';
import HoverButton from './HoverButton';

function XefagLogo() {
  return (
    <View style={styles.logoGroup}>
      <View style={styles.logoMark}>
        {Array.from({ length: 8 }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.logoDot,
              {
                transform: [
                  { rotate: `${index * 45}deg` },
                  { translateY: -10 },
                ],
              },
            ]}
          />
        ))}
      </View>

      <Text style={styles.logoText}>xefag</Text>
    </View>
  );
}

function ProfileIcon() {
  return (
    <View style={styles.profileIcon}>
      <View style={styles.profileHead} />
      <View style={styles.profileBody} />
    </View>
  );
}

function BasketIcon() {
  return (
    <View style={styles.basketIcon}>
      <View style={styles.basketHandle} />
      <View style={styles.basketBody}>
        <View style={styles.basketLine} />
        <View style={styles.basketLine} />
      </View>
    </View>
  );
}

export default function Header() {
  return (
    <View style={styles.header}>
      <HoverButton
        style={styles.backButton}
        hoverStyle={styles.buttonHover}
      >
        <Text style={styles.backArrow}>‹</Text>
      </HoverButton>

      <View style={styles.logoPosition}>
        <XefagLogo />
      </View>

      <View style={styles.actions}>
        <HoverButton
          style={styles.profileButton}
          hoverStyle={styles.buttonHover}
        >
          <ProfileIcon />
        </HoverButton>

        <HoverButton
          style={styles.basketButton}
          hoverStyle={styles.buttonHover}
        >
          <BasketIcon />

          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </HoverButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  buttonHover: {
    backgroundColor: '#F9D76B',
  },
  backArrow: {
    color: '#171717',
    fontSize: 32,
    lineHeight: 35,
    fontWeight: '300',
    marginTop: -3,
  },
  logoPosition: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    pointerEvents: 'none',
  },
  logoGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  logoMark: {
    width: 29,
    height: 29,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoDot: {
    position: 'absolute',
    width: 7,
    height: 9,
    borderRadius: 3,
    backgroundColor: '#171717',
  },
  logoText: {
    color: '#111111',
    fontSize: 25,
    fontWeight: '700',
    fontFamily: 'serif',
    letterSpacing: -1,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    zIndex: 2,
  },
  profileButton: {
    width: 36,
    height: 36,
    borderRadius: 20,
    backgroundColor: '#D99A0C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    width: 17,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHead: {
    width: 7,
    height: 7,
    borderRadius: 5,
    borderWidth: 1.3,
    borderColor: '#FFFFFF',
    marginBottom: 2,
  },
  profileBody: {
    width: 12,
    height: 7,
    borderWidth: 1.3,
    borderColor: '#FFFFFF',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomWidth: 0,
  },
  basketButton: {
    width: 36,
    height: 36,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  basketIcon: {
    width: 18,
    height: 19,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  basketHandle: {
    width: 8,
    height: 5,
    borderWidth: 1.2,
    borderColor: '#171717',
    borderBottomWidth: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  basketBody: {
    width: 15,
    height: 11,
    borderWidth: 1.3,
    borderColor: '#171717',
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  basketLine: {
    width: 1,
    height: 6,
    backgroundColor: '#171717',
  },
  badge: {
    position: 'absolute',
    right: -2,
    top: -2,
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '900',
  },
});
