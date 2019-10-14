import React from 'react';

function About(props) {
    return (
        <div>
            <h1>About This App</h1>
            <p className="my-1">
                This is a full stack React app for keeping contacts
            </p>
            <div className="bg-dark p">
                Version: 1.0.0
            </div>
        </div>
    );
}

export default About;