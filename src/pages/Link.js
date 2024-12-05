import React from 'react';

const SNSLinks = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Connect with Me</h1>
            <ul className="space-y-4">
                <li>
                    <a href="https://twitter.com" className="text-blue-500 hover:underline">
                        Twitter
                    </a>
                </li>
                <li>
                    <a href="https://github.com" className="text-gray-800 hover:underline">
                        GitHub
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SNSLinks;
