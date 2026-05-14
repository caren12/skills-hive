import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../services/api";

function EditSkill() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    API.get(`/skills/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
        setCategory(res.data.category);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.put(`/skills/${id}`, {
      title,
      description,
      category
    });

    alert("Skill updated successfully!");
    navigate("/skills");
  };

  return (
    <>
      <Navbar />

      <div className="form-container">
        <h2>Edit Skill</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Skill title"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />

          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
          />

          <button type="submit">Update Skill</button>
        </form>
      </div>
    </>
  );
}

export default EditSkill;