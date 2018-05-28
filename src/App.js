import React, { Component } from 'react';
import './App.css';
import Projects from './components/projects/Projects';
import AddProject from './components/projects/AddProject';
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './components/todo/Todos';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/projects/home';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

 getTodos(){
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    dataType : 'json',
    cache:false,
    success: function(data){
      this.setState({todos: data}, function(){
        console.log(this.state);
      });
    }.bind(this),
    error: function(xhr, status, err){
      console.log(err);
    }
  });
 }
 getProjects(){
  this.setState({projects : [
    {
      id:uuid.v4(),
      title: 'Business Website',
      category : ' Web Design'
    },
    {
      id:uuid.v4(),
      title: 'Social App',
      category : ' Mobile Development'
    },
    {
      id:uuid.v4(),
      title: 'Ecommerce Shopping',
      category : ' Web Development'
    }
  ]});
 }

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }


  componentDidMount(){
    this.getTodos();
  }

  handleAddProject(project){
    console.log("new Project :"+project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){

    let projects =this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});

  }

  render() {
    return (
      <div className="App container">
         <AddProject addProject={this.handleAddProject.bind(this)} className="row"/>
         <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
         <hr/>
         <Todos todos={this.state.todos}/>
         {/* <Router>
            <div>
                <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={App} />
                  <Route exact path='/Login' component={Home} />
               </Switch>
            </div>
        </Router> */}

      </div>
    );
  }
}

export default App;
