import { useNavigate } from "react-router-dom";

const Dino1 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="dino-container"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #FE60BE 0%, #FFFBE2 50%, #FE60BE 100%)',
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
            color: '#FE60BE',
            textShadow: '1.5px 1.5px 0px black, -1.5px -1.5px 0px black, 1.5px -1.5px 0px black, -1.5px 1.5px 0px black',
            fontWeight: '900',
            lineHeight: '1.2',
            fontSize: '28px'
          }}
        >
          Spinosaurus
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Ảnh với border-right */}
          <img
            src="/images/dino1.png"
            alt="Spinosaurus"
            style={{
              width: "180px",
              borderRight: "2px solid #a93f7eff",
              marginRight: "10px",
            }}
          />

          {/* Text bên phải */}
          <span className="fw-medium" style={{ textAlign: 'start' }}>
            Kích thước dài từ 3-5 mét, nặng 400-500kg
          </span>
        </div>
      </div>

      <div
        className="text-center p-4 rounded-4"
        style={{
          backgroundColor: '#FEFFD4',
          border: '3px solid black',
          boxShadow: '4px 4px 0px 0px black',
          marginBottom: '30px'
        }}
      >
        <div style={{ fontSize: '18px', color: 'white', textAlign: 'justify', }}>
          <div style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#a93f7eff', marginBottom: '15px', padding: '12px', overflowWrap: 'break-word' }}>
            <p className="text-center fw-bold">THÔNG TIN</p>
            Plesiosaurus không phải là khủng long, mà là loài bò sát biển sống cùng thời khủng long. Chúng có cổ dài chiếm gần một nửa cơ thể, bốn chi biến thành vây bơi, thích nghi tuyệt vời với cuộc sống dưới nước. Plesiosaurus chủ yếu ăn cá và động vật giáp xác, dùng cổ dài để tóm mồi nhanh trong khi thân mình giữ yên để không làm cá bỏ chạy.
          </div>
          <div style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#a93f7eff', padding: '12px', overflowWrap: 'break-word' }}>
            <p className="text-center fw-bold">CẬU CHUYỆN VUI NHỘN</p>
            Một con Plesiosaurus lặng lẽ trôi dưới mặt biển, cổ nó uốn nhẹ như rắn nước. Khi phát hiện đàn cá nhỏ, nó chỉ cần vươn cổ ra, không hề khuấy động mặt nước - và "tóm!" - cả đàn cá bị nuốt gọn, trở thành bữa ăn ngon lành, trước khi kịp nhận ra chuyện gì đang xảy ra.
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate('/')}
        style={{ padding: '8px 20px', fontSize: '18px', borderRadius: '20px', backgroundColor: '#FEFFD4', fontWeight: '500', border: '2px solid black', color: 'black' }}
      >
        Quay về trang chủ
      </button>
    </div>
  );
};

export default Dino1;