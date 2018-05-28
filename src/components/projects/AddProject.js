import React, { Component } from 'react';
import uuid from 'uuid';
import './projects.css';


class AddProject extends Component {

  constructor(){
      super();
      this.state = {
          newProject:{}
      }
  }

  
    static defaultProps = {
        categories:[ 'Web Design','WEb Development', 'Mobile Development']
    }

  handleSubmit(e){

      if(this.refs.title.value === ''){
          alert('Nothing to Submit');
      }
      else{
          this.setState({newProject: {
                id:uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
          }}, function(){
            //   console.log(this.state);
            this.props.addProject(this.state.newProject);
          });
      }

      console.log(this.refs.title.value);
      e.preventDefault();
  }  

  render() {

    let categoryOptions = this.props.categories.map(category =>{
        return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
          <hr/>
        <h3>Add Project</h3>
        <hr/>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title</label><br/>
                <input type="text" ref="title" />
            </div>
            <br/>
            <div>
                <label>Category</label><br/>
               <select ref="category">
                    {categoryOptions}
               </select>
               <br/>
            </div>
            <br/> <br/>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default AddProject;
