
import { StyleSheet, Text, View } from 'react-native';
import HoverButton from './HoverButton';

const durations = ['30', '60', '90'];

export default function DurationSelector() {
  return (
    <View style={styles.container}>
      {durations.map((duration, index) => {
        const selected = index === 0;

        return (
          <HoverButton
            key={duration}
            style={[
              styles.button,
              selected ? styles.selected : styles.unselected,
            ]}
            hoverStyle={selected ? styles.selectedHover : styles.hover}
          >
            <Text
              style={[
                styles.buttonText,
                selected ? styles.selectedText : styles.unselectedText,
              ]}
            >
              {duration}
            </Text>
          </HoverButton>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 140,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    width: 36,
    height: 36,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: '#171717',
  },
  unselected: {
    backgroundColor: '#D6A51F',
  },
  selectedHover: {
    backgroundColor: '#333333',
    transform: [{ scale: 1.06 }],
  },
  hover: {
    backgroundColor: '#E8BD48',
    transform: [{ scale: 1.06 }],
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  selectedText: {
    color: '#F8C52B',
  },
  unselectedText: {
    color: '#F8E39A',
  },
});
