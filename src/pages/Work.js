import React from 'react';

const Work = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">My Works</h1>
            <ul className="space-y-4">
                <li className="border p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">プロジェクト1</h2>
                    <p>プロジェクトの説明です。</p>
                </li>
                <li className="border p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">プロジェクト2</h2>
                    <p>プロジェクトの説明です。</p>
                </li>
            </ul>
        </div>
    );
};

export default Work;
