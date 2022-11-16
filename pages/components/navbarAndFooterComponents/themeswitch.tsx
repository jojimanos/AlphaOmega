import styles from "../../styles/Home.module.css";

function SwitchTheme(props: any): JSX.Element {
  return (
    <button className={styles.container} onClick={() => props.toggleTheme()}>
      Switch
    </button>
  );
}

export default SwitchTheme;
