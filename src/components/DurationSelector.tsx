
import { StyleSheet, Text, View } from 'react-native';
import HoverButton from './HoverButton';
import { COLORS } from '@/constants/xefag';

const durations = ['30 MIN', '60 MIN', '90 MIN'];

export default function DurationSelector() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your duration</Text>

      <View style={styles.row}>
        {durations.map((duration, index) => (
          <HoverButton
            key={duration}
            style={[
              styles.button,
              index === 0 && styles.selected,
            ]}
            hoverStyle={styles.hover}
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
    marginBottom: 20,
  },
  title: {
    color: COLORS.navy,
    fontSize: 14,
    fontWeight: '900',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 9,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  hover: {
    backgroundColor: COLORS.yellow,
    borderColor: COLORS.yellow,
  },
  selected: {
    backgroundColor: COLORS.navy,
    borderColor: COLORS.navy,
  },
  buttonText: {
    color: COLORS.navy,
    fontSize: 11,
    fontWeight: '900',
  },
  selectedText: {
    color: COLORS.white,
  },
});
