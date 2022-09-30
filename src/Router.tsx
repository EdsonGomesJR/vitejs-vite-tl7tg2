import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { AdsPage } from './AdsPage';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games/:id/ads" element={<AdsPage />} />
    </Routes>
  );
}
