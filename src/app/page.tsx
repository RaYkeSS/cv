"use client";
import * as React from "react";
import { createContext, useState } from "react";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";

import styles from "./page.module.scss";
import "@/scss/globals.scss";

export const ModeContext = createContext();

export default function Home() {
  const [isDark, setIsDark] = useState();
  return (
    <div className={`${styles.wrapper} ${isDark}`}>
      <ModeContext.Provider value={{ setIsDark }}>
        <Header />
      </ModeContext.Provider>
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
