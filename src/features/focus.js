import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton'
import { spacing } from '../utils/sizes'

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return(
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.textInput}>
          <TextInput onChangeText={setSubject} label="Enter the text" />
        </View>
        <View style={styles.button}>
          <RoundedButton title="+" onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    justifyContent: 'top',
    padding: spacing.md,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center',
  }
});
