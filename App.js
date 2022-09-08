import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/focus';
import { spacing, fontSize } from './src/utils/sizes' 
import { Timer } from './src/features/Timer'
import { FocusHistory } from './src/features/focushistory'
export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addSubject= {setCurrentSubject} />
        <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          clearSubject = {() => {setCurrentSubject(null)}}
          onTimerEnd = {(subject) => {setHistory([...history, subject])}}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  }
});
