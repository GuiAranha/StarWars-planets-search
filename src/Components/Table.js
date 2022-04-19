import React, { useState, useContext } from 'react';
import response from '../testData';
import StarwarsContext from '../Context/StarwarsContext';

const Table = () => {
  // let data = useContext(StarwarsContext);
  const data = response.results;

  const [filterByName, setFilterByName] = useState('');

  const [myData, setMyData] = useState(data);

  const [filterByNumericValue, setFilterByNumericValue] = useState({
    column: 'population',
    comparision: 'maior que',
    value: 0,
  });

  const handleChangeName = (event) => {
    setFilterByName(event.target.value);
  };

  const handleChangeInput = (event) => {
    setFilterByNumericValue({
      ...filterByNumericValue,
      [event.target.name]: event.target.value,
    });
  };

  const filterButton = () => {
    console.log(filterByNumericValue);
    let result = myData;
    const { comparision, value, column } = filterByNumericValue;
    if (comparision === 'menor que') {
      result = myData.filter((item) => item[column] < Number(value));
    } else if (comparision === 'maior que') {
      result = myData.filter((item) => item[column] > Number(value));
    } else if (comparision === 'igual a') {
      result = myData.filter((item) => item[column] === value);
    }
    console.log(result);
    setMyData(result);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChangeName }
      />

      <select
        name="column"
        defaultValue="population"
        data-testid="column-filter"
        onChange={ handleChangeInput }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>

      <select
        name="comparision"
        defaultValue="maior que"
        data-testid="comparison-filter"
        onChange={ handleChangeInput }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        type="number"
        name="value"
        defaultValue="0"
        data-testid="value-filter"
        onChange={ handleChangeInput }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterButton }
      >
        FILTRAR
      </button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {myData && myData.filter((item) => item.name.includes(filterByName))
            .map((item) => (
              <tr key={ item.name }>
                <td>{ item.name }</td>
                <td>{ item.rotation_period }</td>
                <td>{ item.orbital_period }</td>
                <td>{ item.diameter }</td>
                <td>{ item.climate }</td>
                <td>{ item.gravity }</td>
                <td>{ item.terrain }</td>
                <td>{ item.surface_water }</td>
                <td>{ item.population }</td>
                <td>{ item.films }</td>
                <td>{ item.created }</td>
                <td>{ item.edited }</td>
                <td>{ item.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
