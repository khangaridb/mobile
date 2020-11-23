import React from 'react';
import { Box, Text, Icon } from 'components';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AbFlag from 'assets/flags/ab-flag.png';
import BcFlag from 'assets/flags/bc-flag.png';
import MbFlag from 'assets/flags/mb-flag.png';
import NbFlag from 'assets/flags/nb-flag.png';
import NlFlag from 'assets/flags/nl-flag.png';
import NtFlag from 'assets/flags/nt-flag.png';
import NsFlag from 'assets/flags/ns-flag.png';
import NuFlag from 'assets/flags/nu-flag.png';
import OnFlag from 'assets/flags/on-flag.png';
import { Region } from 'shared/Region';

interface RegionItemProps {
  code: Region;
  flagIcon: any;
  name: string;
  selected: boolean;
  lastItem?: boolean;
  onPress: (code: Region) => void;
  testID?: string;
}

export const regionData: Omit<RegionItemProps, 'onPress' | 'selected' | 'name'>[] = [
  { code: 'BN', flagIcon: AbFlag },
  { code: 'BH', flagIcon: BcFlag },
  { code: 'BG', flagIcon: MbFlag },
  { code: 'BZ', flagIcon: NbFlag },
  { code: 'NL', flagIcon: NlFlag },
  { code: 'SH', flagIcon: NtFlag },
  { code: 'SB', flagIcon: NsFlag },
  { code: 'KU', flagIcon: NuFlag },
  { code: 'CH', flagIcon: OnFlag },
];

const RegionItem_ = ({ code, onPress, name, lastItem, selected, testID }: RegionItemProps) => (
  <>
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onPress(code)}
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      testID={testID}
    >
      <Box
        paddingVertical="m"
        marginHorizontal="-m"
        paddingHorizontal="m"
        flexDirection="row"
        alignContent="center"
        justifyContent="space-between"
        backgroundColor="infoBlockNeutralBackground"
        borderRadius={5}
      >
        <Text variant="bodyText" color="overlayBodyText" marginHorizontal="s">
          {name}
        </Text>
        <Box alignSelf="center">{selected && <Icon size={25} name="icon-check" />}</Box>
      </Box>
    </TouchableOpacity>
    {!lastItem && <Box height={5} marginHorizontal="-m" backgroundColor="overlayBackground" />}
  </>
);
export const RegionItem = React.memo(RegionItem_);

export const regionStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flag: {
    width: 40,
    height: 22,
    resizeMode: 'stretch',
  },
});
