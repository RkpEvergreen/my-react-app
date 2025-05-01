import {FaDollarSign } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

const Earnings: React.FC = () => {
    return (
            
        <Card className="p-3">
        <FaDollarSign size={30} className="text-success" />
        <h5>Earnings</h5>
        <p>$193,000</p>
    </Card>
    );
};

export default Earnings;
