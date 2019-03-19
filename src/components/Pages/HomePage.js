import React, { Component } from 'react';
import ReactGA from 'react-ga';
import BookshelfContainer from "components/Bookshelf/BookshelfContainer";
import Intro from "components/Intro/Intro";
import Project from "components/Project/Project";
import ProjectCrochet from "components/Project/ProjectCrochet";
import ProjectNumbers from "components/Project/ProjectNumbers";
import projects from "projects.js";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.projectSectionRef = React.createRef();
    }

    state = {
        projects: projects,
        crochetRandomY: [],
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    trackEvent = (action) => {
        ReactGA.event({
            category: 'User',
            action: action
        });
    }

    initializeReactGA() {
        ReactGA.initialize('UA-130275221-1');
        ReactGA.pageview('/homepage');
    }

    componentDidMount() {
        const offset = this.projectSectionRef.current.offsetTop;
        this.props.setProjectSectionOffset(offset);
        this.initializeReactGA();
        console.log('initialize hom');
    }

    render() {
        const { projects } = this.state;
        const { routerProps } = this.props;
        return (
            <div className="HomePage">
                <Intro showingButtons />

                <div className="HomePage__projects" ref={this.projectSectionRef} id="projects">
                    <ProjectCrochet routerProps={routerProps}/>
                    {Object.keys(projects).map((key) =>
                        <Project
                            demo={projects[key].demo}
                            description={projects[key].description}
                            github={projects[key].github}
                            images={projects[key].img_src}
                            inspiration={projects[key].inspiration}
                            projectType={projects[key].projectType}
                            tech={projects[key].tech}
                            title={projects[key].title}
                            key={key}
                        />
                    )}
                    <BookshelfContainer />
                    <ProjectNumbers />
                </div>
            </div>
        );
    }
}

export default HomePage;