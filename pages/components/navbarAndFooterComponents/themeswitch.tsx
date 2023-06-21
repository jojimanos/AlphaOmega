import styles from "../../../styles/navbar.module.css";
import Image from "next/image";

type SwitchThemeProps = {
  themeswitch: string;
  toggleTheme: () => void;
};

const SwitchTheme: React.FC<SwitchThemeProps> = ({
  themeswitch,
  toggleTheme,
}) => {
  return (
    <button className={styles.navButton} onClick={toggleTheme}>
      <Image
        className={styles.navButtonIcon}
        src="/scroll.png"
        alt=""
        height={40}
        width={100}
      />
      <span>{themeswitch}</span>
    </button>
  );
};

export default SwitchTheme;
