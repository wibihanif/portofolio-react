const Gallery = () => {
  return (
    <>
      <div className="gallery-head">
        <h1>GALLERY</h1>
        <p>Enjoy my cute gallery!</p>
      </div>
      <div className="gallery">
        <div className="row1">
          <div>
            <img
              src={require("../img/cat1.webp")}
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <img
              src={require("../img/cat2.png")}
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <img
              src={require("../img/cat3.webp")}
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
