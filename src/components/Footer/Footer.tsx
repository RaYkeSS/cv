import { Link } from "@mui/material";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>What’s next?</p>
        <Link>email</Link>
        <Link>num</Link>
        <span className={styles.descr}>Platforms</span>
      </div>
    </footer>
  );
}
