import Style from './style.module.css'


const DellAll = (props) => {
    return (
  
        <button className={Style.DellAll} onClick={props.submit}><b>Dell All Tasks</b></button>
  
    );
  };
  
  export default DellAll;