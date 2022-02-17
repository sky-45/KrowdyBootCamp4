import { Button, Dialog } from '@mui/material';
import MessageCard from 'components/MessageCard';
import React, { useState } from 'react';

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
  const [open, setOpen] = useState(false);

  const _handleClick = () => {
    setOpen(true);
  };

  const _handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      <Button onClick={_handleClick}>Abrir</Button>
      <Dialog open={open} onClose={_handleClose}>
        <MessageCard onClose={_handleClose} />
      </Dialog>
    </div>
  );
}

export default App;
