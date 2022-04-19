import React, { useEffect, useState } from 'react';
import './App.css';
import StarwarsContext from './Context/StarwarsContext';
import fetchPlanets from './Services/planetsApi';
import Table from './Components/Table';

function App() {
  const [data, setPlanets] = useState();

  async function getPlanets() {
    const planets = await fetchPlanets();
    setPlanets(planets);
  }

  useEffect(() => {
    getPlanets();
  });

  return (
    <StarwarsContext.Provider value={ data }>
      <Table />
    </StarwarsContext.Provider>
  );
}

export default App;
