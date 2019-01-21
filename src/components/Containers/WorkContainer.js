import React, { Component } from 'react';
import Project from "../Project/Project";
import projects from "../../projects.js";

class WorkContainer extends Component {
    state = {
        projects: projects,
    }
    render() {
        const { projects } = this.state;
        return (
            <div className="WorkContainer">
                {Object.keys(projects).map((key) =>
                    <Project
                        demo={projects[key].demo}
                        description={projects[key].description}
                        images={projects[key].img_src}
                        inspiration={projects[key].inspiration}
                        projectType={projects[key].projectType}
                        tech={projects[key].tech}
                        title={projects[key].title}
                        key={key}
                    />
                )}
            </div>
        );
    }
}

export default WorkContainer;
