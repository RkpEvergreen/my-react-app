import { useState } from 'react';
import { Table, Form, Row, Col, Button, Pagination } from 'react-bootstrap';

interface Book {
  id: string;
  bookName: string;
  subjet: string;
  writer: string;
  class: string;
  published: string;
  creatingDate: string;
}

const AllBooks = () => {
  const [searchId, setSearchId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchWritter, setSearchWritter] = useState('');

  const books: Book[] = [
    {
      id: '#0021',
      bookName: 'English Grammer',
      subjet: 'English',
      writer: 'David Morgan',
      class: '5',
      published: '2019',
      creatingDate: '12.02.2019',
    },
    {
        id: '#0021',
        bookName: 'English Grammer',
        subjet: 'English',
        writer: 'David Morgan',
        class: '5',
        published: '2019',
        creatingDate: '12.02.2019',
    },
    {
        id: '#0021',
        bookName: 'English Grammer',
        subjet: 'English',
        writer: 'David Morgan',
        class: '5',
        published: '2019',
        creatingDate: '12.02.2019',
    },
    {
        id: '#0021',
        bookName: 'English Grammer',
        subjet: 'English',
        writer: 'David Morgan',
        class: '5',
        published: '2019',
        creatingDate: '12.02.2019',
    },
    {
        id: '#0021',
        bookName: 'English Grammer',
        subjet: 'English',
        writer: 'David Morgan',
        class: '5',
        published: '2019',
        creatingDate: '12.02.2019',
    },
    {
        id: '#0021',
        bookName: 'English Grammer',
        subjet: 'English',
        writer: 'David Morgan',
        class: '5',
        published: '2019',
        creatingDate: '12.02.2019',
    },
    {
        id: '#0022',
        bookName: 'Expert Mathmetic',
        subjet: 'Math',
        writer: 'Robert John',
        class: '8',
        published: '2019',
        creatingDate: '02.02.2019',
    },
    {
        id: '#0022',
        bookName: 'Expert Mathmetic',
        subjet: 'Math',
        writer: 'Robert John',
        class: '8',
        published: '2019',
        creatingDate: '02.02.2019',
    },
    {
        id: '#0022',
        bookName: 'Expert Mathmetic',
        subjet: 'Math',
        writer: 'Robert John',
        class: '8',
        published: '2019',
        creatingDate: '02.02.2019',
    },
    {
        id: '#0022',
        bookName: 'Expert Mathmetic',
        subjet: 'Math',
        writer: 'Robert John',
        class: '8',
        published: '2019',
        creatingDate: '02.02.2019',
    },
    {
        id: '#0022',
        bookName: 'Expert Mathmetic',
        subjet: 'Math',
        writer: 'Robert John',
        class: '8',
        published: '2019',
        creatingDate: '02.02.2019',
    },
    {
        id: '#0023',
        bookName: 'Bangla Grammer',
        subjet: 'Bangla',
        writer: 'Kazi Fahim',
        class: '2',
        published: '2017',
        creatingDate: '05.01.2019',
    },
    {
        id: '#0023',
        bookName: 'Bangla Grammer',
        subjet: 'Bangla',
        writer: 'Kazi Fahim',
        class: '2',
        published: '2017',
        creatingDate: '05.01.2019',
    },
    {
        id: '#0023',
        bookName: 'Bangla Grammer',
        subjet: 'Bangla',
        writer: 'Kazi Fahim',
        class: '2',
        published: '2017',
        creatingDate: '05.01.2019',
    },
    {
        id: '#0023',
        bookName: 'Bangla Grammer',
        subjet: 'Bangla',
        writer: 'Kazi Fahim',
        class: '2',
        published: '2017',
        creatingDate: '05.01.2019',
    },
    {
        id: '#0023',
        bookName: 'Bangla Grammer',
        subjet: 'Bangla',
        writer: 'Kazi Fahim',
        class: '2',
        published: '2017',
        creatingDate: '05.01.2019',
    },
    {
        id: '#0024',
        bookName: 'English Grammer',
        subjet: 'English',
        writer: 'David Morgan',
        class: '5',
        published: '2018',
        creatingDate: '12.02.2019',
    },
    {
        id: '#0024',
        bookName: 'English Grammer',
        subjet: 'English',
        writer: 'David Morgan',
        class: '5',
        published: '2018',
        creatingDate: '12.02.2019',
    },
    {
        id: '#0024',
        bookName: 'English Grammer',
        subjet: 'English',
        writer: 'David Morgan',
        class: '5',
        published: '2018',
        creatingDate: '12.02.2019',
    },
    {
        id: '#0024',
        bookName: 'English Grammer',
        subjet: 'English',
        writer: 'David Morgan',
        class: '5',
        published: '2018',
        creatingDate: '12.02.2019',
    },
    {
        id: '#0024',
        bookName: 'English Grammer',
        subjet: 'English',
        writer: 'David Morgan',
        class: '5',
        published: '2018',
        creatingDate: '12.02.2019',
    },
    {
      id: '#0023',
      bookName: 'Bangla Grammer',
      subjet: 'Bangla',
      writer: 'Kazi Fahim',
      class: '2',
      published: '2017',
      creatingDate: '05.01.2019',
  },
  {
    id: '#0023',
    bookName: 'Bangla Grammer',
    subjet: 'Bangla',
    writer: 'Kazi Fahim',
    class: '2',
    published: '2017',
    creatingDate: '05.01.2019',
},
{
  id: '#0023',
  bookName: 'Bangla Grammer',
  subjet: 'Bangla',
  writer: 'Kazi Fahim',
  class: '2',
  published: '2017',
  creatingDate: '05.01.2019',
},
{
  id: '#0023',
  bookName: 'Bangla Grammer',
  subjet: 'Bangla',
  writer: 'Kazi Fahim',
  class: '2',
  published: '2017',
  creatingDate: '05.01.2019',
},
{
  id: '#0023',
  bookName: 'Bangla Grammer',
  subjet: 'Bangla',
  writer: 'Kazi Fahim',
  class: '2',
  published: '2017',
  creatingDate: '05.01.2019',
},
{
  id: '#0023',
  bookName: 'Bangla Grammer',
  subjet: 'Bangla',
  writer: 'Kazi Fahim',
  class: '2',
  published: '2017',
  creatingDate: '05.01.2019',
},
  ];

  const filteredBooks = books.filter(
    (book) =>
      book.id.toLowerCase().includes(searchId.toLowerCase()) &&
      book.bookName.toLowerCase().includes(searchName.toLowerCase()) &&
      book.writer.toLowerCase().includes(searchWritter.toLowerCase())
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
            value={searchWritter}
            onChange={(e) => setSearchWritter(e.target.value)}
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
              <td>{book.bookName}</td>
              <td>{book.subjet}</td>
              <td>{book.writer}</td>
              <td>{book.class}</td>
              <td>{book.published}</td>
              <div>{book.creatingDate}</div>
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

export default AllBooks;
