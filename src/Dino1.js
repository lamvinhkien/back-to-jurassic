import { useNavigate } from "react-router-dom";

const Dino1 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="dino-container"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #FFE3A4 0%, #FFFBE2 50%, #FFE3A4 100%)',
        padding: '25px 25px 100px 25px',
        boxSizing: 'border-box',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      {/* header */}
      <div
        className="text-center p-4 rounded-4"
        style={{
          backgroundColor: '#FEFFD4',
          border: '3px solid black',
          boxShadow: '4px 4px 0px 0px black',
          marginBottom: '30px'
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
            fontSize: '28px'
          }}
        >
          Dino LAMVINHKIEN
        </h1>
        <img src='/images/dino4.png' alt='Dino LAMVINHKIEN' style={{ width: '150px', marginTop: '20px' }} />
      </div>

      <div
        className="text-center p-4 rounded-4"
        style={{
          backgroundColor: '#FFE3A4',
          border: '3px solid black',
          boxShadow: '4px 4px 0px 0px black',
          marginBottom: '30px'
        }}
      >
        <div style={{ fontSize: '18px', color: 'white', textAlign: 'start', }}>
          <div style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#502D16', marginBottom: '15px', padding: '12px', overflowWrap: 'break-word', wordBreak: 'break-all' }}>
            Thông tin: aaaa aaaaa aaaa aaaaaa aaaaaaa aaaaa aa aaaaaa aaaaaaaa aaaaaaaaaa aaaaa aaaaaaaaa aaaaaaa aaaaa aaaaaaa aaaa aaaaaa aaaaa aaaaaa aaaaa
          </div>
          <div style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#502D16', marginBottom: '15px', padding: '12px', overflowWrap: 'break-word', wordBreak: 'break-all' }}>
            Thông tin: aaaa aaaaa aaaa aaaaaa aaaaaaa aaaaa aa aaaaaa aaaaaaaa aaaaaaaaaa aaaaa aaaaaaaaa aaaaaaa aaaaa aaaaaaa aaaa aaaaaa aaaaa aaaaaa aaaaa
          </div>
          <div style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#502D16', padding: '12px', overflowWrap: 'break-word', wordBreak: 'break-all' }}>
            Thông tin: aaaa aaaaa aaaa aaaaaa aaaaaaa aaaaa aa aaaaaa aaaaaaaa aaaaaaaaaa aaaaa aaaaaaaaa aaaaaaa aaaaa aaaaaaa aaaa aaaaaa aaaaa aaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
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

export default Dino1;