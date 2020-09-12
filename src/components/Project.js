import React from 'react';
import Fade from "react-reveal/Fade"

const Project = ({ project }) => {
    return (
        <Fade bottom>
        <div className="col-lg-3 my-4 col-sm-12" class="card">
            <img class="card__img" src={project.image} alt="" />
            <div style={{marginTop: '1rem'}}>
                <h5 class="card-title">{project.title}</h5>
                <a class="card-link" href={project.link} target="_blank">Link</a>
            </div>
        </div>
        </Fade>
        )
}

export default Project;
