
import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  TabTriggerSlotProps,
  TabListProps,
} from 'expo-router/ui';

import { Pressable, View, StyleSheet } from 'react-native';

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: '100%' }} />

      {/* Keep route registration, but hide the Expo Starter navigation */}
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton>Home</TabButton>
          </TabTrigger>

          <TabTrigger name="explore" href="/explore" asChild>
            <TabButton>Explore</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

export function TabButton({
  children,
  ...props
}: TabTriggerSlotProps) {
  return (
    <Pressable >
      {children}
    </Pressable>
  );
}

export function CustomTabList(props: TabListProps) {
  return (
    <View
      {...props}
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={styles.hiddenTabList}
    >
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  hiddenTabList: {
    display: 'none',
  },
});
