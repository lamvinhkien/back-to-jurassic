import { useNavigate } from "react-router-dom";

const Dino3 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="dino-container"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #FF9243 0%, #FFFBE2 50%, #FF9243 100%)',
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
            color: '#FF9243',
            textShadow: '1.5px 1.5px 0px black, -1.5px -1.5px 0px black, 1.5px -1.5px 0px black, -1.5px 1.5px 0px black',
            fontWeight: '900',
            lineHeight: '1.2',
            fontSize: '28px'
          }}
        >
          Brontosaurus
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Ảnh với border-right */}
          <img
            src="/images/dino3.png"
            alt="Brontosaurus"
            style={{
              width: "180px",
              borderRight: "2px solid #b3642cff",
              marginRight: "10px",
            }}
          />

          {/* Text bên phải */}
          <span className="fw-medium" style={{ textAlign: 'start' }}>
            Dài khoảng 21-22 mét, cao khoảng 4,5-5 mét ở vai, nặng từ 15-20 tấn.
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
          <div style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#b3642cff', marginBottom: '15px', padding: '12px', overflowWrap: 'break-word' }}>
            <p className="text-center fw-bold">THÔNG TIN</p>
            Brontosaurus là một loài khủng long ăn cỏ khổng lồ, cổ dài, đuôi dài và thân hình nặng nề. Chúng di chuyển chậm chạp nhưng bền bỉ, mỗi ngày có thể ăn tới hàng trăm kg lá cây. Mặc dù to lớn, Brontosaurus hiền lành, sống theo bầy đàn để bảo vệ lẫn nhau khỏi các loài ăn thịt.
          </div>
          <div style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#b3642cff', padding: '12px', overflowWrap: 'break-word' }}>
            <p className="text-center fw-bold">CẬU CHUYỆN VUI NHỘN</p>
            Một buổi sáng sương mù, đàn Brontosaurus cùng nhau băng qua sông cạn. Mỗi bước chân của chúng tạo ra những vết hằn sâu trên bùn - hàng triệu năm sau, những dấu chân này trở thành hóa thạch, kể lại câu chuyện về cuộc hành trình của "những người khổng lồ hiền lành" cho các nhà khoa học thời hiện đại.
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

export default Dino3;