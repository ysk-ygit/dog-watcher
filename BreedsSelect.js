import React from 'react'

export const BreedsSelect = (props) => {
  const option = props.breeds.map((breed) =>
    <option value={breed}>{breed}</option>
  );
  function select(event) {
    props.setSelectedBreed(event.target.value);
  }   

  return (
      <select id="select"onChange={select} value={props.selectedBreed}>
       {option}
      </select>
  )
}


