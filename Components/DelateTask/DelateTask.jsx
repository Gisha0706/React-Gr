import Styles from "./styles.module.css";

const DellTask = (props) => {
  return (

      <button className={Styles.DellTask} onClick={props.submit}><b>Dellate Task</b></button>

  );
};

export default DellTask;