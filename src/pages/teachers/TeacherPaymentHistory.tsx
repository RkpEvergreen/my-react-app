import { useState } from 'react';
import { Table, Form, Button, Row, Col, Badge, Pagination } from 'react-bootstrap';

interface PaymentData {
  roll: string;
  name: string;
  gender: string;
  class: number;
  subject: string;
  amount: string;
  status: 'Paid' | 'Unpaid';
  phone: string;
  email: string;
}

const TeacherPaymentHistory = () => {
  const [searchId, setSearchId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchPhone, setSearchPhone] = useState('');

  const data: PaymentData[] = [
    {
      roll: '#0021',
      name: 'Mark Willy',
      gender: 'Male',
      class: 2,
      subject: 'English',
      amount: '$2,000.00',
      status: 'Paid',
      phone: '+123 9988568',
      email: 'kazifahim93@gmail.com',
    },
    {
      roll: '#0022',
      name: 'Jessia Rose',
      gender: 'Female',
      class: 1,
      subject: 'Mathematics',
      amount: '$2,000.00',
      status: 'Unpaid',
      phone: '+123 9988568',
      email: 'kazifahim93@gmail.com',
    },
    // Add more rows as needed
  ];

  const filteredData = data.filter(
    (item) =>
      item.roll.toLowerCase().includes(searchId.toLowerCase()) &&
      item.name.toLowerCase().includes(searchName.toLowerCase()) &&
      item.phone.toLowerCase().includes(searchPhone.toLowerCase())
  );

  return (
    <div className="p-4">
      <h4>All Teachers Payment History</h4>

      <Row className="mb-3">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Search by ID ..."
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Search by Name ..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Form.Control
            type="text"
            placeholder="Search by Phone ..."
            value={searchPhone}
            onChange={(e) => setSearchPhone(e.target.value)}
          />
        </Col>
        <Col md={1}>
          <Button variant="warning" className="w-100">
            Search
          </Button>
        </Col>
      </Row>

      <Table bordered hover responsive className="align-middle text-center">
        <thead>
          <tr>
            <th>Roll</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Subject</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Phone</th>
            <th>Email</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              <td>{row.roll}</td>
              <td>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#ccc',
                    borderRadius: '5px',
                  }}
                ></div>
              </td>
              <td>{row.name}</td>
              <td>{row.gender}</td>
              <td>{row.class}</td>
              <td>{row.subject}</td>
              <td>{row.amount}</td>
              <td>
                <Badge bg={row.status === 'Paid' ? 'success' : 'danger'}>
                  {row.status}
                </Badge>
              </td>
              <td>{row.phone}</td>
              <td>{row.email}</td>
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

export default TeacherPaymentHistory;
