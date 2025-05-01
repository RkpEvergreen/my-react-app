import { useState } from 'react';
import { Table, Form, Button, Badge, Pagination } from 'react-bootstrap';

interface FeeRecord {
  id: string;   
  name: string;
  expense_type: string;
  amount: string;
  status: 'Paid' | 'Unpaid';
  phone: string;
  email: string;
  date: string;
}

const AllExpense = () => {
  const [searchId, setSearchId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchPhone, setSearchPhone] = useState('');

  const data: FeeRecord[] = Array.from({ length: 20 }, (_, index) => ({
    id: `#00${21 + index}`,
    name: index % 2 === 0 ? 'Mark Willy' : index % 3 === 0 ? 'Jesseual' : 'Maria Jones',
    expense_type: index % 2 === 0 ? 'Salary' : index % 3 === 0 ? 'Transport' : 'Utilities',
    amount: index % 2 === 0 ? '$2,0000.00' : index % 3 === 0 ? '$5,0000.00' : '$1,0000.00',
    status: index % 2 === 0 ? 'Paid' : 'Unpaid',
    phone: '+123 9988568',
    email: 'kazifahim39@gmail.com',
    date:'02/02/2019',
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
            <th>Name</th>
            <th>Expense</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Date</th>
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
              <td>{item.name}</td>
              <td>{item.expense_type}</td>
              <td>{item.amount}</td>
              <td>
                <Badge bg={item.status === 'Paid' ? 'success' : 'danger'}>
                  {item.status}
                </Badge>
              </td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.date}</td>
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

export default AllExpense;
