import React from "react";
import { FaFacebookF} from "react-icons/fa";

const FacebookCard: React.FC = () => {
    return(
        <div className="card text-white text-center"
        style={{backgroundColor:"#3b5998",borderRadius:"0.5rem"}}
        >
            <div className="card-body py-4">
             <div className="d-flex justify-content-center align-align-items-center mb-2">
              <FaFacebookF className="me-2" />
              <span className="fw-semibold">Like us on facebook</span>
             </div>
             <h4 className="fw-bold mb-0">30,000</h4>
            </div>

        </div>
    );
};
export default FacebookCard;