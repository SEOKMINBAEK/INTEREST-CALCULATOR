import classes from "./Button.module.css";

interface PropsShape {
  disabled: boolean;
  onClick: () => void;
}

const Button = ({ disabled, onClick }: PropsShape) => {
  return (
    <div className={classes.wrapper}>
      <button
        type="button"
        disabled={!disabled}
        className={classes.button}
        onClick={onClick}
      >
        계산하기
      </button>
    </div>
  );
};

export default Button;
