// import Header from "@/components/LanguageSelector";

import * as React from "react";

import { getDictionary } from "@/dictionaries/dictionaries";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

import styles from "./page.module.scss";
import "@/scss/globals.scss";

async function Home({ params }: any) {
  const { hero } = await getDictionary(params.lang);

  return (
    <div className={styles.wrapper}>
      <h1>{hero.title}</h1>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
