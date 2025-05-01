import { FaBell, FaUser } from 'react-icons/fa';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <input type="text" className="form-control w-25" placeholder="Find something..." />
            <div className="ms-auto">
                <FaBell className="mx-3" size={20} />
                <FaUser size={20} />
            </div>
        </nav>
    );
};

export default Navbar;
