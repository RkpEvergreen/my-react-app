import React from "react";
import { Card} from "react-bootstrap";

const StudentDetails: React.FC = () => {
  const student = {
    name: "Jessia Rose",
    gender: "Female",
    fatherName: "Steve Jones",
    motherName: "Naomi Rose",
    dob: "07.08.2016",
    religion: "Islam",
    fatherOccupation: "Graphic Designer",
    email: "jessiarose@gmail.com",
    admissionDate: "07.08.2019",
    class: "2",
    section: "Pink",
    roll: "10005",
    address: "House #10, Road #6, Australia",
    phone: "+88 98568888418"
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
            <h5>{student.name}</h5>
            <p className="text-muted">
              Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale word moun taiery.
            </p>

            <div className="row">
              <div className="col-md-6">
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Gender:</strong> {student.gender}</p>
                <p><strong>Father Name:</strong> {student.fatherName}</p>
                <p><strong>Mother Name:</strong> {student.motherName}</p>
                <p><strong>Date Of Birth:</strong> {student.dob}</p>
                <p><strong>Religion:</strong> {student.religion}</p>
                <p><strong>Father Occupation:</strong> {student.fatherOccupation}</p>
              </div>
              <div className="col-md-6">
                <p><strong>E-mail:</strong> {student.email}</p>
                <p><strong>Admission Date:</strong> {student.admissionDate}</p>
                <p><strong>Class:</strong> {student.class}</p>
                <p><strong>Section:</strong> {student.section}</p>
                <p><strong>Roll:</strong> {student.roll}</p>
                <p><strong>Address:</strong> {student.address}</p>
                <p><strong>Phone:</strong> {student.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StudentDetails;
