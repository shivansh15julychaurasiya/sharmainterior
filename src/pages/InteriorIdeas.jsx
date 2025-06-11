import {useState} from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaDownload } from "react-icons/fa";
import DownloadGuideModal from "./DownloadGuideModel";

const InteriorIdeas = () => {
      const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <Container  className="my-5">
      <div
        style={{
          backgroundColor: "#FAE7B0",
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        <Row className="align-items-center">
          <Col md="6">
            <img
              src="/images/image9.png"
              alt="Interior Guide"
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />
          </Col>
          <Col md="6">
            <h2 style={{ color: "#2B2B2B", fontWeight: "bold" }}>
              Download  interior design ideas
            </h2>
            <p style={{ marginTop: "15px", fontSize: "16px", color: "#333" }}>
            Discover endless inspiration for every corner of your home! Download now and bring your dream home to life
            </p>
               <Button color="primary" onClick={() => setModalOpen(true)}>
                <FaDownload style={{ marginRight: "8px" }} />
        Download guide
      </Button>
      <DownloadGuideModal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default InteriorIdeas;
