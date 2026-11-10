
import { StyleSheet, Text, View } from 'react-native';
import HoverButton from './HoverButton';
import { COLORS } from '@/constants/xefag';

const durations = ['30 MIN', '60 MIN', '90 MIN'];

export default function DurationSelector() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {durations.map((duration, index) => (
          <HoverButton
            key={duration}
            style={[
              styles.button,
              index === 0 && styles.selected,
            ]}
            hoverStyle={
              index === 0
                ? styles.selectedHover
                : styles.hover
            }
          >
            <Text
              style={[
                styles.buttonText,
                index === 0 && styles.selectedText,
              ]}
            >
              {duration}
            </Text>
          </HoverButton>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 12,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  button: {
    flex: 1,
    minHeight: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
  },
  selected: {
    backgroundColor: COLORS.yellow,
    borderColor: COLORS.yellow,
  },
  hover: {
    backgroundColor: COLORS.paleYellow,
    borderColor: COLORS.yellow,
  },
  selectedHover: {
    backgroundColor: '#E9B936',
    borderColor: '#E9B936',
  },
  buttonText: {
    color: COLORS.navy,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  selectedText: {
    color: COLORS.navy,
  },
});
