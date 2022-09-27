import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ClickFlipCard } from './components/ClickFlipCard';
import { GamesContextProvider } from './contexts/GamesContext';

import { Router } from './Router';

function App() {
  return (
    <BrowserRouter>
      <GamesContextProvider>
        <Router />
      </GamesContextProvider>
    </BrowserRouter>
  );
}

export default App;
