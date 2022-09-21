import { BrowserRouter } from 'react-router-dom';
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
