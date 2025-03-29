import React from "react";
import { data, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const RecipeeDetails = ()=>{
const {id} = useParams()
const {data:recipee, loading, error} = useFetch(`https://mcr-be-recipee-organiser.vercel.app/recipees/${id}`)
if (loading) {
    return <div>Loading event details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipee) {
    return <div>Recipee not found</div>;
  }
return(
    <>
    <div className="bg-light">
<div className="container">
<h1 className="py-3">{recipee.name}</h1>
<div className="card">
<div className="row">
<div className="col-md-4">
<img className="img-fluid rounded-start" src={recipee.imgUrl} alt={recipee.name}/>
</div>
<div className="col-md-8">
<div className="card-body">
<h2 className="card-title">Cuisine: {recipee.cuisineType}</h2>
<h3>Ingredients: </h3>
<p className="card-text">{recipee.ingredients} </p>
<h3>Instructions: </h3>
<ul className="instructions-list">

                    {recipee.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>
</div>




</div>
</div>
</div>


</div>
    </div>    
    </>
)

}

export default RecipeeDetails