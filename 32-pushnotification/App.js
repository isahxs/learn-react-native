import { use, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import notifee, { AuthorizationStatus, EventType, AndroidImportance, TriggerType, RepeatFrequency } from '@notifee/react-native';

export default function App() {
  const [statusNotification, setNotification] = useState(true);

  useEffect(() => {
    async function getPermission() {
      const settings = await notifee.requestPermission();
      if(settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED){
        console.log("Permission: ", settings.authorizationStatus)
        setNotification(true)
      } else {
        console.log("Usuário negou a permissão!")
        setNotification(false)
      }
    }
    getPermission();
  }, [])

  //Notificação de background - quando o app estiver minimizado ou fechado
  notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail;

    if(type == EventType.PRESS){
      console.log("Clicou na notificação do Backgorund: ", pressAction?.id)
      if(notification?.id){
        await notifee.cancelNotification(notification?.id)
      }
    }
    console.log("Evento do background")
  })

  //Evento que aparece na tela aberta
  useEffect(() => {
    return notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log("Usuário descartou a notificação")
          break;
        case EventType.PRESS:
          console.log("Tocou na notificação: ", detail.notification)
      }
    })
  }, [])

  async function handleNotificate() {
    if (!statusNotification) {
      return;
    }

    const channelId = await notifee.createChannel({
      id: 'lembrete',
      name: 'lembrete',
      vibration: true,
      importance: AndroidImportance.HIGH
    })

    await notifee.displayNotification({
      id: 'Atenção',
      title: 'Produto em promoção',
      body: 'Veja agora as nossas promoções de Black Friday',
      android: {
        channelId,
        pressAction: {
          id: 'default'
        }
      }
    })
  }

  async function handleNewNotification() {
    const date = new Date(Date.now())

    date.setMinutes(date.getMinutes() + 3);

    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime()
    }

    //aguardando o disparo da notificação
    await notifee.createTriggerNotification({
      title: 'Lembrete para hoje',
      body: 'Verificar status das notificações',
      android: {
        channelId: 'lembrete',
        importance: AndroidImportance.HIGH,
        pressAction: {
          id: 'default'
        }
      }
    }, trigger)
  }

  function handleListNotifications(){
    notifee.getTriggerNotificationIds()
    .then((ids) => {
      console.log(ids)
    })
  }

  async function handleCancelNotification() {
    notifee.cancelNotification("stSD9OwvsHcO1xtmlorc")
  }

  async function handleWeekly() {
    const date = new Date(Date.now());

    date.setMinutes(date.getMinutes() + 1);
    
    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
      repeatFrequency: RepeatFrequency.WEEKLY
    }
    
    await notifee.createTriggerNotification({
      title: "Lembrete - Expo",
      body: "Ouvir mais álbuns semanalmente",
      android: {
        channelId: 'lembrete',
        importance: AndroidImportance.HIGH,
        pressAction: {
          id: 'default'
        }
      }
    }, trigger)
  }

  return (
    <View style={styles.container}>
      <Text>Notificações App</Text>
      <Button title="Enviar notificação" onPress={handleNotificate} />

      <Button title="Agendar notificação" onPress={handleNewNotification} />

      <Button title="Listar notificações" onPress={handleListNotifications} />

      <Button title="Cancelar notificação agendada" onPress={handleCancelNotification} />
      
      <Button title="Agendar semanalmente" onPress={handleWeekly} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12
  },
});
