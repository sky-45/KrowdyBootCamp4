import { Dialog, DialogActions, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import { keyBy } from 'lodash';
import React, { useMemo, useState } from 'react';
const MessageType = {
  Invitation: 'invitation',
  Customized: 'customized',
  Reminder: 'reminder',
};

const ChannelType = {
  Email: 'email',
  Sms: 'sms',
  Whatsapp: 'whatsapp',
};

const templateConfigs = [
  {
    type: MessageType.Invitation,
    channel: ChannelType.Email,
    subject: 'Invitación a proceso',
    body: 'Hola, [userName] hemos visto tu perfil y nos parece interesante. Encuentra mas informacion aqui: [Link]',
  },
  {
    type: MessageType.Invitation,
    channel: ChannelType.Sms,
    body: 'Hola, [userName] hemos visto tu perfil y nos parece interesante. Encuentra mas informacion aqui: [Link]',
  },
  {
    type: MessageType.Invitation,
    channel: ChannelType.Whatsapp,
    body: 'Hola, [userName] hemos visto tu perfil y nos parece interesante. Encuentra mas informacion aqui: [Link]',
  },
  {
    type: MessageType.Reminder,
    channel: ChannelType.Email,
    subject: 'Invitación a proceso',
    body: 'Hola, [userName] hemos visto tu perfil y nos parece interesante. Encuentra mas informacion aqui: [Link]',
  },
  {
    type: MessageType.Reminder,
    channel: ChannelType.Sms,
    subject: 'Invitación a proceso',
    body: 'Hola, [userName] hemos visto tu perfil y nos parece interesante. Encuentra mas informacion aqui: [Link]',
  },
  {
    type: MessageType.Reminder,
    channel: ChannelType.Whatsapp,
    subject: 'Invitación a proceso',
    body: 'Hola, [userName] hemos visto tu perfil y nos parece interesante. Encuentra mas informacion aqui: [Link]',
  },
  {
    type: MessageType.Customized,
    channel: ChannelType.Email,
    subject: '',
    body: '',
  },
  {
    type: MessageType.Customized,
    channel: ChannelType.Sms,
    subject: '',
    body: '',
  },
  {
    type: MessageType.Customized,
    channel: ChannelType.Whatsapp,
    subject: '',
    body: '',
  },
];

const SectionCode = {
  SelectMessageType: 'SelectMessageType',
  SelectChannelType: 'SelectChannelType',
  PreviewEmail: 'PreviewEmail',
  PreviewSms: 'PreviewSms',
  PreviewWhatsapp: 'PreviewWhatsapp',
};

const Sections = [
  {
    code: SectionCode.SelectMessageType,
    title: 'Selecciona el tipo de mensaje',
  },
  {
    code: SectionCode.SelectChannelType,
    title: 'Selecciona canales',
  },
  {
    code: SectionCode.PreviewEmail,
    title: 'Correo eletrónico',
  },
  {
    code: SectionCode.PreviewSms,
    title: 'Correo eletrónico',
  },
  {
    code: SectionCode.PreviewWhatsapp,
    title: 'Correo eletrónico',
  },
];

const sectionBy = keyBy(Sections, 'code');

const initFlow = [SectionCode.SelectMessageType, SectionCode.SelectChannelType];

/* 
  idea de implementacion generar la siguiente estructura

  {
    userIds: [],
    messageType: '',
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
  const [sections /* , setSections */] = useState(
    initFlow.map((code) => sectionBy[code]),
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSection = useMemo(() => {
    return sections[currentIndex];
  }, []);

  const content = useMemo(() => {
    switch (currentSection.code) {
      default: {
        return null;
      }
    }
  }, []);

  return (
    <div className="App">
      <Dialog open>
        <DialogTitle>{currentSection.title}</DialogTitle>
        {content}
        <DialogActions>
          <Button>Cancelar</Button>
          <Button>Siguiente</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
