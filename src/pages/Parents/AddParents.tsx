import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const AddParents: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    occupation:'',
    idNo: '',
    bloodGroup: '',
    religion: '',
    email: '',
    address:'',
    phone: '',
    bio: '',
    photo: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, photo: e.target.files?.[0] || null });
  };

  const handleReset = () => {
    setFormData({
        firstName: '',
        lastName: '',
        gender: '',
        occupation:'',
        idNo: '',
        bloodGroup: '',
        religion: '',
        email: '',
        address:'',
        phone: '',
        bio: '',
        photo: null,
    });
  };
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { [key: string]: string } = {};
    const requiredFields = [
      'firstName', 'lastName', 'gender', 'occupation', 'idNo', 'bloodGroup',
      'religion', 'email', 'address', 'phone', 'bio'
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
  
    if (!formData.photo) {
      newErrors.photo = 'Please upload a photo';
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
          <Col md={3}><Form.Control name="firstName" placeholder="First Name *" value={formData.firstName} onChange={handleChange} isInvalid={!!errors.firstName} />
          <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
          </Col>
          <Col md={3}><Form.Control name="lastName" placeholder="Last Name *" value={formData.lastName} onChange={handleChange} isInvalid={!!errors.lastName} />
          <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
          </Col>
          <Col md={3}>
            <Form.Select name="gender" value={formData.gender} onChange={handleChange} isInvalid={!!errors.gender}>
              <option>Please Select Gender *</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
          </Col>
          <Col md={3}><Form.Control name="occupation" placeholder="Occupation *" value={formData.occupation} onChange={handleChange} isInvalid={!!errors.occupation} />
          <Form.Control.Feedback type="invalid">{errors.occupation}</Form.Control.Feedback>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}><Form.Control name="idNo" placeholder="ID NO" value={formData.idNo} onChange={handleChange} isInvalid={!!errors.idNo} />
          <Form.Control.Feedback type="invalid">{errors.idNo}</Form.Control.Feedback>
          </Col>
          <Col md={3}>
            <Form.Select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} isInvalid={!!errors.bloodGroup}>
              <option>Please Select Group *</option>
              <option>A+</option>
              <option>B+</option>
              <option>O+</option>
              <option>AB+</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.bloodGroup}</Form.Control.Feedback>
          </Col>
          <Col md={3}>
            <Form.Select name="religion" value={formData.religion} onChange={handleChange} isInvalid={!!errors.religion}>
              <option>Please Select Religion *</option>
              <option>Islam</option>
              <option>Christian</option>
              <option>Hindu</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.religion}</Form.Control.Feedback>
          </Col>
          <Col md={3}><Form.Control name="email" placeholder="E-Mail" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}><Form.Control name="address" placeholder="Address" value={formData.address} onChange={handleChange} isInvalid={!!errors.address}/>
          <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
          </Col>
          <Col md={3}><Form.Control name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} isInvalid={!!errors.phone}/>
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
          </Col>
        </Row>

        <Row className="mb-3">
        <Col md={6}><Form.Control as="textarea" name="bio" placeholder="Short BIO" rows={5} value={formData.bio} onChange={handleChange} isInvalid={!!errors.bio} />
          <Form.Control.Feedback type="invalid">{errors.bio}</Form.Control.Feedback>
          </Col>
          <Col md={6}>
            <Form.Label>Upload Student Photo (150px x 150px)</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handleFileChange} isInvalid={!!errors.photo} />
            <Form.Control.Feedback type="invalid">{errors.photo}</Form.Control.Feedback>
          </Col>
        </Row>

        <Button variant="warning" type="submit" className="me-2">Save</Button>
        <Button variant="dark" type="button" onClick={handleReset}>Reset</Button>
      </Form>
    </div>
    </div>
  );
};

export default AddParents;
