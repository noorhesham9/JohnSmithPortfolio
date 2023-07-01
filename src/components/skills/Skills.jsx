import Back_end from "./Back-end";
import Front_end from "./Front-end";
import "./skills.css";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <Front_end />
        <Back_end />
      </div>
    </section>
  );
};

export default Skills;
