import React from "react";

interface Student {
  roll: string;
  photo: string;
  name: string;
  gender: string;
  studentClass: string;
  section: string;
  parents: string;
  address: string;
  dob: string;
  phone: string;
  email: string;
}

const students: Student[] = [
  {
    roll: "#0021",
    photo: "",
    name: "Mark Willy",
    gender: "Male",
    studentClass: "2",
    section: "A",
    parents: "Jack Sparrow",
    address: "TA-107 Newyork",
    dob: "02/05/2001",
    phone: "+123 9988568",
    email: "kazifahim93@gmail.com",
  },
  {
    roll: "#0022",
    photo: "",
    name: "Jessia Rose",
    gender: "Female",
    studentClass: "1",
    section: "A",
    parents: "Maria Jamans",
    address: "59 Australia, Sydney",
    dob: "02/05/2001",
    phone: "+123 9988568",
    email: "kazifahim93@gmail.com",
  },
  {
    roll: "#0023",
    photo: "",
    name: "Mark Willy",
    gender: "Male",
    studentClass: "2",
    section: "A",
    parents: "Maria Jamans",
    address: "59 Australia, Sydney",
    dob: "02/05/2001",
    phone: "+123 9988568",
    email: "kazifahim93@gmail.com",
  },
  // Add more data as needed
];

const AllStudentsData: React.FC = () => {
  return (
    <div className="p-4">
      <div className="row">
      <h5 className="fw-semibold mb-3">All Students Data</h5>
      <div className="row mb-3">
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Search by Roll ..." />
        </div>
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Search by Name ..." />
        </div>
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Search by Class ..." />
        </div>
        <div className="col-md-3">
          <button className="btn btn-warning w-100">SEARCH</button>
        </div>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th><input type="checkbox" /></th>
            <th>Roll</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Section</th>
            <th>Parents</th>
            <th>Address</th>
            <th>Date Of Birth</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{student.roll}</td>
              <td><div className="bg-secondary rounded-circle" style={{ width: 32, height: 32 }}></div></td>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.studentClass}</td>
              <td>{student.section}</td>
              <td>{student.parents}</td>
              <td>{student.address}</td>
              <td>{student.dob}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
              <td><span className="text-muted">...</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="d-flex justify-content-end align-items-center">
        <span className="me-3">Previous</span>
        <button className="btn btn-warning btn-sm me-1">1</button>
        <button className="btn btn-outline-warning btn-sm me-3">2</button>
        <span>Next</span>
      </div>
    </div>
    </div>
  );
};

export default AllStudentsData;
