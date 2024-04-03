import React from "react";
import hopeasarkka from "../assets/images/Etusivu.png";
import kirjanpitaja from "../assets/images/Selaa.png";

const Projects = () => {
    const projects = 
    [
        {
            "id": 1,
            "name": "Hotelli Hopeasärkkä",
            "tech": "HTML, CSS, JS, PHP, SQL",
            "year": "2023",
            "image": hopeasarkka
        },
        {
            "id": 2,
            "name": "Kirjanpitäjä",
            "tech": "HTML, CSS, JS, PHP, SQL",
            "year": "2023",
            "image": kirjanpitaja
        }
    ]

    return (
        <div className="educational-background container mt-5">
            <h2 className="mb-4">Projects</h2>
            <div className="row">
                {projects.map((project) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
                        <div className="card h-100 shadow">
                            <div className="card-header">
                                <h5 className="card-title mb-0">{project.name}</h5>
                            </div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {project.tech}
                                </h6>
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="card-footer text-muted">
                                <small>{project.year}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;