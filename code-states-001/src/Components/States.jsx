import "./states.css";

const States = (props) => {
  return (
    <div>
      <h2 className={props.h2color ? "head" : "noheader"}> {props.hfirst} </h2>
      <p className={props.pcolor ? "para" : "nopara"}>{props.pfirst} </p>
      <p className={props.pcolor ? "para" : "nopara"}>{props.psecond} </p>
    </div>
  );
};

export default States;