import { validateInputValue } from "../../util/util";

import classes from "./Input.module.css";

interface PropsShape {
  title: string;
  id: string;
  value: string;
  unit: string;
  options: Array<{ value: number; title: string }>;
  onChange: (value: string) => void;
}

const Input = ({ title, id, value, unit, options, onChange }: PropsShape) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatToNumber = e.target.value;
    const isValid = validateInputValue(formatToNumber, id);

    isValid && onChange(formatToNumber);
  };

  const onClickHandler = (optionValue: number) => {
    if (optionValue === 0) {
      onChange("0");
    } else {
      const newValue = +value + optionValue;
      onChange(newValue + "");
    }
  };

  return (
    <div className={classes.wrapper}>
      <label className={classes.label} htmlFor={id}>
        {title}
      </label>
      <div className={classes.box}>
        <input
          id={id}
          className={classes.input}
          type="text"
          value={value}
          onChange={onChangeHandler}
        />
        <span className={classes.unit}>{unit}</span>
      </div>

      <ul className={classes.options}>
        {options.map((option) => (
          <li className={classes.option} key={option.title}>
            <button type="button" onClick={() => onClickHandler(option.value)}>
              {option.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Input;
