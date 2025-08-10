import { useNavigate } from "react-router-dom";

const Dino5 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="dino-container"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #B146FE 0%, #FFFBE2 50%, #B146FE 100%)',
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
            color: '#B146FE',
            textShadow: '1.5px 1.5px 0px black, -1.5px -1.5px 0px black, 1.5px -1.5px 0px black, -1.5px 1.5px 0px black',
            fontWeight: '900',
            lineHeight: '1.2',
            fontSize: '28px'
          }}
        >
          Pteranodon
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Ảnh với border-right */}
          <img
            src="/images/dino5.png"
            alt="Pteranodon"
            style={{
              width: "180px",
              borderRight: "2px solid #7a2faeff",
              marginRight: "10px",
            }}
          />

          {/* Text bên phải */}
          <span className="fw-medium" style={{ textAlign: 'start' }}>
            Sải cánh rộng 7-10 mét, chiều dài cơ thể khoảng 2 mét, nặng chỉ khoảng 25-35 kg nhờ xương rỗng.
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
          <div style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#7a2faeff', marginBottom: '15px', padding: '12px', overflowWrap: 'break-word' }}>
            <p className="text-center fw-bold">THÔNG TIN</p>
            Pteranodon không phải khủng long thật sự mà là một loài bò sát bay. Cánh của chúng được tạo thành từ một màng da căng giữa ngón tay và cơ thể, giúp chúng bay lượn hàng trăm cây số chỉ với vài lần vỗ cánh. Mào lớn trên đầu có thể giúp giữ thăng bằng hoặc điều hướng khi bay.
          </div>
          <div style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#7a2faeff', padding: '12px', overflowWrap: 'break-word' }}>
            <p className="text-center fw-bold">CẬU CHUYỆN VUI NHỘN</p>
            Một con Pteranodon bay cao trên đại dương, chỉ cần gió biển nâng là nó có thể lượn cả ngày mà không cần nghỉ. Khi thấy bóng cá bơi bên dưới, nó gập cánh và lao xuống như mũi tên - gọn gàng tóm gọn con mồi rồi lại vút lên trời.
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

export default Dino5;