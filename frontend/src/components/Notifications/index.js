import React from 'react';
import { Container, Badge, NotificationList, Notification, Scroll } from './styles';
import { MdNotifications } from 'react-icons/md';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20}/>
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>Voce possui um novo agedamento</p>
            <time>Ha 3 dias atras</time>
            <button type='button'>Marcar como lida</button>
          </Notification>

          <Notification>
            <p>Voce possui um novo agedamento</p>
            <time>Ha 3 dias atras</time>
            <button type='button'>Marcar como lida</button>
          </Notification>

          <Notification>
            <p>Voce possui um novo agedamento</p>
            <time>Ha 3 dias atras</time>
            <button type='button'>Marcar como lida</button>
          </Notification>

          <Notification>
            <p>Voce possui um novo agedamento</p>
            <time>Ha 3 dias atras</time>
            <button type='button'>Marcar como lida</button>
          </Notification>

          <Notification>
            <p>Voce possui um novo agedamento</p>
            <time>Ha 3 dias atras</time>
            <button type='button'>Marcar como lida</button>
          </Notification>

        </Scroll>
      </NotificationList>
    </Container>
  );
}