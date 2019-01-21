import React, { Component } from 'react';
import WorkHistory from "../WorkHistory/WorkHistory";
import resume from "../../resume";

class ResumeContainer extends Component {
    state = {
        work_history: resume.work_history,
    }
    render() {
        const { work_history } = this.state;
        return (
            <div className="ResumeContainer">
                {Object.keys(work_history).map((key) =>
                    <WorkHistory
                        key={key}
                        location={work_history[key].location}
                        company={work_history[key].company}
                        position={work_history[key].position}
                        url={work_history[key].company_site}
                    />
                )}
            </div>
        );
    }
}

export default ResumeContainer;
