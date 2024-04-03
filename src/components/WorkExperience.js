import React from "react";

const WorkExperience = () => {
    const works = 
    [
        {
            "id": 1,
            "employer": "SHT-Tukku",
            "title": "Upholsterer",
            "year": "2017 - 2023",
            "description": "Different tasks in carpentry and upholstery, tasks in administration and management"
        },
        {
            "id": 2,
            "employer": "SOL Palvelut",
            "title": "Housekeeper",
            "year": "2014 - 2016",
            "description": "Keeping the hotel rooms in superior condition, serving international clients in high-paced environment"
        }
    ]

    return (
        <div className="educational-background container mt-5">
            <h2 className="mb-4">Latest Work Experience</h2>
            <div className="row">
                {works.map((work) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={work.id}>
                        <div className="card h-100 shadow">
                            <div className="card-header">
                                <h5 className="card-title mb-0">{work.employer}</h5>
                            </div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {work.title}
                                </h6>
                                <p className="card-text">{work.description}</p>
                            </div>
                            <div className="card-footer text-muted">
                                <small>{work.year}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;