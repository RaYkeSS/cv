import { Button } from "@mui/material";
import NextLink from "next/link";

import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

import Feedback from "@/components/ui/Feedback/Fedback";
import Media from "@/components/ui/Media/Media";

import styles from "./Contact.module.scss";

interface Content {
  title: string;
  text: string;
  feedback: Feedback;
  descr: string;
}

interface Feedback {
  feedbackButton: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  agreement: string;
  submitButton: string;
  submitButtonSending: string;
  deleteButton: string;
}

interface ContactsProps {
  content: Content;
}

export default function Contacts({ content }: ContactsProps) {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>{content.title}</h2>
        <p className={styles.text}>{content.text}</p>
        <Button
          className={styles.link}
          component={NextLink}
          color="inherit"
          underline="none"
          sx={{ mb: 2 }}
          href="mailto:raykess25rus@gmail.com"
        >
          <MailOutlineOutlinedIcon />
          raykess25rus@gmail.com
          <ContentCopyOutlinedIcon />
        </Button>
        <Button
          className={styles.link}
          component={NextLink}
          color="inherit"
          underline="none"
          sx={{ mb: 6 }}
          href="tel:+79084597310"
        >
          <PhoneOutlinedIcon />
          +7 (908) 459-73-10
          <ContentCopyOutlinedIcon />
        </Button>
        <Feedback content={content.feedback} />
        <span className={styles.descr}>{content.descr}</span>
        <Media />
      </div>
    </section>
  );
}
