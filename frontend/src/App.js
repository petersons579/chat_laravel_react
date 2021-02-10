import React, { useEffect } from 'react';

import { echoNotification } from './Brodscat';

function App() {

  useEffect(() => {
    echoNotification();
  }, []);

  return (
    <div className="App">
      <h1>Teste</h1>
    </div>
  );
}

export default App;
