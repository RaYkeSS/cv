import Image from "next/image";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "@mui/material/Link";
import NextLink from "next/link";

import styles from "./Header.module.scss";
import ThemeSwitch from "@/components/ui/ThemeSwitch/ThemeSwitch";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image alt="logo" src="/img/logo.png" width={36} height={36} />
        <nav>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Button component={NextLink} color="inherit" href="#about">
                About
              </Button>
            </li>
            <li className={styles.nav__item}>
              <Button component={NextLink} color="inherit" href="#projects">
                Projects
              </Button>
            </li>
            <li className={styles.nav__item}>
              <Button component={NextLink} color="inherit" href="#test">
                Test
              </Button>
            </li>
            <li className={styles.nav__item}>
              <Button component={NextLink} color="inherit" href="#contact">
                Contact
              </Button>
            </li>
          </ul>
        </nav>
        <div className={styles.button_group}>
          <ThemeSwitch />
          <Button variant="contained">Download</Button>
        </div>
      </div>
    </header>
  );
}
