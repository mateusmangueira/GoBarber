import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
// import { Container } from './styles';

export default function NewSchedule() {
  return (
    <Background>

    </Background>
  );
}

NewSchedule.navigationOptions = {
  tabBarLabel: 'Agendar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
