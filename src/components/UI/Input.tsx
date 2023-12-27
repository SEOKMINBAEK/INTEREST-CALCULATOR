import classes from "./Input.module.css";

interface Props {
  title: string;
  id: string;
  value: number;
  unit: string;
  options: { value: number; title: string }[];
}

const Input = ({ title, id, value, unit, options }: Props) => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.label} htmlFor={id}>
        {title}
      </label>
      <div className={classes.box}>
        <input id={id} className={classes.input} type="text" value={value} />
        <span className={classes.unit}>{unit}</span>
      </div>

      <ul className={classes.options}>
        {options.map((option) => (
          <li className={classes.option}>
            <button>{option.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Input;
