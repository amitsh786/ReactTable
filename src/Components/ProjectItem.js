import React, { Component } from "react";

class ProjectsItem extends Component {
  render() {
    return (
      <li className="ProjectsItems">
        <strong> {this.props.project.title} </strong>:{" "}
        {this.props.project.category}
      </li>
    );
  }
}
export default ProjectsItem;
