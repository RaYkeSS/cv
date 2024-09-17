import CopyrightIcon from "@mui/icons-material/Copyright";

import styles from "./Footer.module.scss";

export default function Footer({ content }: any) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <CopyrightIcon />
        <p className={styles.text}>{content.text}</p>
      </div>
    </footer>
  );
}
