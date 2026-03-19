import { Link } from "react-router-dom";
import { imagesContext } from "./HelperFunctions";

function createCards(data) {
  let cards_per_row = 4;
  let cols = [];
  let cards = [];

  for (let prod_type in data) {
    let row = 0;
    let card_no = 0;
    let remRows = [];

    // Section header with Show More button
    cards.push(
      <div
        id={"hdr-" + prod_type}
        className="product-section-header"
        key={"hdr-" + prod_type}
      >
        <h3 className="product-section-title">{prod_type}</h3>
        {Object.keys(data[prod_type]["Name"]).length > cards_per_row && (
          <button
            className={"show-more-btn " + prod_type}
            onClick={(event) => {
              let btn = event.currentTarget;
              let divElement = document.getElementById("rr-" + btn.dataset.type);
              if (btn.textContent === "Show More") {
                btn.textContent = "Show Less";
                divElement.hidden = false;
              } else {
                btn.textContent = "Show More";
                divElement.hidden = true;
              }
            }}
            data-type={prod_type}
          >
            Show More
          </button>
        )}
      </div>
    );

    for (let idx in data[prod_type]["Name"]) {
      let prod_name = data[prod_type]["Name"][idx];
      let prod_img = imagesContext('./' + idx + '.jpg');

      if (card_no % cards_per_row === 0) {
        if (row === 1) {
          cards.push(
            <div className="product-grid first-row" id={"fr-" + prod_type} key={"fr-" + prod_type}>
              {cols}
            </div>
          );
        } else remRows.push(<div className="product-grid" key={"rr-row-" + prod_type + "-" + row}>{cols}</div>);
        cols = [];
        row += 1;
        card_no = 0;
      }

      cols.push(
        <Link
          key={idx}
          to={"/product/" + prod_type + "/id/" + idx}
          className="product-grid-card"
        >
          <div className="catalog-card">
            <div className="catalog-card__image-wrap">
              <img src={prod_img} alt={prod_name} className="catalog-card__image" />
              <div className="catalog-card__shine" />
              <div className="catalog-card__overlay">
                <span className="catalog-card__cta">View Details</span>
              </div>
            </div>
            <div className="catalog-card__body">
              <p className="catalog-card__name">{prod_name}</p>
            </div>
          </div>
        </Link>
      );
      card_no += 1;
    }

    // Push last row
    if (row > 1) remRows.push(<div className="product-grid" key={"rr-last-" + prod_type}>{cols}</div>);
    else {
      cards.push(
        <div className="product-grid first-row" id={"fr-" + prod_type} key={"fr-" + prod_type}>
          {cols}
        </div>
      );
    }
    cols = [];
    row += 1;
    card_no = 0;

    cards.push(
      <div className="rem-rows" id={"rr-" + prod_type} hidden={true} key={"rr-" + prod_type}>
        {remRows}
      </div>
    );

    cards.push(<div key={"spacer-" + prod_type} style={{ marginBottom: 'var(--space-12)' }} />);
  }

  return cards;
}

export default createCards;
