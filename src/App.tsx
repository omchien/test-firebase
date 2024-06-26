import './App.css';

import React from 'react';

import { db } from './components/firebase/firebase';

function App() {
  console.log(db);
  const configKeys = [
    { key: 'REACT_APP_API_KEY', value: process.env.REACT_APP_API_KEY },
    { key: 'REACT_APP_AUTH_DOMAIN', value: process.env.REACT_APP_AUTH_DOMAIN },
    { key: 'REACT_APP_PROJECT_ID', value: process.env.REACT_APP_PROJECT_ID },
    { key: 'REACT_APP_STORAGE_BUCKET', value: process.env.REACT_APP_STORAGE_BUCKET },
    { key: 'REACT_APP_MESSAGING_SENDER_ID', value: process.env.REACT_APP_MESSAGING_SENDER_ID },
    { key: 'REACT_APP_APP_ID', value: process.env.REACT_APP_APP_ID },
    { key: 'REACT_APP_MEASUREMENT_ID', value: process.env.REACT_APP_MEASUREMENT_ID },
    { key: 'REACT_APP_DATABASE_URL', value: process.env.REACT_APP_DATABASE_URL },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '100px',
        textAlign: 'start',
      }}
    >
      <h3 style={{ marginBottom: '10px' }}>Config keys 123:</h3>
      <div style={{}}>
        {configKeys.map((item) => (
          <div style={{ margin: '10px 0' }}>{`${item.key}: ${item.value}`}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
