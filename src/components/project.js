import React from 'react'
import { Redirect, withRouter } from 'react-router-dom';
import "./project.css";

const Project = (props) => {
    
    return (
        <div className="project">
            {(props.match.params.id!=='1'&&props.match.params.id!=="2"&&props.match.params.id!=="3") && <Redirect to="/"/>}
            <div style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent:"space-around"}}>
                <h4>{props.projects[Number(props.match.params.id)-1].title}</h4>
                <img alt="project" src={props.projects[Number(props.match.params.id)-1].source}/>{/*You Can will always your fetch for the dynami routing but for sample i have done simple data pass */}
            </div>
            <div>
            <h4>Summary</h4>
                {props.projects[Number(props.match.params.id)-1].summary.map((ele,index)=><p key={index}>{ele}</p>)}
            <h4>Tools</h4>
                {props.projects[Number(props.match.params.id)-1].techs.map((ele,index)=><p key={index}>- {ele}</p>)}
            <h4>GitHub Repository:</h4>
            <a target="_blank" rel="noopener noreferrer" href={props.projects[(props.match.params.id)-1].repo} >{props.projects[(props.match.params.id)-1].repo}</a>
            <h4>Deployed Application:</h4>
            <a target="_blank" rel="noopener noreferrer" href={props.projects[(props.match.params.id)-1].linktoproject} >{props.projects[(props.match.params.id)-1].linktoproject}</a>
            </div>
        </div>
    )
}

export default withRouter(Project)
