import './NgauNhien.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NgauNhien = () => {
  const navigate = useNavigate();
  const [dino, setDino] = useState({ name: '', imgSrc: '' })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const listDino = [
    { name: 'Dino 1', imgSrc: '/images/dino1.png' },
    { name: 'Dino 2', imgSrc: '/images/dino2.png' },
    { name: 'Dino 3', imgSrc: '/images/dino3.png' },
    { name: 'Dino 4', imgSrc: '/images/dino4.png' },
    { name: 'Dino 5', imgSrc: '/images/dino5.png' },
    { name: 'Dino 6', imgSrc: '/images/dino6.png' },
  ]

  useEffect(() => {
    setDino(listDino[Math.floor(Math.random() * listDino.length)]);
  }, [])

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
      className="ngaunhien-container overflow-hidden"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #FFFBE2 0%, #FFFBE2 50%, #FFE3A4 100%)',
        padding: '25px 25px 100px 25px',
        boxSizing: 'border-box',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      {/* Ô vuông nội dung chính */}
      <div
        className="text-center p-4 rounded-4"
        style={{
          backgroundColor: '#FFE3A4',
          border: '3px solid black',
          boxShadow: '4px 4px 0px 0px black',
          position: 'relative',
          width: '100%'
        }}
      >
        {/* Tiêu đề */}
        <h1
          className="title"
          style={{
            color: '#F6AA19',
            textShadow: '1.5px 1.5px 0px black, -1.5px -1.5px 0px black, 1.5px -1.5px 0px black, -1.5px 1.5px 0px black',
            fontWeight: '900',
            lineHeight: '1.2',
            textWrap: 'nowrap',
            fontSize: '28px'
          }}
        >
          DINO NGẪU NHIÊN
        </h1>
        <img src={dino.imgSrc} alt={dino.name} style={{ width: '150px', margin: '15px 0px 30px 0px' }} />
        <div style={{ border: '2px solid black', padding: '8px 0px 8px 0px', fontSize: '20px', fontWeight: '500', borderRadius: '20px', backgroundColor: '#61CEBE' }}>
          {dino.name}
        </div>
      </div>
      <button
        onClick={() => navigate('/')}
        style={{ padding: '8px 20px', fontSize: '18px', borderRadius: '20px', backgroundColor: '#61CEBE', fontWeight: '500', border: '2px solid black' }}
      >
        Quay về trang chủ
      </button>
    </div>
  );
};

export default NgauNhien;