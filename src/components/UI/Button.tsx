import classes from "./Button.module.css";

const Button = () => {
  return (
    <div className={classes.wrapper}>
      <button className={classes.button}>계산하기</button>
    </div>
  );
};

export default Button;
