import { useState } from "react";

const AddRecipeeForm = () => {
  const [formData, setformData] = useState({
    name: "",
    cuisineType: "",
    ingredients: "",
    instructions: "",
    imgUrl: "",
  });

  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from e.target
    setformData((prevData) => ({
      ...prevData,  
      [name]: value, 
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://mcr-be-recipee-organiser.vercel.app/recipees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw "Failed to add Recipee."
      }
      const data = await response.json();
      console.log("Recipee added", data);
      setMessage("Recipe added successfully!"); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Recipe Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Cuisine Type</label>
          <input
            type="text"
            className="form-control"
            name="cuisineType"
            value={formData.cuisineType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          <textarea
            className="form-control"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Instructions</label>
          <textarea
            className="form-control"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            name="imgUrl"
            value={formData.imgUrl}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Recipe
        </button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default AddRecipeeForm;