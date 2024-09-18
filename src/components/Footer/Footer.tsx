import CopyrightIcon from "@mui/icons-material/Copyright";

import styles from "./Footer.module.scss";

interface FooterProps {
  content: {
    text: string;
  };
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <CopyrightIcon />
        <p className={styles.text}>{content.text}</p>
      </div>
    </footer>
  );
}
