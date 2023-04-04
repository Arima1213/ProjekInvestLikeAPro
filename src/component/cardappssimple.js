import Card from "react-bootstrap/Card";

function CardAppsSimple(props) {
  return (
    <Card>
      <div>
        <div className="row ">
          <div className="col mx-2 my-1">
            <div className="row ">
              <Card.Title>{props.judul}</Card.Title>
            </div>
            <div className="row">
              <div className="col-3">
                <Card.Text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  {props.rating}
                </Card.Text>
              </div>
              <div className="col-6">
                <Card.Text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-download"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  {props.download}
                </Card.Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardAppsSimple;
