import { Card, Row, Col, Button } from 'react-bootstrap';

const TeacherDetails = () => {
  const teacher = {
    name: 'Steven Johnson',
    gender: 'Male',
    fatherName: 'Steve Jones',
    motherName: 'Naomi Rose',
    religion: 'Islam',
    joiningDate: '07.08.2016',
    email: 'stevenjohnson@gmail.com',
    subject: 'English',
    class: '2',
    section: 'Pink',
    idNo: '10005',
    address: 'House #10, Road #6, Australia',
    phone: '+88 98568888418',
    description:
      'Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale word moun taiery. Aliquam erat volutpaturabiene natis massa sedde sodale word moun taiery.',
  };

  return (
    <div className="p-4">
      <h4>About Me</h4>
      <Card className="p-4">
        <Row>
          <Col md={3} className="text-center">
            <div style={{ width: '100%', height: '330px', backgroundColor: '#ccc' }} className="mb-3 d-flex align-items-center justify-content-center">
              <span>280x330</span>
            </div>
          </Col>
          <Col md={9}>
            <div className="d-flex justify-content-between">
              <div>
                <h5>{teacher.name}</h5>
                <p className="text-muted">{teacher.description}</p>
              </div>
              <div className="d-flex gap-2">
                <Button variant="light"><i className="bi bi-pencil-square"></i></Button>
                <Button variant="light"><i className="bi bi-printer"></i></Button>
                <Button variant="light"><i className="bi bi-download"></i></Button>
              </div>
            </div>

            <Row className="mt-4">
              <Col md={4}><strong>Name:</strong> {teacher.name}</Col>
              <Col md={4}><strong>Gender:</strong> {teacher.gender}</Col>
              <Col md={4}><strong>Father Name:</strong> {teacher.fatherName}</Col>
              <Col md={4}><strong>Mother Name:</strong> {teacher.motherName}</Col>
              <Col md={4}><strong>Religion:</strong> {teacher.religion}</Col>
              <Col md={4}><strong>Joining Date:</strong> {teacher.joiningDate}</Col>
              <Col md={4}><strong>E-mail:</strong> {teacher.email}</Col>
              <Col md={4}><strong>Subject:</strong> {teacher.subject}</Col>
              <Col md={4}><strong>Class:</strong> {teacher.class}</Col>
              <Col md={4}><strong>Section:</strong> {teacher.section}</Col>
              <Col md={4}><strong>ID No:</strong> {teacher.idNo}</Col>
              <Col md={4}><strong>Address:</strong> {teacher.address}</Col>
              <Col md={4}><strong>Phone:</strong> {teacher.phone}</Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default TeacherDetails;
