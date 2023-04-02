import NavBarKu from "./navbarnew";

function LandingPage(props) {
  return (
    <div>
      <NavBarKu />
      <div className="container mt-5 pt-5 ">
        <div className="row">
          <div className="col-12 col-lg-8">
            <img className="my-3 col-12" style={{height:"300px", objectFit:"cover", objectPosition:"center"}} src={props.image}></img>
            <h4 className="my-3">{props.judul}</h4>
            <p>{props.deskripsi}</p>
          </div>
          <div className="col-12 col-lg-4">
            <h4>Artikel Lainnya</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
