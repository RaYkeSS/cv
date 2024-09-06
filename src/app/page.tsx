"use client";
import * as React from "react";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}
