import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Progress from './components/Progress';
import FileUpload from './components/FileUpload';

function App() {
  const [token, setToken] = useState('');
  return (
    <div>
      <h1>Alpha Academies</h1>
      {!token ? (
        <>
          <Login onLogin={setToken} />
          <Register />
        </>
      ) : (
        <>
          <Progress token={token} />
          <FileUpload token={token} />
          <button onClick={() => setToken('')}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;