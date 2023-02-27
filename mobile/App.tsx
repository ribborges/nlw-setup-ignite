import './src/lib/dayjs';

import { StatusBar } from 'react-native';

import Loading from './src/components/Loading';
import { Routes } from './src/routes';
import { useEffect } from 'react';

import * as Notifications from 'expo-notifications';

import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black
} from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black
  });

  async function schedulePushNotification() {
    const schedule = await Notifications.getAllScheduledNotificationsAsync();
    console.log("Agendadas: ", schedule);

    if (schedule.length > 0) {
      await Notifications.cancelAllScheduledNotificationsAsync();
    }

    const trigger = new Date(Date.now());
    trigger.setHours(trigger.getHours() + 5);
    trigger.setSeconds(0);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hoooy! 🙈",
        body: "Pare de procrastinar. Ja cumpriu seus hábitos de hoje?"
      },
      trigger
    });
  }

  useEffect(() => {
    schedulePushNotification();
  }, []);

  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (fontsLoaded ? (
    <>
      <Routes />
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
    </>
  ) : (<Loading />));
}