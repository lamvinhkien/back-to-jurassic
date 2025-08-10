import { useNavigate } from "react-router-dom";

const Dino2 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="dino-container"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #B7EE3D 0%, #FFFBE2 50%, #B7EE3D 100%)',
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
            color: '#B7EE3D',
            textShadow: '1.5px 1.5px 0px black, -1.5px -1.5px 0px black, 1.5px -1.5px 0px black, -1.5px 1.5px 0px black',
            fontWeight: '900',
            lineHeight: '1.2',
            fontSize: '28px'
          }}
        >
          Tyrannosaurus Rex
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Ảnh với border-right */}
          <img
            src="/images/dino2.png"
            alt="Tyrannosaurus Rex"
            style={{
              width: "180px",
              borderRight: "2px solid #7ca12bff",
              marginRight: "10px",
            }}
          />

          {/* Text bên phải */}
          <span className="fw-medium">
            Dài khoảng 12-13 mét, cao khoảng 4 mét (tính từ chân đến hông), nặng từ 8-9 tấn.
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
        <div style={{ fontSize: '18px', color: 'white', textAlign: 'start', }}>
          <div style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#7ca12bff', marginBottom: '15px', padding: '12px', overflowWrap: 'break-word' }}>
            <p className="text-center fw-bold">THÔNG TIN</p>
            Tyrannosaurus Rex, hay còn gọi là "Vua Khủng Long", là một trong những kẻ săn mồi lớn nhất từng tồn tại trên Trái Đất. Hộp sọ khổng lồ của nó không chỉ chứa bộ hàm có lực cắn mạnh nhất trong thế giới khủng long, mà còn có khu vực não chuyên xử lý mùi cực lớn. Điều này cho phép T-Rex phát hiện mùi xác thối hoặc mùi máu từ khoảng cách nhiều cây số.
          </div>
          <div style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#7ca12bff', padding: '12px', overflowWrap: 'break-word' }}>
            <p className="text-center fw-bold">CẬU CHUYỆN VUI NHỘN</p>
            Một buổi sáng yên tĩnh, khi những con khủng long ăn cỏ đang gặm lá, một con T. rex ở xa hơn 5km đã "bắt" được mùi xác chết. Nó lập tức rảo bước, không cần đuổi theo con mồi, chỉ việc tìm đúng hướng là có bữa tiệc no nê. Điều này cho thấy T-Rex không chỉ là thợ săn mà còn là "kẻ dọn rác" siêu hiệu quả của hệ sinh thái.
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate('/')}
        style={{ padding: '8px 20px', fontSize: '18px', borderRadius: '20px', backgroundColor: '#FEFFD4', fontWeight: '500', border: '2px solid black', textDecoration: 'none' }}
      >
        Quay về trang chủ
      </button>
    </div>
  );
};

export default Dino2;