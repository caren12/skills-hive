import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillCard from "../components/SkillCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import API from "../services/api";
import { useEffect, useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const res = await API.get("/skills");
    setSkills(res.data);
  };

  const handleDelete = (id) => {
    setSkills(skills.filter((s) => s.id !== id));
  };

  const filteredSkills = skills
    .filter((skill) =>
      skill.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((skill) =>
      category ? skill.category === category : true
    );

  return (
    <>
      <Navbar />

      <div className="skills-container">
        <h1>Available Skills</h1>

        <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter setCategory={setCategory} />

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Skills;