
import { StyleSheet, Text, View } from 'react-native';
import HoverButton from './HoverButton';

function RelaxIcon() {
  return (
    <View style={styles.relaxIcon}>
      <View style={styles.relaxInner} />
      <View style={styles.relaxDot} />
    </View>
  );
}

function SleepIcon() {
  return (
    <View style={styles.moonContainer}>
      <View style={styles.moon} />
      <View style={styles.moonCutout} />
    </View>
  );
}

export default function ProductTabs() {
  return (
    <View style={styles.tabs}>
      <HoverButton
        style={styles.tab}
        hoverStyle={styles.tabHover}
      >
        <RelaxIcon />
        <Text style={styles.activeText}>Relax</Text>
      </HoverButton>

      <HoverButton
        style={styles.tab}
        hoverStyle={styles.tabHover}
      >
        <SleepIcon />
        <Text style={styles.inactiveText}>Sleep</Text>
      </HoverButton>
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 32,
    marginTop: 15,
    marginBottom: 12,
    paddingHorizontal: 2,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingVertical: 5,
    paddingHorizontal: 2,
    borderRadius: 10,
  },
  tabHover: {
    backgroundColor: 'rgba(255,255,255,0.18)',
  },
  activeText: {
    color: '#171717',
    fontSize: 13,
    fontWeight: '500',
  },
  inactiveText: {
    color: '#8E751F',
    fontSize: 13,
    fontWeight: '500',
  },
  relaxIcon: {
    width: 17,
    height: 17,
    borderWidth: 1.4,
    borderColor: '#171717',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  relaxInner: {
    width: 7,
    height: 7,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#171717',
  },
  relaxDot: {
    position: 'absolute',
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#171717',
    top: 2,
    right: 2,
  },
  moonContainer: {
    width: 17,
    height: 17,
    position: 'relative',
  },
  moon: {
    width: 15,
    height: 15,
    borderRadius: 9,
    borderWidth: 1.3,
    borderColor: '#8E751F',
  },
  moonCutout: {
    position: 'absolute',
    width: 12,
    height: 13,
    borderRadius: 8,
    backgroundColor: '#F6B110',
    top: -2,
    right: -2,
  },
});
