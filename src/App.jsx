/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar />
    </Router>
  );
}

export default App;
