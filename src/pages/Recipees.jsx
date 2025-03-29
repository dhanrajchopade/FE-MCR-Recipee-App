import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../useFetch";

const Recipees = () => {
  const { data, loading, error } = useFetch("https://mcr-be-recipee-organiser.vercel.app/recipees");
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data?.filter((recipee) =>
    recipee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDeleteButon = async (id) => {
    try {
      const response = await fetch(`https://mcr-be-recipee-organiser.vercel.app/recipees/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Recipe deleted successfully!");
      
      } else {
        alert("Failed to delete the recipe.");
      }
    } catch (error) {
      console.error("Error deleting recipe:", error);
      alert("An error occurred while deleting the recipe.");
    }
  };

  return (
    <div className="container mt-3">
      <div className="mb-3"> 
        <input
          className="form-control"  
          type="search"
          placeholder="Search recipes by name..."
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <div className="row">
        {filteredData?.map((recipee) => (
     <div className="col-md-3 mb-4" key={recipee._id}> {/* fit 4 cards in a row */}
     <div className="card" style={{ height: '100%' }}>  
       <img
         src={recipee.imgUrl}
         className="card-img-top"
         alt={recipee.name}
         style={{ objectFit: 'cover', height: '400px' }}  
       />
       <div className="card-body">  
         <h3 className="card-title">{recipee.name}</h3>
         <p className="card-text">
           <strong>Cuisine Type: </strong>
           {recipee.cuisineType}
         </p>
         <p className="card-text">
           <strong>Ingredients: </strong>
           <Link to={`/recipees/${recipee._id}`}>See Recipe</Link>
         </p>
         <p className="card-text">
           <strong>Instructions: </strong>
           <Link to={`/recipees/${recipee._id}`}>See Recipe</Link>
         </p>
         <button
           className="btn btn-danger mt-3"  
           onClick={() => handleDeleteButon(recipee._id)}
         >
           Delete
         </button>
       </div>
     </div>
   </div>
         
        ))}
      </div>
    </div>
  );
};

export default Recipees;
