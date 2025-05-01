import Students from './Students';
import Teachers from './Teachers';
import Earnings from './Earnings';
import Parents from './Parents';
import EarningsChart from './EarningsChart';
import ExpensesChart from './ExpensesChart';
import StudentsChart from './StudentsChart';
import EventCalendar from './EventCalendar';
import WebsiteTraffic from './WebsiteTraffic';
import NoticeBoard from './NoticeBoard';
import FacebookCard from './FacebookCard';
import TwitterCard from './TwitterCard';
import GooglePlusCard from './GooglePlusCard';
import LinkedInCard from './LinkedInCard';

const Dashboard: React.FC = () => {
    return (
        <div className="p-3">
            <h2>Admin Dashboard</h2>
            <div className="row">
                <div className="col-md-3">
                <Students/>
                </div>
                <div className="col-md-3">
                <Teachers/>
                </div>
                <div className="col-md-3">
                <Earnings/>
                </div>
                <div className="col-md-3">
                <Parents/>
                </div>
                <div className="col-md-6">
                <div className="mt-4">
                <EarningsChart/>
                </div>
                </div>
                <div className="col-md-3">
                <div className="mt-4">
                <ExpensesChart/>
                </div>
                </div>
                <div className="col-md-3">
                <div className="mt-4">
                <StudentsChart/>
                </div>
                </div>
                <div className="col-md-4">
                <div className="mt-4">
                <EventCalendar/>
                </div>
                </div>
                <div className="col-md-4">
                <div className="mt-4">
                <WebsiteTraffic/>
                </div>
                </div>
                <div className="col-md-4">
                <div className="mt-4">
                <NoticeBoard/>
                </div>
                </div>
                <div className="col-md-3">
                <div className="mt-4">
                <FacebookCard/>
                </div>
                </div>
                <div className="col-md-3">
                <div className="mt-4">
                <TwitterCard/>
                </div>
                </div>
                <div className="col-md-3">
                <div className="mt-4">
                <GooglePlusCard/>
                </div>
                </div>
                <div className="col-md-3">
                <div className="mt-4">
                <LinkedInCard/>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
