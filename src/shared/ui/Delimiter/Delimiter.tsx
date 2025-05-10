import React from 'react';
import { Box, Text } from 'themes';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface Props {
  marginTop?: number;
}

export const Delimiter = ({ marginTop }: Props) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Box
      marginTop={marginTop}
      width="100%"
      flexDirection="row"
      alignItems="center">
      <Box style={styles.line} />
      <Text style={styles.text}>and</Text>
      <Box style={styles.line} />
    </Box>
  );
};

const stylesheet = createStyleSheet(theme => ({
  line: {
    flexGrow: 1,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.basic_100,
  },
  text: {
    marginHorizontal: 8,
    color: theme.colors.basic_500,
    fontSize: 14,
    fontFamily: theme.fonts.GilroyMedium,
    fontWeight: '600',
  },
}));
