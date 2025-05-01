import React from "react";
import { Card} from "react-bootstrap";

const ParentsDetails: React.FC = () => {
  const Parent = {
    name: "Steven Jones",
    gender: "Male",
    occupation: "Business",
    id:"#15059",
    address: "House #10, Road #6, Australia",
    religion:"Islam",
    phone: "+88 98568888418",
    email:"jessiarose@gmail.com"
  };

  return (
    <div className="p-4 mt-5">
      <h4 className="mb-3">About Me</h4>
      <Card className="p-4 shadow-sm">
        <div className="row">
          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <div style={{ width: "1200px", height: "330px", backgroundColor: "#ccc" }} className="d-flex align-items-center justify-content-center">
              280x330
            </div>
          </div>

          <div className="col-md-9">
            <h5>{Parent.name}</h5>
            <p className="text-muted">
              Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale word moun taiery.
            </p>
                <p><strong>Name:</strong> {Parent.name}</p>
                <p><strong>Gender:</strong> {Parent.gender}</p>
                <p><strong>Religion:</strong> {Parent.occupation}</p>
                <p><strong>Father Occupation:</strong> {Parent.id}</p>
                <p><strong>E-mail:</strong> {Parent.address}</p>
                <p><strong>Admission Date:</strong> {Parent.religion}</p>
                <p><strong>Class:</strong> {Parent.phone}</p>
                <p><strong>Section:</strong> {Parent.email}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ParentsDetails;
