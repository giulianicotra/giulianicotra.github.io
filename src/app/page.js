import Hero from "../../components/Hero";
import SectionAbout from "../../components/SectionAbout";
import SectionProjects from "../../components/SectionProjects";
import SectionContact from "../../components/SectionContact";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <SectionAbout />
        <SectionProjects />
        <SectionContact />
      </main>
    </>
  );
}
