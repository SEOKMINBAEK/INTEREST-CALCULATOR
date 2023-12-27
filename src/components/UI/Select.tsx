import classes from "./Select.module.css";

const Select = () => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.label} htmlFor="select">
        상환방식
      </label>
      <div className={classes.box}>
        <select id="select" className={classes.select}>
          <option>원리금균등상환</option>
          <option>원금균등상환</option>
          <option>만기일시상환</option>
        </select>

        <i className="fa-solid fa-angle-down"></i>
      </div>
    </div>
  );
};

export default Select;
