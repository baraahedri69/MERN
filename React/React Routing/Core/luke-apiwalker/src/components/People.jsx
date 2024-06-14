import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const People = () => {
  const { id } = useParams();
  const [people, setPeople] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get(`https://swapi.dev/api/people/${id}`)
      .then(response => {
        setPeople(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return (
    <div>
      <p>These aren't the droids you're looking for.</p>
      <img src="obi-wan.jpg" alt="Obi-Wan Kenobi" />
    </div>
  );

  return (
    <>
      <h1>{people.name}</h1>
      <p>Height: {people.height}</p>
      <p>Mass: {people.mass}</p>
      <p>Hair Color: {people.hair_color}</p>
      <p>Skin Color: {people.skin_color}</p>
    </>
  );
}

export default People;