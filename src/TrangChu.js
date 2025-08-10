import './TrangChu.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TrangChu = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <div
      className="trangchu-container overflow-hidden"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #FFE3A4 0%, #FFFBE2 50%, #FFE3A4 100%)',
        padding: '20px',
        boxSizing: 'border-box',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      {/* Khủng long 1 */}
      <img
        src="/images/dino5.png"
        alt="Khủng long"
        style={{
          position: 'absolute',
          bottom: '12%',
          left: '5%',
          width: '35vw',
          zIndex: 1,
        }}
      />

      {/* Khủng long 2 */}
      <img
        src="/images/dino2.png"
        alt="Khủng long"
        style={{
          position: 'absolute',
          bottom: '6%',
          left: '34%',
          width: '40vw',
          zIndex: 1,
        }}
      />

      {/* Khủng long 3 */}
      <img
        src="/images/dino1.png"
        alt="Khủng long"
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-10px',
          width: '35vw',
          zIndex: 1,
        }}
      />

      {/* Khủng long 4 */}
      <img
        src="/images/dino4.png"
        alt="Khủng long"
        style={{
          position: 'absolute',
          top: '10%',
          left: '3%',
          width: '45vw',
          zIndex: 1,
        }}
      />

      {/* Khủng long 5 */}
      <img
        src="/images/dino3.png"
        alt="Khủng long"
        style={{
          position: 'absolute',
          top: '3%',
          left: '32%',
          width: '40vw',
          zIndex: 1,
        }}
      />

      {/* Khủng long 6 */}
      <img
        src="/images/dino6.png"
        alt="Khủng long"
        style={{
          position: 'absolute',
          top: '8%',
          right: '5%',
          width: '45vw',
          zIndex: 1,
        }}
      />

      {/* Ô vuông nội dung chính */}
      <div
        className="text-center p-4 rounded-4"
        style={{
          backgroundColor: '#FFE3A4',
          border: '3px solid black',
          boxShadow: '4px 4px 0px 0px black',
          position: 'relative',
          width: '90vw',
          padding: '5vw 4vw',
          transform: 'rotate(-2deg)',
          zIndex: 2,
        }}
      >
        {/* Ghim giấy */}
        <div style={{ position: 'absolute', top: '-10px', left: '-10px', transform: 'rotate(-45deg)' }}>
          <i className="fas fa-paperclip" style={{ fontSize: '7vw', color: '#C54B47' }}></i>
        </div>

        {/* Các emoji trang trí */}
        <div style={{ position: 'absolute', top: '10%', right: '10%', transform: 'rotate(15deg)' }}>
          <span role="img" aria-label="leaf" style={{ fontSize: '5vw' }}>🌿</span>
        </div>
        <div style={{ position: 'absolute', bottom: '5%', left: '5%', transform: 'rotate(-30deg)' }}>
          <span role="img" aria-label="flower" style={{ fontSize: '5vw' }}>🌺</span>
        </div>
        <div style={{ position: 'absolute', bottom: '15%', right: '5%' }}>
          <span role="img" aria-label="butterfly" style={{ fontSize: '5vw' }}>🦋</span>
        </div>
        <div style={{ position: 'absolute', top: '5%', left: '5%', transform: 'rotate(20deg)' }}>
          <span role="img" aria-label="dinosaur" style={{ fontSize: '7vw' }}>🦖</span>
        </div>
        <div style={{ position: 'absolute', bottom: '10%', right: '15%', transform: 'rotate(-10deg)' }}>
          <span role="img" aria-label="dinosaur" style={{ fontSize: '7vw' }}>🦕</span>
        </div>

        {/* Tiêu đề */}
        <h1
          className="title"
          style={{
            color: '#F6AA19',
            textShadow: '1.5px 1.5px 0px black, -1.5px -1.5px 0px black, 1.5px -1.5px 0px black, -1.5px 1.5px 0px black',
            fontSize: '10vw',
            marginBottom: '3vw',
            fontWeight: '900',
            lineHeight: '1.2',
          }}
        >
          QUAY LẠI<br />KỶ JURA
        </h1>

        {/* Nút Bắt Đầu */}
        <button
          className="btn"
          style={{
            fontSize: '5vw',
            backgroundColor: '#61CEBE',
            border: '2px solid black',
            borderRadius: '15px',
            padding: '1vw 4vw',
            color: 'black',
            fontWeight: 'bold',
            boxShadow: '2px 2px 0px 0px black',
          }}
          onClick={() => navigate('/ngau-nhien')}
        >
          Bắt Đầu
        </button>
      </div>
    </div>
  );
};

export default TrangChu;