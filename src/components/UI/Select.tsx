import classes from "./Select.module.css";

interface PropsShape {
  title: string;
  value: string;
  options: Array<string>;
  onChange: (value: string) => void;
}

const Select = ({ title, value, options, onChange }: PropsShape) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={classes.wrapper}>
      <label className={classes.label} htmlFor="select">
        {title}
      </label>
      <div className={classes.box}>
        <select
          id="select"
          className={classes.select}
          value={value}
          onChange={onChangeHandler}
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        <i className="fa-solid fa-angle-down"></i>
      </div>
    </div>
  );
};

export default Select;
