import React from "react";
import { FaTwitter } from "react-icons/fa"; // Make sure react-icons is installed

const TwitterCard: React.FC = () => {
  return (
    <div
      className="card text-white text-center"
      style={{ backgroundColor: "#1da1f2", borderRadius: "0.5rem" }}
    >
      <div className="card-body py-4">
        <div className="d-flex justify-content-center align-items-center mb-2">
          <FaTwitter className="me-2" />
          <span className="fw-semibold">Follow us on twitter</span>
        </div>
        <h4 className="fw-bold mb-0">1,11,000</h4>
      </div>
    </div>
  );
};

export default TwitterCard;
