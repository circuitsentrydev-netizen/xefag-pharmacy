
import type { ReactNode } from 'react';
import { Pressable, type StyleProp, type ViewStyle } from 'react-native';

interface HoverButtonProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  hoverStyle?: StyleProp<ViewStyle>;
}

export default function HoverButton({
  children,
  style,
  hoverStyle,
}: HoverButtonProps) {
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
