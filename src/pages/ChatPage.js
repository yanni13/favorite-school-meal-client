import React, { useEffect, useState } from 'react';
import SendBird from 'sendbird';
import SendbirdApp from "@sendbird/uikit-react/App";
import ChannelList from "@sendbird/uikit-react/ChannelList"
import "@sendbird/uikit-react/dist/index.css";
import TitledHeader from '../components/Header/TitledHeader';
import "../styles/Chat/styles.css"
import CustomizedApp from '../components/Chat/CustomizedApp';
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider';

const APP_ID = '6C749CB7-B9D9-40AE-B9D8-9AB18215B1CA';
const USER_ID = 'Demo user';

function ChatPage() {
  const [sb, setSb] = useState(null);

  useEffect(() => {
    const sendbird = new SendBird({ appId: APP_ID });

    // const sb = useMemo(() => new SendBird);
    
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
    <TitledHeader title="채팅방 목록"/>
    <div className='app-wraapper'>
      <SendbirdProvider appId={APP_ID} userId={USER_ID}>
        <CustomizedApp/>
      </SendbirdProvider>
      {/* <SendbirdApp appId={APP_ID} userId={USER_ID} /> */}
      {/* <ChannelList
        onChannelSelect={(channel: GroupChannel) => setUrl()}
      ></ChannelList> */}
      {/* Your chat components go here */}
      
    </div>
    </>
  );
}

export default ChatPage;
