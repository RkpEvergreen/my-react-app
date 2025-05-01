import React from "react";

interface ClassAdd {
  id: string;
  photo: string;
  name: string;
  gender: string;
  class: string;
  section: string;
  date:string;
  time:string;
  phone: string;
  email: string;
}

const classes: ClassAdd[] = [
  {
    id: "#0021",
    photo: "",
    name: "Mark Willy",
    gender: "Male",
    class: "2",
    section: "A",
    date:"02/05/2001",
    time:"10.00 am - 11.30 am",
    phone: "+123 9988568",
    email: "kazifahim93@gmail.com",
  },
  {
    id: "#0021",
    photo: "",
    name: "Mark Willy",
    gender: "Male",
    class: "2",
    section: "A",
    date:"02/05/2001",
    time:"10.00 am - 11.30 am",
    phone: "+123 9988568",
    email: "kazifahim93@gmail.com",
  },
  {
    id: "#0021",
    photo: "",
    name: "Mark Willy",
    gender: "Male",
    class: "2",
    section: "A",
    date:"02/05/2001",
    time:"10.00 am - 11.30 am",
    phone: "+123 9988568",
    email: "kazifahim93@gmail.com",
  },
  // Add more data as needed
];

const All_class: React.FC = () => {
  return (
    <div className="p-4">
      <div className="row">
      <h5 className="fw-semibold mb-3">All Class Schedules</h5>
      <div className="row mb-3">
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Search by ID ..." />
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
            <th>ID</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Section</th>
            <th>Time</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((ClassAdd, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{ClassAdd.id}</td>
              <td><div className="bg-secondary rounded-circle" style={{ width: 32, height: 32 }}></div></td>
              <td>{ClassAdd.name}</td>
              <td>{ClassAdd.gender}</td>
              <td>{ClassAdd.class}</td>
              <td>{ClassAdd.section}</td>
              <td>{ClassAdd.date}</td>
              <td>{ClassAdd.time}</td>
              <td>{ClassAdd.phone}</td>
              <td>{ClassAdd.email}</td>
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

export default All_class;
