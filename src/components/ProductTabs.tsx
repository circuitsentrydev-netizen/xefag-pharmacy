
import { StyleSheet, Text, View } from 'react-native';
import HoverButton from './HoverButton';
import { COLORS } from '@/constants/xefag';

export default function ProductTabs() {
  return (
    <View style={styles.tabs}>
      <HoverButton style={styles.activeTab} hoverStyle={styles.tabHover}>
        <Text style={styles.activeText}>RELAX</Text>
      </HoverButton>

      <HoverButton style={styles.inactiveTab} hoverStyle={styles.tabHover}>
        <Text style={styles.inactiveText}>SLEEP</Text>
      </HoverButton>
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#DCE5EA',
    padding: 5,
    borderRadius: 14,
    marginBottom: 17,
  },
  activeTab: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: COLORS.navy,
    borderRadius: 10,
    alignItems: 'center',
  },
  inactiveTab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  tabHover: {
    backgroundColor: COLORS.yellow,
  },
  activeText: {
    color: COLORS.white,
    fontWeight: '900',
    fontSize: 12,
    letterSpacing: 2,
  },
  inactiveText: {
    color: COLORS.navy,
    fontWeight: '800',
    fontSize: 12,
    letterSpacing: 2,
  },
});
