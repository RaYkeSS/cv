import { Link } from "@mui/material";
import NextLink from "next/link";

import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

import Feedback from "../ui/Feedback/Fedback";
import Media from "@/components/ui/Media/media";

import styles from "./Contact.module.scss";

export default function Contacts() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Contacts</h2>
        <p className={styles.text}>
          What’s next? Feel free to reach out to me if youre looking for a
          developer, have a query, or simply want to connect.
        </p>
        <Link
          className={styles.link}
          component={NextLink}
          variant="h4"
          color="inherit"
          underline="none"
          sx={{ mb: 2 }}
          href="mailto:raykess25rus@gmail.com"
        >
          <MailOutlineOutlinedIcon />
          raykess25rus@gmail.com
          <ContentCopyOutlinedIcon />
        </Link>
        <Link
          className={styles.link}
          component={NextLink}
          variant="h4"
          color="inherit"
          underline="none"
          sx={{ mb: 6 }}
          href="tel:+79084597310"
        >
          <PhoneOutlinedIcon />
          +7 (908) 459-73-10
          <ContentCopyOutlinedIcon />
        </Link>
        <Feedback />
        <span className={styles.descr}>
          You may also find me on these platforms!
        </span>
        <Media />
      </div>
    </section>
  );
}
