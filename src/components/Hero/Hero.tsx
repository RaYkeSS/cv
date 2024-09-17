import Image from "next/image";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import Media from "@/components/ui/Media/Media";

import styles from "./Hero.module.scss";
import logo from "@/public/img/logo.png";

export default function Hero({ content }: any) {
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
          alt="logo"
          src={logo}
          width={250}
          height={250}
        />
      </div>
    </section>
  );
}
