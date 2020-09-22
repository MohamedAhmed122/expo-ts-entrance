import React, { useState } from "react";
import { View, Switch, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { gray, primary, lightGray } from "../Config/Colors";

interface AppSwitchProps {
  style?: StyleProp<ViewStyle>;
}

const AppSwitch: React.FC<AppSwitchProps> = ({ style }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: lightGray, true: primary }}
        ios_backgroundColor={gray}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={style}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppSwitch;
