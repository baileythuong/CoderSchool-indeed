import React from 'react';
import {useSelector} from 'react-redux';

export default function Welcome() {
    const renderInfo = useSelector((state) => state);

    return (
        <div className="container d-flex justify-content-center">
            <h1>Welcome, {renderInfo.name}!</h1>
        </div>
    )
}
