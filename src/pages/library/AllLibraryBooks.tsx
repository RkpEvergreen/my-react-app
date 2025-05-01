import { useState } from 'react';
import { Table, Form, Row, Col, Button, Badge, Pagination } from 'react-bootstrap';

interface Book {
  id: string;
  photo: string;
  name: string;
  author: string;
  subject: string;
  quantity: number;
  status: 'Available' | 'Unavailable';
}

const AllLibraryBooks = () => {
  const [searchId, setSearchId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchAuthor, setSearchAuthor] = useState('');

  const books: Book[] = [
    {
      id: '#1001',
      photo: '', // Placeholder for book photo
      name: 'Advanced Mathematics',
      author: 'John Smith',
      subject: 'Mathematics',
      quantity: 5,
      status: 'Available',
    },
    {
      id: '#1002',
      photo: '',
      name: 'English Grammar',
      author: 'Emma Brown',
      subject: 'English',
      quantity: 0,
      status: 'Unavailable',
    },
    {
      id: '#1003',
      photo: '',
      name: 'Science Basics',
      author: 'Dr. Albert',
      subject: 'Science',
      quantity: 2,
      status: 'Available',
    },
  ];

  const filteredBooks = books.filter(
    (book) =>
      book.id.toLowerCase().includes(searchId.toLowerCase()) &&
      book.name.toLowerCase().includes(searchName.toLowerCase()) &&
      book.author.toLowerCase().includes(searchAuthor.toLowerCase())
  );

  return (
    <div className="p-4">
      <h4>All Library Books</h4>

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
            placeholder="Search by Author ..."
            value={searchAuthor}
            onChange={(e) => setSearchAuthor(e.target.value)}
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
            <th>ID</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Author</th>
            <th>Subject</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <tr key={index}>
              <td>{book.id}</td>
              <td>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#ccc',
                    borderRadius: '5px',
                    display: 'inline-block',
                  }}
                ></div>
              </td>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.subject}</td>
              <td>{book.quantity}</td>
              <td>
                <Badge bg={book.status === 'Available' ? 'success' : 'danger'}>
                  {book.status}
                </Badge>
              </td>
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

export default AllLibraryBooks;
