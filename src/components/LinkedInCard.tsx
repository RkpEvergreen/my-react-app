import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const LinkedInCard: React.FC = () => {
  return (
    <div
      className="card text-white text-center"
      style={{ backgroundColor: "#0A66C2", borderRadius: "0.5rem" }}
    >
      <div className="card-body py-4">
        <div className="d-flex justify-content-center align-items-center mb-2">
          <FaLinkedinIn className="me-2 fs-5" />
          <span className="fw-semibold">Follow us on linked</span>
        </div>
        <h4 className="fw-bold mb-0">45,000</h4>
      </div>
    </div>
  );
};

export default LinkedInCard;
