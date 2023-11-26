import { useState, useCallback } from 'react';
import SBChannelList from '@sendbird/uikit-react/ChannelList';
import SBConversation from '@sendbird/uikit-react/Channel';
import SBChannelSettings from '@sendbird/uikit-react/ChannelSettings';
import withSendBird from '@sendbird/uikit-react/withSendbird';
import CustomizedAppHOC from './CustomizedApp';

function Chat(props) {
  // Default props
  const {
    stores: { sdkStore, userStore },
    config: {
      isOnline,
      userId,
      appId,
      accessToken,
      theme,
      userListQuery,
      logger,
      pubsub,
    },
  } = props;

  const [currentChannelUrl, setCurrentChannelUrl] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className='sendbird-app__wrap'>
        <SBChannelList
          onChannelSelect={(channel) => {
            setCurrentChannelUrl(channel.url);
          }}
        />
        <div className="sendbird-app__conversation-wrap">
        <SBConversation
          channelUrl={currentChannelUrl}
          onChatHeaderActionClick={() => {
            setShowSettings(true);
          }}
        />
      </div>
      {showSettings && (
        <div className="sendbird-app__settingspanel-wrap">
          <SBChannelSettings
            //channelUrl={channelUrl}
            onCloseClick={() => {
              setShowSettings(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default withSendBird(Chat);