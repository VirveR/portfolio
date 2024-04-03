import React from "react";

const EducationalBackground = () => {
    const educations = 
    [
        {
            "id": 1,
            "institution": "HAMK",
            "degree": "Bachelor's Degree in Computer Applications",
            "year": "2022 - 2025",
            "description": "Programming, user interface design, operating systems, software robotics, business and much more."
        },
        {
            "id": 2,
            "institution": "SASKY",
            "degree": "Vocational Qualification in Business and Administration",
            "year": "2017 - 2019",
            "description": "Accounting, payroll, business"
        },
        {
            "id": 3,
            "institution": "Tampereen ammattioppilaitos",
            "degree": "Vocational Qualification in Dressmaking",
            "year": "2006 - 2008",
            "description": "Designing and making garments industrial and tailored"
        },
        {
            "id": 4,
            "institution": "Tampereen yhteiskoulun lukio",
            "degree": "Matriculation Examination",
            "year": "1996 - 1999",
            "description": "General education, emphasis in expressive arts"
        }
    ]

    return (
        <div className="educational-background container mt-5">
            <h2 className="mb-4">Educational Background</h2>
            <div className="row">
                {educations.map((education) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={education.id}>
                        <div className="card h-100 shadow">
                            <div className="card-header">
                                <h5 className="card-title mb-0">{education.institution}</h5>
                            </div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {education.degree}
                                </h6>
                                <p className="card-text">{education.description}</p>
                            </div>
                            <div className="card-footer text-muted">
                                <small>{education.year}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationalBackground;