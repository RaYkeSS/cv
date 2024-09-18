import * as React from "react";

import { getDictionary } from "@/app/dictionaries";

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

interface Params {
  lang: string;
}

interface Dictionary {
  header: string;
  hero: string;
  about: string;
  skills: string;
  experience: string;
  projects: string;
  contact: string;
  footer: string;
}

async function Home({ params }: { params: Params }): Promise<JSX.Element> {
  const { header, hero, about, skills, experience, projects, contact, footer } =
    (await getDictionary(params.lang)) as Dictionary;

  return (
    <div className={styles.wrapper}>
      <Header content={header} />
      <Hero content={hero} />
      <About content={about} />
      <Skills content={skills} />
      <Experience content={experience} />
      <Projects content={projects} />
      <Contact content={contact} />
      <Footer content={footer} />
    </div>
  );
}

export default Home;
