import React, { Component } from "react";
import Project from "./Components/Project";
import AddProject from "./Components/AddProject";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      Project: []
    };
  }
  componentWillMount() {
    this.setState({
      Project: [
        {
          title: "Business website",
          category: "Web design"
        },
        {
          title: "Sharma Enterprise",
          category: "Grossary Service"
        },
        {
          title: "Online Sharma Enterprise",
          category: "Grossary OnLine Mall"
        },
        {
          title: "Sharma Trading",
          category: "Online trading"
        }
      ]
    });
  }
  handleAddProject(project) {
    let projects = this.state.Project;
    projects.push(project);
    this.setState({ projects: projects });
  }
  render() {
    return (
      <div className="App">
        <AddProject AddProject={this.handleAddProject.bind(this)} />
        <Project test={this.state.Project} />
      </div>
    );
  }
}
export default App;
