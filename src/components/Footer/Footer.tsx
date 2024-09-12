import CopyrightIcon from "@mui/icons-material/Copyright";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <CopyrightIcon />
        <p className={styles.text}>2023 | Coded by RaYkeSS</p>
      </div>
    </footer>
  );
}
