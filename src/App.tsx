import { Dialog } from '@mui/material';
import MessageCard from 'components/MessageCard';
import React from 'react';

/* 
  idea de implementacion generar la siguiente estructura

  {
    userIds: [],
    messageType: 'Invitation',
    channels: [{
      type: 'email',
      subject: '',
      body: '',
    }, {
      type: 'sms',
      body: '',
    },{
      type: 'whatsapp',
      body: '',
    }] 
  }

*/

function App() {
  return (
    <div className="App">
      <Dialog open>
        <MessageCard />
      </Dialog>
    </div>
  );
}

export default App;
