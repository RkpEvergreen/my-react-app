import React from "react";
import { FaGooglePlusG } from "react-icons/fa"; // Google Plus icon
import "bootstrap/dist/css/bootstrap.min.css";

const GooglePlusCard: React.FC = () => {
  return (
    <div
      className="card text-white text-center"
      style={{ backgroundColor: "#f50000", borderRadius: "0.5rem" }}
    >
      <div className="card-body py-4">
        <div className="d-flex justify-content-center align-items-center mb-2">
          <FaGooglePlusG className="me-2 fs-5" />
          <span className="fw-semibold">Follow us on googleplus</span>
        </div>
        <h4 className="fw-bold mb-0">19,000</h4>
      </div>
    </div>
  );
};

export default GooglePlusCard;
