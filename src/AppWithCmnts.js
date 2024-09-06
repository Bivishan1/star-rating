import logo from './logo.svg';
import './App.css';
import { FaStar } from "react-icons/fa";
import { useState } from 'react';

//creating an array through Array() function where spread operator helps to combine each length of array in one line.
const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect, ey }) {
  // return <h1>{ey}</h1>
  return <FaStar
    //onClick={() => console.log(ey)} 
    color={selected ? 'red' : 'grey'}
    onClick={onSelect}
  />
}

//just managing the state with StarRating function and useState hook within it.
// setSelectedStars function is used to change the state
// and we have attached this function with every star (in Star function) so everytime we click on star, it will change the application state.
function StarRating({ countStart = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0); // not selecting at initial stage when component render.
  //returning star component by creating given length of array.
  return createArray(countStart).map((n, i) => (
    <Star key={i} selected={selectedStars > i} //to keep track of selected stars based on index. since first index is zero so, selected stars should be greater than 0. also, in Star component's it's prop has a false value, so we also need to keep it greater than 0 i.e. i, here.
      onSelect={() => setSelectedStars(i + 1)} /> //selecting stars based on index, where our base index is 0 so +1 and making sure capturing it correctly. Where we should sett selected stars more than 1 or do +1, otherwise it will set it as in initial stage and star rating wouldn't work properly. Because we have set selectedStars state as 0 so even if we put 1 or 2 or 3, we have to do +1 anyways to capture the star index correctly.


  ))
}

function App() {
  return <StarRating />
}

export default App;
