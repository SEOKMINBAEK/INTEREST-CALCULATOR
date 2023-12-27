import classes from "./Input.module.css";

const Input = () => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.label} htmlFor="input">
        대출금액
      </label>
      <div className={classes.box}>
        <input id="input" className={classes.input} type="text" />
        <span className={classes.unit}>원</span>
      </div>

      <p className={classes.convert}>100,000원</p>

      <ul className={classes.options}>
        <li className={classes.option}>
          <button>초기화</button>
        </li>
        <li className={classes.option}>
          <button>+100만</button>
        </li>
        <li className={classes.option}>
          <button>+1000만</button>
        </li>
        <li className={classes.option}>
          <button>+1억</button>
        </li>
      </ul>
    </div>
  );
};

export default Input;
