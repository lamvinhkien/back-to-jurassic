import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrangChu from "./TrangChu";
import NgauNhien from "./NgauNhien";
import Dino1 from './Dino1';

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
          <Route path="/dino-2" element={<Dino1 />} />
          <Route path="/dino-3" element={<Dino1 />} />
          <Route path="/dino-4" element={<Dino1 />} />
          <Route path="/dino-5" element={<Dino1 />} />
          <Route path="/dino-6" element={<Dino1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
