import './App.css';
import Main from './pages/Main';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </main>
  );
}

export default App;
