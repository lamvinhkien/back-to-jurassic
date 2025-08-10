import { useNavigate } from "react-router-dom";

const Dino4 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="dino-container"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #FEF761 0%, #FFFBE2 50%, #FEF761 100%)',
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
            color: '#FEF761',
            textShadow: '1.5px 1.5px 0px black, -1.5px -1.5px 0px black, 1.5px -1.5px 0px black, -1.5px 1.5px 0px black',
            fontWeight: '900',
            lineHeight: '1.2',
            fontSize: '28px'
          }}
        >
          Triceratops
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Ảnh với border-right */}
          <img
            src="/images/dino4.png"
            alt="Triceratops"
            style={{
              width: "180px",
              borderRight: "2px solid #afaa43ff",
              marginRight: "10px",
            }}
          />

          {/* Text bên phải */}
          <span className="fw-medium">
            Dài khoảng 8-9 mét, cao 3 mét, nặng khoảng 6-12 tấn.
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
          <div style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#afaa43ff', marginBottom: '15px', padding: '12px', overflowWrap: 'break-word' }}>
            <p className="text-center fw-bold">THÔNG TIN</p>
            Triceratops là loài khủng long ăn cỏ có ba sừng to khỏe - hai sừng dài trên mắt và một sừng nhỏ trên mũi. Ngoài việc chống lại kẻ thù như T. rex, các nhà khoa học tin rằng sừng và vành xương lớn phía sau đầu còn giúp chúng giao tiếp, phô diễn sức mạnh và tranh giành bạn đời, tương tự như hươu hay trâu ngày nay.
          </div>
          <div style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#afaa43ff', padding: '12px', overflowWrap: 'break-word' }}>
            <p className="text-center fw-bold">CẬU CHUYỆN VUI NHỘN</p>
            Hai con Triceratops đực đứng đối diện, tiếng chân dậm xuống đất, đầu hạ thấp, rồi "Rầm!" - chúng khóa sừng vào nhau, đẩy qua đẩy lại. Nhưng không phải để giết nhau, mà chỉ là để chứng minh "Ai khỏe hơn" trước khi mùa giao phối bắt đầu.
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

export default Dino4;