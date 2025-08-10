import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrangChu from "./TrangChu";
import NgauNhien from "./NgauNhien";
import Dino1 from './Dino1';
import Dino2 from './Dino2';
import Dino3 from './Dino3';
import Dino4 from './Dino4';
import Dino5 from './Dino5';
import Dino6 from './Dino6';

const styles = `
    @font-face {
      font-family: 'Bungee';
      src: url('/fonts/Bungee-Regular.ttf') format('truetype');
    }

    .title {
      font-family: 'Bungee';
    }
`;

function App() {
  React.useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };

  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TrangChu />} />
          <Route path="/ngau-nhien" element={<NgauNhien />} />
          <Route path="/dino-1" element={<Dino1 />} />
          <Route path="/dino-2" element={<Dino2 />} />
          <Route path="/dino-3" element={<Dino3 />} />
          <Route path="/dino-4" element={<Dino4 />} />
          <Route path="/dino-5" element={<Dino5 />} />
          <Route path="/dino-6" element={<Dino6 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
