import {FaUserTie } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

const Teachers: React.FC = () => {
    return (
            
    <Card className="p-3">
        <FaUserTie size={30} className="text-warning" />
        <h5>Teachers</h5>
        <p>2,250</p>
    </Card>
    );
};

export default Teachers;
