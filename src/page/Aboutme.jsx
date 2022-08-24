const Aboutme = () => {
  return (
    <>
      <div className="profile-title">
        <h1>ABOUT ME</h1>
        <p>Currently Studying Full Stack Web Development</p>
      </div>
      <div className="profile-description">
        <div className="brief-desc">
          I'm a geography graduate from University of Indonesia who aspires to
          do a career shifting in the field of web development.
        </div>
        <div className="cat-img">
          <img src={require("../img/sleepingcat.png")} alt="" width="100%" />
        </div>
        <div className="detail">
          <h3>DETAIL</h3>
          <h4>
            <b>Name:</b>
          </h4>
          <p>Wibi Hanif Wibowo</p>
          <h4>
            <b>Age:</b>
          </h4>
          <p>18</p>
          <h4>
            <b>Location:</b>
          </h4>
          <p>Tangerang, Indonesia</p>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
