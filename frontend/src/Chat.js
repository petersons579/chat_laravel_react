import React, { useEffect, useState, Fragment } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { echo } from './Brodscat';
import api from './api';

import NavBar from './Header';
import Card from './Card';
import FooterContainer from './ContainerFooter';
import { container } from './styles';

function ChatComponent() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState();
  const [user, setUser] = useState(1);

  const echoNotification = () => {
    echo
    .channel('chat')
    .listen('ChatMessageCreated', ev => {
      setData(currentArray => [ ...currentArray, ev.message ]);
    });
  };

  const fetchMessages = async () => {
    const response = await api.get('messages');
    setData(response.data);
  };

  const saveMessage = async () => {
      await api.post('messages', { user, message });
      setMessage();
  };

  useEffect(() => {
    echoNotification();
    fetchMessages();
  }, []);

  const onChangeMessage = evt => setMessage(evt.target.value);

  return (
    <Fragment>
      <NavBar />
      <div className="container" style={container} >
        <Card data={data} />
        <FooterContainer message={message} onChangeMessage={onChangeMessage} save={saveMessage} />
      </div>
    </Fragment>
  );
}

export default ChatComponent;
