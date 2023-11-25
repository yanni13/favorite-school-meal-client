import React, {useEffect, useState} from 'react';
import SendBird from 'sendbird';

const APP_ID = '6C749CB7-B9D9-40AE-B9D8-9AB18215B1CA';
const USER_ID = 'YOUR_USER_ID';
const NICKNAME = 'YOUR_NICKNAME';

function initializeSendbird() {
    
    const [sb, setSb] = useState(null);

    useEffect(() => {
        const sendbird = new SendBird({appId: APP_ID});
        sendbird.connect(USER_ID, (user, error) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Connected as', user);
                setSb(sendbird);
            }
        });
    }, []);

    return (
        <div>
            <h1>Sendbird Chat App</h1>
        </div>
    );
}

export default initializeSendbird;
