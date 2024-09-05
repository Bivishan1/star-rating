import logo from './logo.svg';
import './App.css';
import { FaStar } from "react-icons/fa";
import { useState } from 'react';

//creating an array through Array() function where spread operator helps to combine each length of array in one line.
const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
}

function StarRating({ countStart = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0); // don't select at initial stage when component render.
  //returning star component by creating given length of array.
  return createArray(countStart).map((n, i) => (
    <Star key={i} selected={selectedStars > i} //to keep track of selected stars based on index.
      onSelect={() => setSelectedStars(i + 1)} /> //selecting stars based on index, where our base index is 0 so +1 and making sure capturing it correctly.
  ))
}

function App() {
  return <StarRating countStart={10} />
}

export default App;
