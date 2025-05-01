import { useState } from 'react';
import { Table, Form, Button, Badge, Pagination } from 'react-bootstrap';

interface FeeRecord {
  id: string;
  photo: string;
  name: string;
  gender: string;
  class: number;
  section: string;
  expense: string;
  amount: string;
  status: 'Paid' | 'Unpaid';
  phone: string;
  email: string;
}

const AllFeesCollection = () => {
  const [searchId, setSearchId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchPhone, setSearchPhone] = useState('');

  const data: FeeRecord[] = Array.from({ length: 20 }, (_, index) => ({
    id: `#00${21 + index}`,
    photo: '',
    name: index % 2 === 0 ? 'Mark Willy' : index % 3 === 0 ? 'Jessia' : 'Mike John',
    gender: index % 2 === 0 ? 'Male' : 'Female',
    class: 2,
    section: 'A',
    expense: 'Class Test',
    amount: index % 3 === 0 ? '$4,000.00' : '$2,000.00',
    status: index % 2 === 0 ? 'Paid' : 'Unpaid',
    phone: '+123 9988568',
    email: 'kazifahim39@gmail.com',
  }));

  const filteredData = data.filter(
    (d) =>
      d.id.toLowerCase().includes(searchId.toLowerCase()) &&
      d.name.toLowerCase().includes(searchName.toLowerCase()) &&
      d.phone.includes(searchPhone)
  );

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h4>All Fees Collection</h4>
        </div>
        <div className="d-flex gap-2">
          <Form.Control
            type="text"
            placeholder="Search by ID ..."
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Search by Name ..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Search by Phone ..."
            value={searchPhone}
            onChange={(e) => setSearchPhone(e.target.value)}
          />
          <Button variant="warning">Search</Button>
        </div>
      </div>

      <Table bordered hover responsive className="align-middle text-center">
        <thead>
          <tr>
            <th>
              <Form.Check type="checkbox" />
            </th>
            <th>ID</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Section</th>
            <th>Expense</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>{item.id}</td>
              <td>
                <div
                  style={{
                    width: '35px',
                    height: '35px',
                    backgroundColor: '#ccc',
                    borderRadius: '5px',
                    display: 'inline-block',
                  }}
                ></div>
              </td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.class}</td>
              <td>{item.section}</td>
              <td>{item.expense}</td>
              <td>{item.amount}</td>
              <td>
                <Badge bg={item.status === 'Paid' ? 'success' : 'danger'}>
                  {item.status}
                </Badge>
              </td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-end">
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
};

export default AllFeesCollection;
