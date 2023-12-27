import classes from "./Select.module.css";

interface Props {
  title: string;
  value: string;
  options: string[];
}

const Select = ({ title, value, options }: Props) => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.label} htmlFor="select">
        {title}
      </label>
      <div className={classes.box}>
        <select id="select" className={classes.select} value={value}>
          {options.map((option) => (
            <option>{option}</option>
          ))}
        </select>

        <i className="fa-solid fa-angle-down"></i>
      </div>
    </div>
  );
};

export default Select;
