import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
    return (
        <Card>
            <div className='about'>
                <h1>About this Project</h1>
                <p>
                    This is a React app to leave feed back for a peoduct or
                    service
                </p>
                <p>Version: 1.0.0</p>
                <p>
                    <Link to='/'> Back to home</Link>
                </p>
            </div>
        </Card>
    );
}

export default AboutPage;