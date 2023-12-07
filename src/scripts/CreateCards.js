import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function createCards(data) {
  let cards_per_row = 4;
  let cols = [];
  let cards = [];

  for (let prod_type in data) {
    let row = 0;
    let card_no = 0;
    let remRows = [];

    // Push heading & show more button (if exists) of prod_type
    cards.push(
      <div id={"hdr-" + prod_type} style={{ display: "flex" }}>
        <div style={{ marginRight: 100 }}>
          <h3> {prod_type} </h3>
        </div>
        {Object.keys(data[prod_type]["Name"]).length > cards_per_row && (
          <div>
            <button
              className={prod_type}
              onClick={(event) => {
                let btn = event.currentTarget;
                let divElement = document.getElementById("rr-" + btn.className);

                if (btn.textContent === "Show More") {
                  btn.textContent = "Show Less";
                  divElement.hidden = false;
                } else {
                  btn.textContent = "Show More";
                  divElement.hidden = true;
                }
              }}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    );
    cards.push(<br />);

    for (let idx in data[prod_type]["Name"]) {
      let prod_name = data[prod_type]["Name"][idx];

      // Push first row into a sep div, rem rows together into another div
      if (card_no % cards_per_row === 0) {
        if (row === 1) {
          cards.push(
            <div className="first-row" id={"fr-" + prod_type}>
              <Row> {cols} </Row>
              <br />
            </div>
          );
        } else remRows.push(<Row> {cols} </Row>, <br />);
        cols = [];
        row += 1;
        card_no = 0;
      }

      // Push card into column
      cols.push(
        <Col xs={12 / cards_per_row} className="d-flex">
          <Card style={{ width: "18rem" }} className="flex-fill">
            <Card.Body>
              <Card.Title> {prod_name} </Card.Title>
              <Link to={"/product/" + prod_type + "/id/" + idx}>
                <Button variant="primary"> View Product </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      );
      card_no += 1;
    }

    // Push last row of cards of prod_type
    if (row > 1) remRows.push(<Row> {cols} </Row>, <br />);
    else {
      cards.push(
        <div className="first-row" id={"fr-" + prod_type}>
          <Row> {cols} </Row>
          <br />
        </div>
      );
    }
    cols = [];
    row += 1;
    card_no = 0;

    // Push rem rows as a single div into cards
    cards.push(
      <div className="rem-rows" id={"rr-" + prod_type} hidden={true}>
        {remRows}
      </div>
    );

    cards.push(<br />, <br />);
  }

  return cards;
}

export default createCards;
