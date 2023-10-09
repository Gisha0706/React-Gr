import Styles from "./style.module.css";



const Err = (props) => {
  return (
    <div id="err" className={Styles.err}>
      <h1>E r r o r: </h1>
       <p> Maximum amount tasks is seven, don't create more than seven. </p>
    </div>
  );
};

export default Err;