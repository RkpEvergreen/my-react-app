import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Add_new_class: React.FC = () => {
  const [formData, setFormData] = useState({
    teacher_name: '',
    id_no: '',
    gender: '',
    class: '',
    subject: '',
    section: '',
    time: '',
    date: '',
    phone: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData({
        teacher_name: '',
		id_no: '',
		gender: '',
		class: '',
		subject: '',
		section: '',
		time: '',
		date: '',
		phone: '',
		email: '',
    });
  };
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { [key: string]: string } = {};
    const requiredFields = [
      'teacher_name', 'id_no', 'gender', 'class', 'subject', 'section',
      'time', 'date', 'phone', 'email'
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
      <h4 className="mb-4">Add New Students</h4>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={3}><Form.Control name="teacher_name" placeholder="Teacher Name *" value={formData.teacher_name} onChange={handleChange} isInvalid={!!errors.teacher_name} />
          <Form.Control.Feedback type="invalid">{errors.teacher_name}</Form.Control.Feedback>
          </Col>
          <Col md={3}><Form.Control name="id_no" placeholder="ID No *" value={formData.id_no} onChange={handleChange} isInvalid={!!errors.id_no} />
          <Form.Control.Feedback type="invalid">{errors.id_no}</Form.Control.Feedback>
          </Col>
          <Col md={3}>
            <Form.Select name="gender" value={formData.gender} onChange={handleChange} isInvalid={!!errors.gender}>
              <option>Please Select Gender *</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
          </Col>
         <Col md={3}><Form.Control name="class" placeholder="Class *" value={formData.class} onChange={handleChange} isInvalid={!!errors.class} />
          <Form.Control.Feedback type="invalid">{errors.class}</Form.Control.Feedback>
          </Col>
        </Row>

        <Row className="mb-3">
		   <Col md={3}>
            <Form.Select name="subject" value={formData.subject} onChange={handleChange} isInvalid={!!errors.subject}>
              <option>Please Select subject *</option>
              <option>English</option>
              <option>Mathematics</option>
              <option>Physics</option>
              <option>Chemestry</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
          </Col>
		   <Col md={3}>
            <Form.Select name="section" value={formData.section} onChange={handleChange} isInvalid={!!errors.section}>
              <option>Please Select Section *</option>
              <option>Pink</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Rose</option>
			  <option>Bird</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.section}</Form.Control.Feedback>
          </Col>
          <Col md={3}><Form.Control name="time" placeholder="Time" value={formData.time} onChange={handleChange} isInvalid={!!errors.time} />
          <Form.Control.Feedback type="invalid">{errors.time}</Form.Control.Feedback>
          </Col>
         <Col md={3}><Form.Control type="date" name="date" value={formData.date} onChange={handleChange} isInvalid={!!errors.date} />
          <Form.Control.Feedback type="invalid">{errors.date}</Form.Control.Feedback>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}><Form.Control name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} isInvalid={!!errors.phone}/>
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
          </Col>
		  <Col md={3}><Form.Control name="email" placeholder="E-Mail" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Col>
        </Row>

        <Button variant="warning" type="submit" className="me-2">Save</Button>
        <Button variant="dark" type="button" onClick={handleReset}>Reset</Button>
      </Form>
    </div>
    </div>
  );
};

export default Add_new_class;
