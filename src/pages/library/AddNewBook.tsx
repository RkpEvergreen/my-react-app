import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const AddNewBook: React.FC = () => {
  const [formData, setFormData] = useState({
    book_name: '',
    subject : '',
    writter_name : '',
    class : '',
    id_no: '',
    publishing_date: '',
    uploade_date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleReset = () => {
    setFormData({
        book_name: '',
        subject : '',
        writter_name : '',
        class : '',
        id_no: '',
        publishing_date: '',
        uploade_date: '',
    });
  };
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { [key: string]: string } = {};
    const requiredFields = [
      'book_name', 'subject', 'writter_name', 'class', 'id_no', 'publishing_date',
      'uploade_date'
    ];
  
    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = 'This field is required';
      }
    });
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    setErrors({});
    console.log('Form submitted:', formData);
  };
  

  return (
    <div className="p-4">
        <div className="row">
      <h4 className="mb-4">Add New Students</h4>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={3}><Form.Control name="book_name" placeholder="Book Name *" value={formData.book_name} onChange={handleChange} isInvalid={!!errors.book_name} />
          <Form.Control.Feedback type="invalid">{errors.book_name}</Form.Control.Feedback>
          </Col>
          <Col md={3}><Form.Control name="subject" placeholder="Subject *" value={formData.subject} onChange={handleChange} isInvalid={!!errors.subject} />
          <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
          </Col>
          <Col md={3}><Form.Control name="writter_name" placeholder="writter name *" value={formData.writter_name} onChange={handleChange} isInvalid={!!errors.writter_name} />
          <Form.Control.Feedback type="invalid">{errors.writter_name}</Form.Control.Feedback>
          </Col>
          <Col md={3}>
            <Form.Select name="class" value={formData.class} onChange={handleChange} isInvalid={!!errors.class}>
              <option>Please Select Class *</option>
              <option>Play</option>
              <option>Nursery</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
              <option>Four</option>
              <option>Five</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.class}</Form.Control.Feedback>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}><Form.Control name="id_no" placeholder="ID NO" value={formData.id_no} onChange={handleChange} isInvalid={!!errors.id_no} />
          <Form.Control.Feedback type="invalid">{errors.id_no}</Form.Control.Feedback>
          </Col>
          <Col md={3}><Form.Control name="publishing_date" placeholder="Publishing Date" value={formData.publishing_date} onChange={handleChange} isInvalid={!!errors.publishing_date} />
          <Form.Control.Feedback type="invalid">{errors.publishing_date}</Form.Control.Feedback>
          </Col>
          <Col md={3}><Form.Control name="uploade_date" placeholder="Uploade Date" value={formData.uploade_date} onChange={handleChange} isInvalid={!!errors.uploade_date} />
          <Form.Control.Feedback type="invalid">{errors.uploade_date}</Form.Control.Feedback>
          </Col>
        </Row>
        <Button variant="warning" type="submit" className="me-2">Save</Button>
        <Button variant="dark" type="button" onClick={handleReset}>Reset</Button>
      </Form>
    </div>
    </div>
  );
};

export default AddNewBook;
