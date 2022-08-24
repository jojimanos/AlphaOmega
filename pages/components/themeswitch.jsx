import styles from "../../styles/Home.module.css";

function SwitchTheme(props) {
  return (
    <button className={styles.container} onClick={() => props.toggleTheme()}>
      Switch
    </button>
  );
}

export default SwitchTheme;
