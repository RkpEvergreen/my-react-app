import React from "react";

interface Teacher {
  id: string;
  photo: string;
  name: string;
  gender: string;
  teacherClass: string;
  subject:string;
  section: string;
  address: string;
  phone: string;
  email: string;
}

const teachers: Teacher[] = [
  {
    id: "#0021",
    photo: "",
    name: "Mark Willy",
    gender: "Male",
    teacherClass: "2",
    subject:"English",
    section: "A",
    address: "TA-107 Newyork",
    phone: "+ 123 9988568",
    email: "kazifahim93@gmail.com",
  },
  {
    id: "#0021",
    photo: "",
    name: "Rohit Prasad",
    gender: "Male",
    teacherClass: "2",
    subject:"English",
    section: "A",
    address: "TA-107 Newyork",
    phone: "+123 9988568",
    email: "kazifahim93@gmail.com",
  },
  {
    id: "#0021",
    photo: "",
    name: "Rohit Prasad",
    gender: "Male",
    teacherClass: "2",
    subject:"English",
    section: "A",
    address: "TA-107 Newyork",
    phone: "+123 9988568",
    email: "kazifahim93@gmail.com",
  },
  {
    id: "#0022",
    photo: "",
    name: "Jessia Rose",
    gender: "Female",
    teacherClass: "2",
    subject:"English",
    section: "A",
    address: "TA-107 Newyork",
    phone: "+123 9988568",
    email: "kazifahim93@gmail.com",
  },
  {
    id: "#0021",
    photo: "",
    name: "Rohit Prasad",
    gender: "Male",
    teacherClass: "2",
    subject:"English",
    section: "A",
    address: "TA-107 Newyork",
    phone: "+123 9988568",
    email: "kazifahim93@gmail.com",
  },
  {
    id: "#0021",
    photo: "",
    name: "Rohit Prasad",
    gender: "Male",
    teacherClass: "2",
    subject:"English",
    section: "A",
    address: "TA-107 Newyork",
    phone: "+123 9988568",
    email: "kazifahim93@gmail.com",
  },
  {
    id: "#0021",
    photo: "",
    name: "Rohit Prasad",
    gender: "Male",
    teacherClass: "2",
    subject:"English",
    section: "A",
    address: "TA-107 Newyork",
    phone: "+123 9988568",
    email: "kazifahim93@gmail.com",
  },
  // Add more data as needed
];

const AllTeacherData: React.FC = () => {
  return (
    <div className="p-4">
      <div className="row">
      <h5 className="fw-semibold mb-3">All Teachers Data</h5>
      <div className="row mb-3">
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Search by ID ..." />
        </div>
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Search by Name ..." />
        </div>
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Search by Phone ..." />
        </div>
        <div className="col-md-3">
          <button className="btn btn-warning w-100">SEARCH</button>
        </div>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th><input type="checkbox" /></th>
            <th>ID</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Subject</th>
            <th>Section</th>
            <th>Address</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{teacher.id}</td>
              <td><div className="bg-secondary rounded-circle" style={{ width: 32, height: 32 }}></div></td>
              <td>{teacher.name}</td>
              <td>{teacher.gender}</td>
              <td>{teacher.teacherClass}</td>
              <td>{teacher.subject}</td>
              <td>{teacher.section}</td>
              <td>{teacher.address}</td>
              <td>{teacher.phone}</td>
              <td>{teacher.email}</td>
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

export default AllTeacherData;
