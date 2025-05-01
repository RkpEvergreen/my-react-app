import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Add_new_expense: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    id_no: '',
    subject : '',
    expanse_type:'',
    amount: '',
    phone: '',
    email:'',
    Status:'',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleReset = () => {
    setFormData({
        name: '',
        id_no: '',
        subject : '',
        expanse_type:'',
        amount: '',
        phone: '',
        email:'',
        Status:'',
        date: '',
    });
  };
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { [key: string]: string } = {};
    const requiredFields = [
      'name','id_no', 'subject', 'expanse_type', 'amount', 'phone', 'email',
      'Status','date'
    ];
  
    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = 'This field is required';
      }
    });

    if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email format is invalid';
      }

      const existingEmails = ['example1@gmail.com', 'testuser@gmail.com']; // example data

    if (existingEmails.includes(formData.email)) {
      newErrors.email = 'This email is already taken';
    }

    if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Phone number must be exactly 10 digits';
      }
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
      <h4 className="mb-4">Add New Expense</h4>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={3}><Form.Control name="name" placeholder="Name *" value={formData.name} onChange={handleChange} isInvalid={!!errors.name} />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </Col>
          <Col md={3}><Form.Control name="id_no" placeholder="ID NO *" value={formData.subject} onChange={handleChange} isInvalid={!!errors.id_no} />
          <Form.Control.Feedback type="invalid">{errors.id_no}</Form.Control.Feedback>
          </Col>
          <Col md={3}>
            <Form.Select name="expanse_type" value={formData.expanse_type} onChange={handleChange} isInvalid={!!errors.expanse_type}>
              <option>Please Select Expanse Type *</option>
              <option>Salary</option>
              <option>Transport</option>
              <option>Maintanance</option>
              <option>Purchase</option>
              <option>Utilities</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.expanse_type}</Form.Control.Feedback>
          </Col>
          <Col md={3}><Form.Control name="amount" placeholder="Amount *" value={formData.amount} onChange={handleChange} isInvalid={!!errors.amount} />
          <Form.Control.Feedback type="invalid">{errors.amount}</Form.Control.Feedback>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}><Form.Control name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} isInvalid={!!errors.phone}/>
            <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
          </Col>
            <Col md={3}><Form.Control name="email" placeholder="E-Mail" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} />
             <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Col>
            <Col md={3}>
            <Form.Select name="Status" value={formData.Status} onChange={handleChange} isInvalid={!!errors.Status}>
              <option>Please Select Status *</option>
              <option>Paid</option>
              <option>Due</option>
              <option>Others</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.Status}</Form.Control.Feedback>
          </Col>
          <Col md={3}><Form.Control type="date" name="date" value={formData.date} onChange={handleChange} isInvalid={!!errors.date} />
            <Form.Control.Feedback type="invalid">{errors.date}</Form.Control.Feedback>
         </Col>
        </Row>
        <Button variant="warning" type="submit" className="me-2">Save</Button>
        <Button variant="dark" type="button" onClick={handleReset}>Reset</Button>
      </Form>
    </div>
    </div>
  );
};

export default Add_new_expense;
