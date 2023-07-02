import { useEffect, useState } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItem from "./WorkItem";
const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newPRO = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newPRO);
    }
  }, [item]);
  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };
  return (
    <>
      <div className="work__filter">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              key={index}
              className={`${active === index ? "active-work" : ""} work__item`}>
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default Works;
