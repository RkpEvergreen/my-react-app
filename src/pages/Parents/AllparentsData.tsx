import React from "react";

interface parent {
  id: string;
  photo: string;
  name: string;
  gender: string;
  occupation: string;
  address: string;
  phone: string;
  email: string;
}

const parents: parent[] = [
  {
    id: "#0021",
    photo: "",
    name: "Mark Willy",
    gender: "Male",
    occupation: "Businessman",
    address: "TA-107 Newyork",
    phone: "+123 9988568",
    email: "kazifahim93@gmail.com",
  },
  {
    id: "#0021",
    photo: "",
    name: "Mark Willy",
    gender: "Male",
    occupation: "Businessman",
    address: "TA-107 Newyork",
    phone: "+123 9988568",
    email: "kazifahim93@gmail.com",
  },
  {
    id: "#0021",
    photo: "",
    name: "Mark Willy",
    gender: "Male",
    occupation: "Businessman",
    address: "TA-107 Newyork",
    phone: "+123 9988568",
    email: "kazifahim93@gmail.com",
  },
  // Add more data as needed
];

const AllparentsData: React.FC = () => {
  return (
    <div className="p-4">
      <div className="row">
      <h5 className="fw-semibold mb-3"> All Parents</h5>
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
            <th>Occupation</th>
            <th>Address</th>    
            <th>Phone</th>
            <th>E-mail</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {parents.map((parent, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{parent.id}</td>
              <td><div className="bg-secondary rounded-circle" style={{ width: 32, height: 32 }}></div></td>
              <td>{parent.name}</td>
              <td>{parent.gender}</td>
              <td>{parent.occupation}</td>
              <td>{parent.address}</td>
              <td>{parent.phone}</td>
              <td>{parent.email}</td>
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

export default AllparentsData;
