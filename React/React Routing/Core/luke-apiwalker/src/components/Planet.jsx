import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Planet = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get(`https://swapi.dev/api/planets/${id}/`)
      .then(response => {
        setPlanet(response.data);
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
      <h1>{planet.name}</h1>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Surface Water: {planet.surface_water}</p>
      <p>Population: {planet.population}</p>
    </>
  );
}

export default Planet;