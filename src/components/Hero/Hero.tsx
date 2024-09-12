import Image from "next/image";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import Media from "@/components/ui/Media/media";

import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Hello</h1>
          <p className={styles.descr}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
            pariatur. Officia pariatur alias perferendis rerum quis hic
            laboriosam expedita blanditiis ipsam, a cum et aliquid possimus
            aperiam enim nisi molestiae?
          </p>
          <div className={styles.status}>
            <LocationOnOutlinedIcon fontSize={"inherit"} />
            <span className={styles.text}>Novosibirsk, Russia</span>
          </div>
          <div className={`${styles.status} ${styles.status__last}`}>
            <FiberManualRecordIcon
              className={styles.fiber}
              color="success"
              fontSize={"inherit"}
            />
            <span className={styles.text}>Avialable</span>
          </div>
          <Media />
        </div>
        <Image
          className={styles.img}
          alt="logo"
          src="/img/logo.png"
          width={250}
          height={250}
        />
      </div>
    </section>
  );
}
