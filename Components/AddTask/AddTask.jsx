import Styles from "./styles.module.css";


const AddTask = (props) => {
  return (
    <div className={Styles.addTask}>
      <input placeholder="Input the Task Name..." id="inp" type="text" onChange={props.onChange} />
      <button onClick={props.submit}><b>Add Task</b></button>
      
    </div>
  );
};

export default AddTask;
