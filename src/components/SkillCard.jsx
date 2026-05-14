import { Link } from "react-router-dom";
import API from "../services/api";

function SkillCard({ skill, onDelete }) {
  const handleDelete = async () => {
    await API.delete(`/skills/${skill.id}`);
    onDelete(skill.id);
  };

  return (
    <div className="skill-card">
      <h3>{skill.title}</h3>

      <p>{skill.description}</p>

      <span>{skill.category}</span>

      <div className="card-buttons">
        <Link to={`/edit-skill/${skill.id}`}>
          <button className="edit-btn">Edit</button>
        </Link>

        <button onClick={handleDelete} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default SkillCard;