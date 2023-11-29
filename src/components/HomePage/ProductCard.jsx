import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import dummyimage from "../../assets/dummyimage.jpg";

function ProductCard(props) {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // console.log(props)

  return (
    <div>
      <Card style={{ cursor: "pointer" }} onClick={handleOpen}>
        <Card.Img variant="top" src={props.image} height={props.height} />
        <Card.Body>
          <Card.Title
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Product #
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Product Name / Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container d-flex">
            <div style={{ textAlign: "center" }}>
              <img
                src={dummyimage}
                alt="Dummy Image"
                style={{ maxWidth: "100%", maxHeight: "100%", height: "auto" }}
              />
            </div>
            <div>
              <h4>Product Info:</h4>
              <ul>
                <li>
                  <strong>Capacity:</strong> 10TB
                </li>
                <li>
                  <strong>Brand:</strong> Seagate
                </li>
                <li>
                  <strong>Interface:</strong> SATA 6Gb/s
                </li>
                <li>
                  <strong>Speed:</strong> 7200 RPM
                </li>
                <li>
                  <strong>Cache:</strong> 256MB
                </li>
                <li>
                  <strong>Usage:</strong> Internal
                </li>
                <li>
                  <strong>Advanced Features:</strong>
                  <ul>
                    <li>
                      Optimized for creative professionals, gamers, and system
                      builders
                    </li>
                    <li>Supports multi-tier caching technology</li>
                    <li>Designed for 24/7 operation</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to={"/product-page"}>
            <Button variant="secondary" onClick={handleClose}>
              View on Product Page
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductCard;
