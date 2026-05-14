import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function AddSkill() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/skills", {
      title,
      description,
      category
    });

    alert("Skill added!");
    setTitle("");
    setDescription("");
    setCategory("");
  };

  return (
    <>
      <Navbar />

      <div className="form-container">
        <h2>Add Skill</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <button type="submit">Add Skill</button>
        </form>
      </div>
    </>
  );
}

export default AddSkill;