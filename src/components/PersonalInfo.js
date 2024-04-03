import React from 'react';
import omakuva from '../assets/images/omakuva1.jpg';

const PersonalInfo = () => {
    return (
        <div className="personal-info container mt-5">
            <div className="card mb-3 shadow">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img 
                            src={omakuva} 
                            alt="Virve Rajasärkkä"
                            className="img-fluid rounded-start"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Personal Information</h2>
                            <p className="card-text">Virve Rajasärkkä</p>
                            <p className="card-text">virve.rajasarkka@hotmail.fi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;