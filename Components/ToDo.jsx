import React from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import DellTask from "./DelateTask/DelateTask";
import Styles from "./style.module.css";
import Err from "./ERR/Err";
import DellAll from "./DellALL/DellAll";



class ToDo extends React.Component {
  state = {
    tasks: [{ name: "Task1",  }, { name: "Task2",}, { name: "Task3",}],
    inputValue: "",
  };
  
  
  Dellx = (e) => {

    let tasks = this.state.tasks
    const gri = { name: this.state.inputValue }
    tasks.pop(gri)
    document.getElementById("err").style.opacity = 0
    this.setState({
      tasks,
    });
  }



  All = () => {
    const tasks = this.state.tasks;
    for (let i = -6; i < tasks.length; i++) {
      tasks.pop({ name: this.state.inputValue });
    }
    document.getElementById("err").style.opacity = 0
    
    this.setState({
      tasks,
    });
  }

  Dell = () => {
    const tasks = this.state.tasks;
    tasks.pop({ name: this.state.inputValue });
    console.log(tasks.length);
    document.getElementById("err").style.opacity = 0


    this.setState({
      tasks,
    });
  }
  
  onChange = (e) => {
    const value = e.target.value;
    this.setState({
      inputValue: value,
    });
  };

  submit = () => {
    
    const tasks = this.state.tasks;

    if(tasks.length <= 6){
      tasks.push({ name: this.state.inputValue });
    }else {
      document.getElementById("err").style.opacity = 1
    }
    console.log(tasks.length);
    // this.state.tasks = tasks;  sxal tarberak
    this.setState({
      tasks,
      
    });
    
  };

  render() {
    return (
      <div>
        <h1>ToDo Maximum Task creating is 7</h1>
        <AddTask onChange={this.onChange} submit={this.submit} /> 
        <DellTask submit={this.Dell}/>
        <DellAll submit={this.All}/>
        <div className={Styles.div}>
          {this.state.tasks.map((item, ) => {
            return <Task submit={this.Dellx}  name={item.name} />;
          })}
        </div>
        <Err />
      </div>
    );
  }
}

export default ToDo;
