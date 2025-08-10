import { useNavigate } from "react-router-dom";

const Dino6 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="dino-container"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #7DDCFD 0%, #FFFBE2 50%, #7DDCFD 100%)',
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
            color: '#7DDCFD',
            textShadow: '1.5px 1.5px 0px black, -1.5px -1.5px 0px black, 1.5px -1.5px 0px black, -1.5px 1.5px 0px black',
            fontWeight: '900',
            lineHeight: '1.2',
            fontSize: '28px'
          }}
        >
          Stegosaurus
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Ảnh với border-right */}
          <img
            src="/images/dino6.png"
            alt="Stegosaurus"
            style={{
              width: "180px",
              borderRight: "2px solid #599db4ff",
              marginRight: "10px",
            }}
          />

          {/* Text bên phải */}
          <span className="fw-medium">
            Dài khoảng 9 mét, cao tới 4 mét tính từ đỉnh tấm lưng, nặng khoảng 4-5 tấn.
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
          <div style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#599db4ff', marginBottom: '15px', padding: '12px', overflowWrap: 'break-word' }}>
            <p className="text-center fw-bold">THÔNG TIN</p>
            Stegosaurus nổi tiếng với hai hàng tấm xương lớn chạy dọc lưng, mỗi tấm cao tới 60cm. Các nhà khoa học cho rằng tấm xương này có thể dùng để điều hòa nhiệt, bảo vệ, hoặc thu hút bạn đời. Một số nghiên cứu còn cho thấy các tấm này có nhiều mạch máu, có thể thay đổi màu sắc khi máu dồn lên.
          </div>
          <div style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#599db4ff', padding: '12px', overflowWrap: 'break-word' }}>
            <p className="text-center fw-bold">CẬU CHUYỆN VUI NHỘN</p>
            Khi trời lạnh, Stegosaurus quay lưng về phía mặt trời, các tấm xương hoạt động như tấm pin năng lượng, hấp thụ nhiệt để làm ấm cơ thể. Khi gặp kẻ thù, nó đứng thẳng người, lưng đỏ rực như một lời cảnh báo: "Đừng tới gần!".
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

export default Dino6;