import classes from "./Button.module.css";

interface PropsShape {
  disabled: boolean;
}

const Button = ({ disabled }: PropsShape) => {
  return (
    <div className={classes.wrapper}>
      <button disabled={!disabled} className={classes.button}>
        계산하기
      </button>
    </div>
  );
};

export default Button;
