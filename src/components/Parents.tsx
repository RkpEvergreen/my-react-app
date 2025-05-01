import { FaUserFriends } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

const Parents: React.FC = () => {
    return (
            
        <Card className="p-3">
        <FaUserFriends size={30} className="text-success" />
        <h5>Parents</h5>
        <p>3000</p>
    </Card>
    );
};

export default Parents;
