import React, { useContext } from 'react';
import AlertContext from "../../context/alert/alertContext";


const Alerts = () => {
    const alertContext = useContext(AlertContext);

    const { alerts } = alertContext;

    return (
        alerts.length > 0 && alerts.map(({ id, msg, type }) => (
            <div key={id} className={`alert alert-${type}`}>
               <i className="fas fa-info-circle" style={{fontSize: '19px'}}/> { msg }
            </div>
        ))
    );
};

export default Alerts;