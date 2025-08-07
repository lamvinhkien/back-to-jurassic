import TrangChu from "./TrangChu";
import React from 'react';

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
    <div className="App overflow-hidden">
      <TrangChu />
    </div>
  );
}

export default App;
