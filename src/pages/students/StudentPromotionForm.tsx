import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const sessions = ['2017-2018', '2018-2019', '2019-2020'];
const classes = ['1', '2', '3', '4', '5'];

const StudentPromotionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    currentSession: '',
    promoteSession: '',
    fromClass: '',
    toClass: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      currentSession: '',
      promoteSession: '',
      fromClass: '',
      toClass: '',
    });
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.currentSession) newErrors.currentSession = 'Current Session is required';
    if (!formData.promoteSession) newErrors.promoteSession = 'Promote Session is required';
    if (!formData.fromClass) newErrors.fromClass = 'Promotion From Class is required';
    if (!formData.toClass) newErrors.toClass = 'Promotion To Class is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log('Promotion Form Data:', formData);
      // You can submit data here to an API
    }
  };

  return (
    <div className="p-4">
      <h4 className="mb-4">Search Student Promotion</h4>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={3}>
            <Form.Select
              name="currentSession"
              value={formData.currentSession}
              onChange={handleChange}
              isInvalid={!!errors.currentSession}
            >
              <option value="">Current Session *</option>
              {sessions.map(session => (
                <option key={session} value={session}>{session}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.currentSession}</Form.Control.Feedback>
          </Col>

          <Col md={3}>
            <Form.Select
              name="promoteSession"
              value={formData.promoteSession}
              onChange={handleChange}
              isInvalid={!!errors.promoteSession}
            >
              <option value="">Promote Session *</option>
              {sessions.map(session => (
                <option key={session} value={session}>{session}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.promoteSession}</Form.Control.Feedback>
          </Col>

          <Col md={3}>
            <Form.Select
              name="fromClass"
              value={formData.fromClass}
              onChange={handleChange}
              isInvalid={!!errors.fromClass}
            >
              <option value="">Promotion From Class *</option>
              {classes.map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.fromClass}</Form.Control.Feedback>
          </Col>

          <Col md={3}>
            <Form.Select
              name="toClass"
              value={formData.toClass}
              onChange={handleChange}
              isInvalid={!!errors.toClass}
            >
              <option value="">Promotion To Class *</option>
              {classes.map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.toClass}</Form.Control.Feedback>
          </Col>
        </Row>

        <Button variant="warning" type="submit" className="me-2">Save</Button>
        <Button variant="dark" type="button" onClick={handleReset}>Reset</Button>
      </Form>
    </div>
  );
};

export default StudentPromotionForm;
