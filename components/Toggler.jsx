import styles from "../styles/Toggler.module.scss";
const Toggler = ({ darkMode, handleClick }) => {
  return (
    <div className={styles.container}>
      {darkMode ? (
        <span onClick={handleClick} aria-label="Full Moon" role="img">
          🌕
        </span>
      ) : (
        <span onClick={handleClick} aria-label="New Moon" role="img">
          🌑
        </span>
      )}
    </div>
  );
};
export default Toggler;
