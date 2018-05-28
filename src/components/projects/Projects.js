import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import './projects.css';

class Projects extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }



  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        return(
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project}/>
        );
      });
    }

    return (
      <div className="App">
        <hr/>
        <h3>Latest Projects</h3>
         {projectItems}
      </div>
    );
  }
}
// Projects.propTypes = {
//   projects: React.PropTypes.string,
//   onDelete: React.PropTypes.func
// }

export default Projects;
