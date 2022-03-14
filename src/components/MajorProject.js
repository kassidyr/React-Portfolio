import React from 'react';
import "./MajorProject.css";
const MajorProject = (props) => {
    return (
        <div className="majorproject">
            <img alt="majorProject" src={props.source} />
            <h4>{props.name}</h4>
        </div>
    )
};

export default MajorProject;
