import Styles from "./styles.module.css";


const Task = (props) => {
  return (
    <div className={Styles.task}>
      <button id="knop"  onClick={props.submit}>x</button>
      <p>{props.name}</p>
    </div>
  );
};

export default Task;
