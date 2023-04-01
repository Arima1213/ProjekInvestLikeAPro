import CardMedium from "./cardmediumHorizontal";
import mediumIMG1 from "./../asset/mediumIMG (1).png";
import mediumIMG2 from "./../asset/mediumIMG (2).png";
import mediumIMG3 from "./../asset/mediumIMG (3).png";
import mediumIMG4 from "./../asset/mediumIMG (4).png";

function SecondContent(props) {
  return (
    <div className="">
      <h4 className="text-center my-3 mt-5">Artikel Terpopuler</h4>
      <div className="row">
        <div className="col-12 my-3 col-lg-6">
          <CardMedium
            image={mediumIMG1}
            judul="tfcggfvhjnj"
            deskripsi="vgvgyhbkjbdhchsjbc shsi cyusgbykucahc iuh h cuh cg"
          />
        </div>
        <div className="col-12 my-3 col-lg-6">
          <CardMedium
            image={mediumIMG2}
            judul="tfcggfvhjnj"
            deskripsi="vgvgyhbkjbdhchsjbc shsi cyusgbykucahc iuh h cuh cg"
          />
        </div>
        <div className="col-12 my-3 col-lg-6">
          <CardMedium
            image={mediumIMG3}
            judul="tfcggfvhjnj"
            deskripsi="vgvgyhbkjbdhchsjbc shsi cyusgbykucahc iuh h cuh cg"
          />
        </div>
        <div className="col-12 my-3 col-lg-6">
          <CardMedium
            image={mediumIMG4}
            judul="tfcggfvhjnj"
            deskripsi="vgvgyhbkjbdhchsjbc shsi cyusgbykucahc iuh h cuh cg"
          />
        </div>
      </div>
    </div>
  );
}

export default SecondContent;
