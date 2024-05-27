import React, { useState } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


export default function AddPlayer() {
///creating variables for my form fields using UseState from React
  const [formData, setFormData] = useState({
    name: "",
    status: "",
    breed: "",
    imageUrl: "",
    team: "",
  });

  ///creating variables for my submit using use state
  const [submitData, setSubmitData] = useState(null);

  ///creating function to submit form data 
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players",
        {
          method: "POST",
          body: JSON.stringify(),
          headers: { "Content-Type": "application/json" },
        }
      );
      const result = await response.json();
      console.log(result);;
    } catch (error) {
      console.error(error);
    }
  }


  async function handleInputChange(event) {
    try {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } catch (error) {
      console.error(error);
    }
  }


  return (
  <form onSubmit={handleSubmit}>
        
        <h1>New Player Form 🐾</h1>
       
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <br />
   

        <label>Status:</label>
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
        />
        <br />
    

        <label>Breed:</label>
        <input
          type="text"
          name="breed"
          value={formData.breed}
          onChange={handleInputChange}
        />
        <br />
    

        <label>Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          placeholder="image URL"
          onChange={handleInputChange}
        />
        <br />
     

        <label>Team:</label>
        <input
          type="text"
          name="team"
          value={formData.team}
          onChange={handleInputChange}
        />
        <br />
    
        <button type="submit">Submit</button>
      
      </form>
  );
}