import React from 'react';

function About(props) {
    return (
        <div>
            <h1>About This App</h1>
            <p className="my-1">
                This is a full stack React app for keeping contacts
            </p>
            <small className="p">
                &copy; CopyRight { new Date().getFullYear() } <br/>
            </small>
        </div>
    );
}

export default About;