import Select from "../UI/Select";
import Input from "../UI/Input";
import Button from "../UI/Button";

import classes from "./Form.module.css";

const Form = () => {
  return (
    <form className={classes.form}>
      <Select />
      <Input />
      <Input />
      <Input />
      <Button />
    </form>
  );
};

export default Form;
