import React from 'react';
import "./MajorProject.css";
const MajorProject = (props) => {
    return (
        <div className="majorproject">
            <img alt="majorProject" src={props.source} />
            <h3>{props.name}</h3>
        </div>
    )
};

export default MajorProject;
