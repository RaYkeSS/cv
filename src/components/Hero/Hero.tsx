import Image from "next/image";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import Media from "@/components/ui/Media/Media";

import styles from "./Hero.module.scss";
import photo from "@public/img/photo.jpg";

interface Content {
  title: string;
  descr: string;
  location: string;
  status: string;
}

interface HeroProps {
  content: Content;
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.descr}>{content.descr}</p>
          <div className={styles.status}>
            <LocationOnOutlinedIcon fontSize={"inherit"} />
            <span className={styles.text}>{content.location}</span>
          </div>
          <div className={`${styles.status} ${styles.status__last}`}>
            <FiberManualRecordIcon
              className={styles.fiber}
              color="success"
              fontSize={"inherit"}
            />
            <span className={styles.text}>{content.status}</span>
          </div>
          <Media />
        </div>
        <Image
          className={styles.img}
          alt="Photo of website creator"
          src={photo}
          width={3024}
          height={4032}
        />
      </div>
    </section>
  );
}
