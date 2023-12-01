import React, { useEffect, useState } from 'react';
import SendBird from 'sendbird';
import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";
import TitledHeader from '../components/Header/TitledHeader';
import "../styles/Chat/styles.css"
const APP_ID = '6C749CB7-B9D9-40AE-B9D8-9AB18215B1CA';
const USER_ID = 'Demo user';

function ChatPage() {
  const [sb, setSb] = useState(null);

  useEffect(() => {
    const sendbird = new SendBird({ appId: APP_ID });
    sendbird.connect(USER_ID, (user, error) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Connected as', user);
        setSb(sendbird);
      }
    });
  }, []);

  const sendMessage = (channelUrl, message) => {
    const params = new sb.UserMessageParams();
    params.message = message;

    sb.GroupChannel.getChannel(channelUrl, (groupChannel, error) => {
      if (error) {
        console.error(error);
      } else {
        groupChannel.sendUserMessage(message, (userMessage, sendError) => {
          if (sendError) {
            console.error(sendError);
          } else {
            console.log('Message sent:', userMessage);
          }
        });
      }
    });
  };

  return (
    <>
    <TitledHeader title="채팅"/>
    <div className="App">
      <SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
    </>
  );
}

export default ChatPage;
