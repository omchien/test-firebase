import './App.css';

import React from 'react';

function App() {
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
    <div className="App">
      Config keys 123:
      <div>
        {configKeys.map((item) => (
          <div>
            `${item.key}: ${item.value}`
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
