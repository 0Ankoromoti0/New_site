import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import SNSLinks from './pages/Link';

const App = () => {
    return (
        <Router>
            <nav className="p-4 bg-gray-800 text-white flex space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/work" className="hover:underline">Work</Link>
                <Link to="/sns" className="hover:underline">SNS Links</Link>
            </nav>
            <div className="p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/sns" element={<SNSLinks />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
