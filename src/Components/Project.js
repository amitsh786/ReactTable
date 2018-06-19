import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

class Projects extends Component {
  render() {
    let ProjectsItems;
    if (this.props.test) {
      ProjectsItems = this.props.test.map(project => {
        // console.log(project);
        return <ProjectItem key={project.title} project={project} />;
      });
    }
    return <div className="Projects">
    <h3>Latest project</h3>
    {ProjectsItems}</div>;
  }
}
export default Projects;
