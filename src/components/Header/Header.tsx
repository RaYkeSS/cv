'use client'
import {useState} from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import NextLink from "next/link";

import ThemeSwitch from "@/components/ui/ThemeSwitch/ThemeSwitch";
import LanguageSelector from "../ui/LanguageSelector/LanguageSelector";

import styles from "./Header.module.scss";
import logo from "@public/img/logo.png";

interface Content {
  about: string;
  skills: string;
  projects: string;
  contact: string;
  download: string;
}

interface HeaderProps {
  content: Content;
}

export default function Header({ content }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image alt="raykess logo" src={logo} width={36} height={36} />
        <nav>
          <div className={styles.burger} onClick={toggleMenu}>
            <span className={`${styles.line} ${isOpen ? styles.open : styles.closed}`}></span>
            <span className={`${styles.line} ${isOpen ? styles.open : styles.closed}`}></span>
            <span className={`${styles.line} ${isOpen ? styles.open : styles.closed}`}></span>
          </div>
          <ul className={`${styles.nav__list} ${isOpen ? styles.open : styles.closed}`}>
            <li className={styles.nav__item}>
              <Button component={NextLink} color="inherit" href="#about">
                {content.about}
              </Button>
              </li>
              <li className={styles.nav__item}>
                <Button component={NextLink} color="inherit" href="#skills">
                  {content.skills}
                </Button>
              </li>
              <li className={styles.nav__item}>
                <Button component={NextLink} color="inherit" href="#projects">
                  {content.projects}
                </Button>
              </li>
              <li className={styles.nav__item}>
                <Button component={NextLink} color="inherit" href="#contact">
                  {content.contact}
                </Button>
              </li>
            </ul>
        </nav>
        <div className={styles.button_group}>
        <LanguageSelector />
          <ThemeSwitch />
          <Button href={"/pdf/cv.pdf"} variant="contained">
            {content.download}
          </Button>
        </div>
      </div>
    </header>
  );
}
