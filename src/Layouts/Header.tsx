import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>대출이자 계산기</h1>
      <p>
        원금과 이자가 매월 얼마씩 나가는지, 대출 기간 동안 총 비용은 어떻게
        되는지 계산해 드립니다.
      </p>
    </header>
  );
};

export default Header;
