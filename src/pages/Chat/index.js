import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/database';

import firebaseConfig from './firebase.config';

import {
  Container,
  Main,
  Textarea,
  ChatContent,
  ContainerLoading,
  Loading,
} from './styles';

export default function Chat({ match }) {
  const [chatList, setChatList] = useState([]);
  const [textSend, setTextSend] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { username } = match.params;
    setUserName(username);
  }, [match.params]);

  useEffect(() => {
    setLoading(true);
    firebase.initializeApp(firebaseConfig);
    const chatRef = firebase.database().ref('chats');

    chatRef.on('value', snapshot => {
      const data = snapshot.val();
      if (data) {
        const array = Object.keys(data).map(key => {
          return data[key];
        });
        setLoading(false);
        setChatList(array || []);
      }
    });
  }, []);

  const handleSubmit = useCallback(
    (event, user) => {
      if (event.keyCode === 13 && event.shiftKey === false) {
        event.preventDefault();
        firebase
          .database()
          .ref(`chats/${new Date().getTime()}`)
          .set({
            id: new Date().getTime(),
            type: 'text',
            content: textSend,
            date: new Date().toLocaleString(),
            user,
          });
        setTextSend('');
      }
    },
    [textSend]
  );

  return (
    <Container>
      {loading && (
        <ContainerLoading>
          <Loading loading />
        </ContainerLoading>
      )}
      <Main>
        <ul>
          {chatList.map(chat => (
            <li key={chat.id}>
              <ChatContent left={chat.user !== userName}>
                <div>
                  <h1>{chat.user}</h1>
                  <p>{chat.content}</p>
                  <div>
                    <span>{chat.date}</span>
                  </div>
                </div>
              </ChatContent>
            </li>
          ))}
        </ul>
      </Main>
      <form onSubmit={e => handleSubmit(e, userName)}>
        <div>
          <Textarea
            rows="1"
            onKeyDown={e => handleSubmit(e, userName)}
            value={textSend}
            onChange={e => setTextSend(e.target.value)}
            placeholder="Enter message"
          />
        </div>
      </form>
    </Container>
  );
}

Chat.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      filter: PropTypes.string,
    }),
  }).isRequired,
};
