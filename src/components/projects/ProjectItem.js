import React, { Component } from 'react';
import './projects.css';

class ProjectItem extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }
  
  render() {
    return (
      <li className="Project">
            {this.props.project.title} : {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;
