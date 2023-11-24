import { useState, useCallback } from 'react';
import SBChannelList from '@sendbird/uikit-react/ChannelList';
import SBConversation from '@sendbird/uikit-react/Channel';
import SBChannelSettings from '@sendbird/uikit-react/ChannelSettings';
import withSendBird from '@sendbird/uikit-react/withSendbird';

function CustomizedAppHOC(props) {
    const {
        stores: {sdkStore, userStore},
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
        <div className="sendbird-app__wrap">
            <div className="sendbird-app__channellist-wrap">
                <SBChannelList
                onChannelSelect={(channel) => {
                    setCurrentChannelUrl(channel.url);
                }}
                />
      </div>
      </div>
    );
}

export default withSendBird(CustomizedAppHOC);
