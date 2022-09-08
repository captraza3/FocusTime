import React, { useState } from 'react';
import { Text, View, StyleSheet, Vibration } from 'react-native';
import { spacing, fontSize } from '../utils/sizes';
import { colors } from '../utils/colors';
import { Countdown } from '../components/CountDown';
import { RoundedButton } from '../components/RoundedButton';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
const Time_Second = 1000;
const pattern = [
  1 * Time_Second,
  1 * Time_Second,
  1 * Time_Second,
  1 * Time_Second,
  1 * Time_Second,
];
export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStart, setStart] = useState(true);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  const onEnd = (reset) => {
    Vibration.vibrate(pattern);
    setStart(true);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countDownContainer}>
        <Countdown
          minutes={minutes}
          isPaused={!isStart}
          onProgress={(prog) => setProgress(prog)}
          onEnd={onEnd}
        />
        <View>
          <Text style={styles.header}> Focusing on: {focusSubject}</Text>
        </View>
      </View>
      <View>
        <ProgressBar style={styles.progressBarStyle} progress={progress} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}> Minutes</Text>
      </View>
      <View style={styles.timeButtons}>
        <RoundedButton
          style={{ marginTop: 50, marginRight: 5 }}
          title={5}
          onPress={() => {
            setMinutes(5);
          }}
        />
        <RoundedButton
          style={{ marginTop: 30, marginRight: 5 }}
          title={10}
          onPress={() => {
            setMinutes(10);
          }}
        />
        <RoundedButton
          style={{ marginTop: 10, marginRight: 5 }}
          title={15}
          onPress={() => {
            setMinutes(15);
          }}
        />
        <RoundedButton
          style={{ marginTop: 30, marginRight: 5 }}
          title={30}
          onPress={() => {
            setMinutes(30);
          }}
        />
        <RoundedButton
          style={{ marginTop: 50 }}
          title={60}
          onPress={() => {
            setMinutes(60);
          }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        {isStart && (
          <RoundedButton
            size={130}
            title="start"
            onPress={() => setStart(false)}
          />
        )}
        {!isStart && (
          <RoundedButton
            size={130}
            title="pause"
            onPress={() => setStart(true)}
          />
        )}
      </View>
      <View style={styles.timeButtons}>
        <RoundedButton title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countDownContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeButtons: {
    flexDirection: 'row',
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'top',
  },
  text: {
    paddingTop: spacing.xl,
    fontSize: spacing.md,
    color: colors.white,
  },
  buttonWrapper: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingTop: spacing.xl,
    fontWeight: 'bold',
    fontSize: spacing.md,
    color: colors.white,
  },
  progressBarStyle: {
    height: 10,
    backgroundColor: '#5e84e2',
    opacity: 0.3,
  },
});
