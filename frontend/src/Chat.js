import React, { useEffect, useState, Fragment } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { echo } from './Brodscat';
import api from './api';

import NavBar from './Header';
import Card from './Card';

function ChatComponent() {
  const [data, setData] = useState([]);

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

  useEffect(() => {
    echoNotification();
    fetchMessages();
  }, []);

  return (
    <Fragment>
      <NavBar />
      <div className="container" >
        <Card data={data} />
      </div>
    </Fragment>
  );
}

export default ChatComponent;
