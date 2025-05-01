import { FaUsers } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

const Students: React.FC = () => {
    return (
            
            <Card className="p-3">
            <FaUsers size={30} className="text-primary" />
            <h5>Students</h5>
            <p>150,000</p>
            </Card>
    );
};

export default Students;
